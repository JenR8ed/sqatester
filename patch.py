import re

with open('tests/test_app.py', 'r') as f:
    content = f.read()

# Remove the explicit await browser.close() because it causes errors later when exiting the async with block
content = content.replace("await browser.close()", "")

with open('tests/test_app.py', 'w') as f:
    f.write(content)
