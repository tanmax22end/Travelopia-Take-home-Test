function showMore() {
    var mainContent = document.getElementById('mainContent');
    var hiddenContent = document.getElementById('hiddenContent');
    var showmoreButton = document.getElementById('showButton');
    // Reveal the hidden content
    console.log(hiddenContent.textContent);
    if (mainContent.textContent.length < hiddenContent.textContent.length) {
        showmoreButton.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>'
    }
    else {
        showmoreButton.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>'
    }
    var maintext = mainContent.textContent;
    mainContent.innerHTML = hiddenContent.textContent;
    hiddenContent.textContent = maintext;
}

document.addEventListener("DOMContentLoaded", function () {
    var mainContent = document.getElementById('mainContent');
    var hiddenContent = document.getElementById('hiddenContent');

    // Check if the content is already truncated
    if (mainContent.textContent.length > 100) {
        // Display only the first 500 characters
        hiddenContent.textContent = mainContent.textContent;
        mainContent.innerHTML = mainContent.textContent.slice(0, 100) + '...';
        // Display the "Show More" link
        hiddenContent.style.display = 'none';
    }
});
