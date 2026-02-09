---
name: selenium
description: Allows the agent to automate web interactions using Selenium WebDriver.
---

# Selenium Skill

This skill allows you to control a web browser programmatically to navigate pages, extract text, and interact with elements.

## Usage

To use this skill, execute the python script `selenium_tool.py` with the appropriate details.

### 1. Visit a URL and Get Text

```bash
python skills/selenium/selenium_tool.py --url "https://example.com" --action "get_text"
```

### 2. Take a Screenshot of a Page

```bash
python skills/selenium/selenium_tool.py --url "https://example.com" --action "screenshot"
```

## Dependencies

* `selenium`
* `webdriver_manager`

Install them via:

```bash
pip install selenium webdriver-manager
```
