# Checkbox Clicker Script

## Description

This JavaScript script is designed to automatically click all checkboxes on a [Onemillioncheckboxes](https://onemillioncheckboxes.com/) and monitor the resulting count updates. It's particularly useful for testing or interacting with pages that have a large number of checkboxes and a dynamic count display.

## Features

- Automatically finds and clicks all unchecked and enabled checkboxes on the page
- Monitors a count display on the page for updates
- Adjusts clicking speed based on whether the count is updating
- Provides console logging for progress and count updates

## How It Works

1. The script first finds all checkbox inputs on the page.
2. It then starts clicking checkboxes one by one.
3. After each click, it checks if a count display on the page has updated.
4. If the count has updated, it continues clicking at a faster rate.
5. If the count hasn't updated, it waits longer before the next click.
6. The process continues until all checkboxes have been attempted.

## Usage

To use this script:

1. Open the webpage with the checkboxes in your browser.
2. Open the browser's developer console (usually F12 or right-click and select "Inspect").
3. Copy and paste the entire script into the console.
4. Press Enter to run the script.

## Console Output

The script will output the following information to the console:

- The total number of checkboxes found
- Each time a checkbox is clicked
- Updates to the count display
- When all checkboxes have been processed
- The final count

## Customization

You can adjust the following values in the script to customize its behavior:

- `setTimeout(clickNext, 100)`: Adjust the 100 to change how quickly it clicks when the count is updating.
- `setTimeout(clickNext, 500)`: Adjust the 500 to change how long it waits when the count isn't updating.

## Notes

- This script assumes there's a count display on the page that matches the pattern: "X boxes are ✅" where X is a number.
- The script may take a while to complete if there are many checkboxes.
- You can stop the script at any time by refreshing the page.

## Caution

This script interacts with page elements and may cause unexpected behavior. Use it responsibly and only on pages where you have permission to automate interactions.
