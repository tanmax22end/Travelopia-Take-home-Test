/* Second Approach */


function showMore() {
    var mainContent = document.getElementById('mainContent');
    var hiddenContent = document.getElementById('hiddenContent');
    var showmoreButton = document.getElementById('showButton');
    if (hiddenContent.style.display == 'none') {
        showmoreButton.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>'
        hiddenContent.style.display = 'inline'
        mainContent.style.display = 'none'
    }
    else {
        showmoreButton.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>'
        hiddenContent.style.display = 'none'
        mainContent.style.display = 'inline'

    }
}

document.addEventListener("DOMContentLoaded", function () {
    var mainContent = document.getElementById('mainContent');
    var hiddenContent = document.getElementById('hiddenContent');
    var showmoreButton = document.getElementById('showButton');
    // Check if the content is already truncated
    if (hiddenContent.textContent.length > 200) {
        // Display only the first 500 characters
        mainContent.innerHTML = hiddenContent.textContent.slice(0, 200) + '...';
        // Display the "Show More" link
        hiddenContent.style.display = 'none';
        mainContent.style.display = 'inline'
    } else {
        hiddenContent.style.display = 'inline'
        showmoreButton.style.display = 'none';
    }
});
