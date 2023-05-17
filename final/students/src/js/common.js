/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);
        const getFontSize = () => {
        const root = document.getElementById('root');
        return parseFloat(window.getComputedStyle(root, null).getPropertyValue('font-size'));
      }

      // UPDATE - Added functionality below for increasing/decreasing font size
      const setFontSize = (fontSize) => {
        const root = document.getElementById('root');
        root.style.fontSize = `${fontSize}px`;
      }

      // Font increase / decrease buttons
      document.querySelector('#font-increase-button')
        .addEventListener('click', () => {
          const fontSize = getFontSize();
          setFontSize(fontSize + 1);
        }, false);

      document.querySelector('#font-decrease-button')
        .addEventListener('click', () => {
          const fontSize = getFontSize();
          setFontSize(fontSize - 1);
        }, false);
      // END UPDATE

}, false);
