---
name: screen_reader
description: Allows the agent to see the user's screen by capturing a screenshot.
---

# Screen Reader Skill

This skill allows you to "see" what is currently on the user's primary monitor.

## Usage

To use this skill, you must execute the python script located in this directory.

1. **Capture Screen**: Run the `capture.py` script.

    ```bash
    python skills/screen_reader/capture.py
    ```

2. **View Image**: After running the script, a file named `latest_screenshot.png` will be created in the current directory (or the directory specified in the script output). Use the `view_file` tool to examine this image.
    * *Note: If `view_file` cannot display the image directly in your interface, use the `run_command` to open it or ask the user to describe it, but `view_file` usually supports images.*

## Dependencies

This skill requires the following Python libraries:
* `pyautogui`
* `pillow` (PIL)

If these are not installed, please install them using:

```bash
pip install pyautogui pillow
```
