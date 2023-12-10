# Travelopia-Take-home-Test
Online assessment for Associate Product Engineer, Travelopia


# Show More Content Toggle

This repository contains two different approaches to implement a "Show More" content toggle on a website using JavaScript.

## Approach 1 (dynamicScript.js)   https://travelopia-take-home-test-second-approach.vercel.app/

This approach aims to improve the user experience by displaying a concise summary of the content initially and providing the option to expand it if desired. This can be helpful for long articles or descriptions where showing everything at once might be overwhelming.

**How it works:**
- The `DOMContentLoaded` event listener runs when the DOM content is fully loaded. It initially shows a concise summary of content (31% of its height).
- Clicking "Show More" expands content by 40% or sets it to its full height.

**Positive Impact on Performance:**
- **Reduced initial render time**: By initially showing only a part of the content, the script reduces the initial render time and improves the page load speed.
- **Lazy loading of content**: The content is only fully loaded and rendered when the user explicitly requests it, saving bandwidth and processing resources.

**Negative Impact on Performance:**
- **Optimized Initialization**: The script involves some calculations for determining the new height and updating the element styles, which can slightly impact performance, especially on low-end devices.
- **Potential for reflows**: Frequent changes to the element's height might trigger browser reflows, affecting the overall page responsiveness.

This approach can be a good balance between improving user experience and maintaining optimal performance. However, it's crucial to consider the specific context and content size when deciding whether to implement this functionality.


## Approach 2 (script.js)   https://travelopia-take-home-test-three.vercel.app/

This approach uses a straightforward method to toggle between showing and hiding content by checking the `display` property. It also displays truncated content initially based on a character limit.

**How it works:**
- Initially, the script displays the first 200 characters of the content with "...", hiding the remaining content.
- Clicking "Show More" reveals the full content and changes the button text to "Show Less".
 

**Impact on Performance:**
- **Positive:**
  - Simplified logic, potentially easier to understand and maintain.
  - This approach involves fewer calculations and DOM manipulations compared to the first approach, making it more performant overall.
  - By displaying only a small portion of the content initially, the script significantly reduces the initial render time and improves page load speed.
- **Negative:**
  - This approach requires creating an additional element (hiddenContent) for storing the full content, which can marginally impact memory usage.
  - May lead to bad user experience when dealing with large content size as it will display the whole content in one show more operation, which in turn will require significant scrolling to reach call to action section.

This approach offers a simple and efficient way to manage content length and improve user engagement. It is lightweight and less resource-intensive compared to the first approach.




## Comparison between the two approaches -:


| Feature | Approach 1 (Dynamic Height) | Approach 2 (Toggle Visibility) |
|---|---|---|
| Functionality | Dynamically expands content height based on user interaction. | Toggles between showing a summary and full content. |
| Initial Display | Shows 31% of content height. | Shows first 200 characters (or less). |
| User Interaction | Click "Show More" to expand content. | Click "Show More" to reveal full content, "Show Less" to hide it. |
| Performance: | - Reduced initial render time. - Lazy loading of content. - Potentially higher CPU usage due to calculations. - Potential for frequent reflows. | - Reduced initial render time. - Lazy loading of content. - Simpler DOM manipulation. - Potential for reflows on toggle. |
| Suitability | Long articles or descriptions. | Short to medium-length content. |




