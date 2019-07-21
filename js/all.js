setTimeout(function () {

    var currentPath = window.location.pathname;

    switch (currentPath) {
        case '/circle-house.html':
            var navItem1 = document.querySelector('#navItem1').style;
            navItem1.setProperty('color', '#333');
            break;
        case '/neipushan-healing-and-recovery.html':
            var navItem2 = document.querySelector('#navItem2').style;
            navItem2.setProperty('color', '#333');
            break;
        default:
            break;
    }
}, 2000);