var torontoImages = [
    'images/t1.JPG', 'images/t2.JPG', 'images/t3.JPG', 
    'images/t4.JPG', 'images/t5.JPG', 'images/t6.JPG', 
    'images/t7.JPG', 'images/t8.JPG'
];

var tumbesImages = [
    'images/tu1.JPG', 'images/tu2.JPG', 'images/tu3.JPG', 
    'images/tu4.JPG', 'images/tu5.JPG', 'images/tu6.JPG', 
    'images/tu7.JPG', 'images/tu8.JPG'
];

var torontoIndex = 0;
var tumbesIndex = 0;

function nextImage(location) {
    if (location === 'toronto') {
        torontoIndex = (torontoIndex + 1) % torontoImages.length;
        document.getElementById('toronto-image').src = torontoImages[torontoIndex];
    } else if (location === 'tumbes') {
        tumbesIndex = (tumbesIndex + 1) % tumbesImages.length;
        document.getElementById('tumbes-image').src = tumbesImages[tumbesIndex];
    }
}

function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function toggleSubmenu(event) {
    event.preventDefault(); // Prevent the default link behavior
    var submenu = document.getElementById('photoLogsSubmenu');
    if (submenu.style.display === 'block' || submenu.style.display === '') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

// Ensure the submenu is hidden by default when the page loads
window.onload = function() {
    document.getElementById('photoLogsSubmenu').style.display = 'none';
};
