
/*   First Approach   */

var mainContent = document.getElementById('mainContent');
var showmoreButton = document.getElementById('showButton');

const containHeight = mainContent.offsetHeight;

function showMore() {
    const currentHeight = mainContent.offsetHeight;
    console.log(currentHeight + ' ' + containHeight);
    if (currentHeight + (containHeight * 0.4) < containHeight) {
        const newHeight = currentHeight + (containHeight * 0.4);
        mainContent.style.height = newHeight + 'px';
        showmoreButton.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>'
    }
    else if (currentHeight == containHeight) {
        const newHeight = containHeight * 0.31;
        mainContent.style.height = newHeight + 'px';
        showmoreButton.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>'
    }
    else if (currentHeight + (containHeight * 0.4) > containHeight) {
        const newHeight = containHeight;
        mainContent.style.height = newHeight + 'px';
        showmoreButton.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>'
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Check if the content is already truncated
    if (mainContent.textContent.length > 200) {
        const twentyPercentHeight = containHeight * 0.31;
        mainContent.style.height = twentyPercentHeight + 'px';
    } else {
        mainContent.style.display = 'inline'
        showmoreButton.style.display = 'none';
    }
});