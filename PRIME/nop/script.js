document.getElementById('toggle-btn').addEventListener('click', function() {
    toggleMenu();
});

document.addEventListener('click', function(event) {
    var sideMenu = document.getElementById('side-menu');
    var toggleBtn = document.getElementById('toggle-btn');
    
    if (event.target !== sideMenu && event.target !== toggleBtn && !sideMenu.contains(event.target)) {
        closeMenu();
    }
});

function toggleMenu() {
    var sideMenu = document.getElementById('side-menu');
    var currentLeft = parseInt(getComputedStyle(sideMenu).left);

    if (currentLeft < 0) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    var sideMenu = document.getElementById('side-menu');
    sideMenu.style.left = '0';
}

function closeMenu() {
    var sideMenu = document.getElementById('side-menu');
    sideMenu.style.left = '-250px';
}
