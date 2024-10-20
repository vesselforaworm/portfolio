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
