import asyncio
from playwright.async_api import async_playwright
# import subprocess
# import time
# import socket
import sys
import os

# def wait_for_port(port, host='localhost', timeout=30.0):
#     start_time = time.time()
#     while True:
#         try:
#             with socket.create_connection((host, port), timeout=1.0):
#                 return True
#         except OSError:
#             time.sleep(0.5)
#             if time.time() - start_time >= timeout:
#                 return False

async def main():
    # In this environment, we may not be able to start the dev server via subprocess
    # due to missing node_modules. However, we can still write the test script
    # and attempt to run it if the server is somehow available or for future use.

    # Check if we should skip server start (e.g. if we know it will fail)
    skip_server = os.environ.get("SKIP_SERVER_START", "false").lower() == "true"

    server_process = None
    if not skip_server:
        import subprocess
        import time
        import socket

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

        print("Starting React dev server...")
        server_process = subprocess.Popen(
            ["npm", "run", "dev"],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )

        time.sleep(1)
        if server_process.poll() is not None:
             print("Server process exited prematurely. Is node_modules installed?")
             # stdout, stderr = server_process.communicate()
             # print(f"Stdout: {stdout}")
             # print(f"Stderr: {stderr}")
             # We continue to try the test anyway in case a server is already running
        else:
            port_ready = wait_for_port(5173, timeout=30)
            if not port_ready:
                print("Timeout waiting for dev server to start on port 5173.")
                server_process.terminate()
                server_process.wait()
                server_process = None

    success = False

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()

            url = "http://localhost:5173/sqatester/"
            print(f"Navigating to {url}")

            try:
                response = await page.goto(url, timeout=60000)
                if response.status != 200:
                    print(f"Error: Page loaded with status {response.status}")
                    await browser.close()
                    return False
            except Exception as e:
                print(f"Could not connect to server: {e}")
                await browser.close()
                return False

            # 1. Verify Initial Render
            print("Checking if main component rendered...")
            await page.wait_for_selector('text="Jennifer McKinley"', timeout=10000)
            print("SUCCESS: Component mounted and 'Jennifer McKinley' text found.")

            # 2. Verify Default Tab (Agentic AI Prototypes)
            print("Verifying default tab content...")
            await page.wait_for_selector('text="Agentic AI Prototypes"', timeout=5000)
            await page.wait_for_selector('text="Conversational Orchestration"', timeout=5000)
            print("SUCCESS: Default tab 'Agentic AI Prototypes' content verified.")

            # 3. Switch to 'SDET & DevOps Foundation' Tab
            print("Switching to 'SDET & DevOps Foundation' tab...")
            await page.click('button:has-text("SDET & DevOps Foundation")')
            await page.wait_for_selector('text="Lead AI Engineer & Architect"', timeout=5000)
            print("SUCCESS: 'SDET & DevOps Foundation' tab content verified.")

            # 4. Switch to 'Certifications' Tab
            print("Switching to 'Certifications' tab...")
            await page.click('button:has-text("Certifications")')
            await page.wait_for_selector('iframe[title="Certifications"]', timeout=5000)
            print("SUCCESS: 'Certifications' tab content (iframe) verified.")

            success = True
            await browser.close()

    except Exception as e:
        print(f"Test FAILED with exception: {e}")
        success = False

    finally:
        print("Shutting down dev server...")
        if server_process and server_process.poll() is None:
            server_process.terminate()
            server_process.wait()

    return success

if __name__ == "__main__":
    if asyncio.run(main()):
        sys.exit(0)
    else:
        sys.exit(1)
