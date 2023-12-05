# Test Cases

## 1. Initial State

**Expected Result:** The initial state should show truncated content with the "Show More" button.

**Steps:**
1. Open the page in a browser.
2. Verify that the content is initially truncated.
3. Verify that the "Show More" button is visible.

---

## 2. Show More Clicked

**Expected Result:** Clicking the "Show More" button should reveal the hidden content.

**Steps:**
1. Click the "Show More" button.
2. Verify that the full content is displayed.
3. Verify that the "Show More" button changes to "Show Less."

---

## 3. Show Less Clicked

**Expected Result:** Clicking the "Show Less" button should hide the extra content.

**Precondition:** The "Show More" button is in the "Show Less" state.

**Steps:**
1. Click the "Show Less" button.
2. Verify that the content is truncated again.
3. Verify that the "Show Less" button changes to "Show More."

---

## 4. Responsive Design - Mobile View

**Expected Result:** The layout should look good and function properly on a mobile device.

**Steps:**
1. Open the page on a mobile device or emulator.
2. Verify that the content is readable and the "Show More" button is functional.

---

## 5. Responsive Design - Desktop View

**Expected Result:** The layout should adapt to a desktop screen size.

**Steps:**
1. Open the page on a desktop-sized viewport.
2. Verify that the content layout is optimized for desktop.
3. Verify that the "Show More" button is functional.

---

## 6. Performance Check

**Expected Result:** The page should load efficiently without any errors.

**Steps:**
1. Open the browser console.
2. Check for any JavaScript errors during the page load.
3. Ensure that the page renders within a reasonable time.

---

## 7. Edge Case - Very Large Content

**Expected Result:** The "Show More" button should handle very large content without issues.

**Precondition:** Modify the hidden content to have a very large text.

**Steps:**
1. Open the page.
2. Click the "Show More" button.
3. Verify that the content is displayed correctly without breaking the layout.

---

## 8. Edge Case - Empty Content

**Expected Result:** The page should handle empty content gracefully.

**Precondition:** Set the hidden content to an empty string.

**Steps:**
1. Open the page.
2. Verify that the "Show More" button is still visible but doesn't cause errors.

---

## 9. Edge Case - No Hidden Content

**Expected Result:** The page should handle scenarios where there is no hidden content.

**Precondition:** Ensure that the hidden content is initially empty.

**Steps:**
1. Open the page.
2. Verify that the "Show More" button is not displayed.

---

## 10. Cross-browser Compatibility

**Expected Result:** The functionality should work consistently across different browsers.

**Steps:**
1. Open the page in multiple browsers (Chrome, Firefox, Safari, Edge).
2. Verify that the "Show More" functionality works without issues.



## 11. Toggle Before DOM Load

**Expected Result:** Ensure the toggle state doesn't affect the hidden content visibility before the DOM fully loads.

**Steps:**
1. Open the page.
2. Check if the "Show More" button is visible or not before the DOM finishes loading.

## 12. Toggle During DOM Load

**Expected Result:** Verify that toggling the content visibility during DOM loading doesn't cause unexpected behavior.

**Steps:**
1. Open the page.
2. Click the "Show More" button during the initial loading phase.

## 13. Toggle Rapidly

**Expected Result:** Test the behavior when rapidly clicking the "Show More" button.

**Steps:**
1. Click the "Show More" button rapidly multiple times.
2. Observe if the content toggles correctly without errors.

## 14. Resize Window - Mobile to Desktop

**Expected Result:** Check if the layout adjusts properly when resizing the window from a mobile size to a desktop size.

**Steps:**
1. Open the page on a mobile-sized viewport.
2. Resize the window to a desktop size.
3. Verify that the layout adjusts and the "Show More" button remains functional.

## 15. Resize Window - Desktop to Mobile

**Expected Result:** Check if the layout adjusts properly when resizing the window from a desktop size to a mobile size.

**Steps:**
1. Open the page on a desktop-sized viewport.
2. Resize the window to a mobile size.
3. Verify that the layout adjusts and the "Show More" button remains functional.

## 16. Multiple Show More Sections

**Expected Result:** Test multiple instances of the "Show More" feature on the same page.

**Steps:**
1. Duplicate the "Show More" feature in different sections of the page.
2. Verify that each instance works independently.
