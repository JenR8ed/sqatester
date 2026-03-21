import asyncio
from playwright.async_api import async_playwright, expect
import subprocess
import time
import socket
import sys
import os

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

async def test_basic_mount(page):
    print("Running basic mount test...")
    # 'Jennifer McKinley' is the profile name defined in App.jsx
    await expect(page.get_by_text("Jennifer McKinley")).to_be_visible(timeout=10000)
    print("SUCCESS: Component mounted and 'Jennifer McKinley' text found.")

async def test_tab_navigation(page):
    print("Running tab navigation test...")

    # 1. Verify "Agentic AI Prototypes" is active by default
    agentic_tab = page.get_by_role("tab", name="Agentic AI Prototypes")
    await expect(agentic_tab).to_have_attribute("aria-selected", "true")
    await expect(page.get_by_text("Conversational Orchestration")).to_be_visible()

    # 2. Click "SDET & DevOps Foundation" tab and verify content
    experience_tab = page.get_by_role("tab", name="SDET & DevOps Foundation")
    await experience_tab.click()
    await expect(experience_tab).to_have_attribute("aria-selected", "true")
    await expect(agentic_tab).to_have_attribute("aria-selected", "false")
    await expect(page.get_by_text("Certent Inc.")).to_be_visible()

    # 3. Click "Certifications" tab and verify content
    cert_tab = page.get_by_role("tab", name="Certifications")
    await cert_tab.click()
    await expect(cert_tab).to_have_attribute("aria-selected", "true")
    await expect(experience_tab).to_have_attribute("aria-selected", "false")
    await expect(page.get_by_text("Google IT Automation")).to_be_visible()

    print("SUCCESS: Tab navigation verified successfully.")

async def main():
    if not os.path.exists("node_modules"):
        print("ERROR: node_modules not found. Cannot run dev server.")
        sys.exit(1)

    print("Starting React dev server...")
    # Start the dev server as a background process
    server_process = subprocess.Popen(
        ["npm", "run", "dev"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    # Check if process immediately exited
    time.sleep(1)
    if server_process.poll() is not None:
         print("Server process exited prematurely.")
         stdout, stderr = server_process.communicate()
         print(f"Stdout: {stdout}")
         print(f"Stderr: {stderr}")
         sys.exit(1)

    # Wait for the server to bind to port 5173
    port_ready = wait_for_port(5173, timeout=30)

    if not port_ready:
        print("Timeout waiting for dev server to start on port 5173.")
        server_process.terminate()
        server_process.wait()
        sys.exit(1)

    print("Dev server started. Waiting for it to be ready...")

    success = False
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch()
            page = await browser.new_page()

            url = "http://localhost:5173/sqatester/"
            print(f"Navigating to {url}")
            response = await page.goto(url)

            if response.status != 200:
                 print(f"Error: Page loaded with status {response.status}")
            else:
                await test_basic_mount(page)
                await test_tab_navigation(page)
                success = True

            await browser.close()

    except Exception as e:
        print(f"Test FAILED with exception: {e}")
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
