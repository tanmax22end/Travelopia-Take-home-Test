# Travelopia-Take-home-Test
Online assessment for Associate Product Engineer, Travelopia


# Show More Content Toggle

This repository contains two different approaches to implement a "Show More" content toggle on a website using JavaScript.

## Approach 1

This approach uses a straightforward method to toggle between showing and hiding content by checking the `display` property. It also displays truncated content initially based on a character limit.

**Impact on Performance:**
- **Positive:**
  - Simplified logic, potentially easier to understand and maintain.
  - Utilizes a common practice of checking the `display` property for toggling visibility.
- **Negative:**
  - DOM manipulation involved, and the performance might degrade with frequent executions.
  - May lead to bad user experience when dealing with large content size as it will display the whole content in one show more operation, which in turn will require significant scrolling to reach call to action section.


## Approach 2 (Commented Approach)

This approach introduces a variation in the initialization process for displaying truncated content. It aims to optimize the performance of the initial content rendering.

**Explanation:**
- The `DOMContentLoaded` event listener runs when the DOM content is fully loaded. It checks if the content is already truncated and initializes the necessary elements.
- The `showMore` function handles the toggle of content visibility, initialization of hidden content, and updating the button text.

**Negative Impact on Performance:**
- **DOM Manipulation in `showMore`:**
  - The `showMore` function involves frequent DOM manipulations, potentially impacting performance during user interactions.
  - The update of innerHTML and textContent might lead to reflows and repaints, affecting rendering performance.

**Positive Impact on Performance:**
- **Optimized Initialization:**
  - The approach optimizes the initialization process by displaying truncated content with ellipsis initially.
  - It reduces the need for excessive DOM manipulation during the first "Show More" operation.
  - Improved user experience as they don't have scroll through the content and can view it as per there curiosity.
 This approach attempts to balance the trade-off between initial rendering performance and subsequent user interactions.

