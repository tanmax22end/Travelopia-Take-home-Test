
/*   First Approach   

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
*/



/*     Second Approach    */


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
    else if(currentHeight == containHeight) {
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




/*  Third Approach  



function showMore() {
    var mainContent = document.getElementById('mainContent');
    var hiddenContent = document.getElementById('hiddenContent');
    var showmoreButton = document.getElementById('showButton');
    if (hiddenContent.textContent.length == 0) {
        hiddenContent.textContent = mainContent.textContent.slice(0, mainContent.textContent.length);
        mainContent.textContent = '...';
   //     mainContent.textContent = mainContent.textContent.slice(0, 100) + '...';
        showmoreButton.innerHTML = 'Show More <i class="fas fa-arrow-down"></i>'
    }
    var maintext = hiddenContent.textContent;
    mainContent.textContent = mainContent.textContent.slice(0, -3)
    mainContent.textContent = mainContent.textContent + hiddenContent.textContent.slice(0, Math.min(100, hiddenContent.textContent.length))
    if (hiddenContent.textContent.length > 100) {
        mainContent.innerHTML = mainContent.textContent + '...';
        hiddenContent.textContent = maintext.slice(100, maintext.length);
    } else {
        mainContent.innerHTML = mainContent.textContent;
        hiddenContent.textContent = '';
        showmoreButton.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>'
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var mainContent = document.getElementById('mainContent');
    var hiddenContent = document.getElementById('hiddenContent');
    var showmoreButton = document.getElementById('showButton');
    // Check if the content is already truncated
    if (mainContent.textContent.length > 100) {
        // Display only the first 500 characters
        hiddenContent.textContent = mainContent.textContent.slice(100, mainContent.textContent.length);
        mainContent.innerHTML = mainContent.textContent.slice(0, 100) + '...';
        // Display the "Show More" link
        hiddenContent.style.display = 'none';
    } else {
        mainContent.innerHTML = mainContent.textContent;
        hiddenContent.style.display = 'none';
        showmoreButton.style.display = 'none';
    }
});


*/
