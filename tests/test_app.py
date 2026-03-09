import asyncio
from playwright.async_api import async_playwright
import subprocess
import time
import socket
import sys

def wait_for_port(port, host='localhost', timeout=30.0):
    start_time = time.time()
    while True:
        try:
            with socket.create_connection((host, port), timeout=1.0):
                return True
        except OSError:
            time.sleep(0.5)
            if time.time() - start_time >= timeout:
                return False

async def main():
    print("Starting React dev server...")
    # Start the dev server as a background process
    server_process = subprocess.Popen(
        ["npm", "run", "dev"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    # Check if process immediately exited (e.g., node_modules missing)
    time.sleep(1)
    if server_process.poll() is not None:
         print("Server process exited prematurely. Is node_modules installed?")
         stdout, stderr = server_process.communicate()
         print(f"Stdout: {stdout}")
         print(f"Stderr: {stderr}")
         sys.exit(1)

    # Wait for the server to bind to port 5173 (default Vite port)
    port_ready = wait_for_port(5173, timeout=30)

    if not port_ready:
        print("Timeout waiting for dev server to start on port 5173.")
        stdout, stderr = server_process.communicate()
        print(f"Stdout: {stdout}")
        print(f"Stderr: {stderr}")
        server_process.terminate()
        server_process.wait()
        sys.exit(1)

    print("Dev server started on port 5173. Waiting briefly for it to be fully ready...")
    time.sleep(5) # Give Vite an extra moment to compile

    success = False

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()

            # Navigate to the Vite base path.
            # Base path is /sqatester/ as defined in memory
            url = "http://localhost:5173/sqatester/"
            print(f"Navigating to {url}")

            response = await page.goto(url)

            if response.status != 200:
                 print(f"Error: Page loaded with status {response.status}")

                 # We don't sys.exit(1) here directly to ensure finally block runs
                 success = False
            else:
                # Wait for main text to appear to confirm App mounted
                # 'Jennifer McKinley' is the profile name defined in App.jsx
                print("Checking if main component rendered...")
                await page.wait_for_selector('text="Jennifer McKinley"', timeout=10000)
                print("SUCCESS: Component mounted and 'Jennifer McKinley' text found.")
                success = True



    except Exception as e:
        print(f"Test FAILED with exception: {e}")
        # Try to get server logs on failure
        try:
            stdout, stderr = server_process.communicate(timeout=2)
            print("Server stdout:", stdout)
            print("Server stderr:", stderr)
        except subprocess.TimeoutExpired:
            print("Could not retrieve server stdout/stderr.")
        success = False

    finally:
        print("Shutting down dev server...")
        if server_process.poll() is None:
            server_process.terminate()
            server_process.wait()

    if not success:
         sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main())
