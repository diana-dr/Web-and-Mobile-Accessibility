//3 elements of class="nav-item dropdown" 
const dropdowns = document.querySelectorAll('.nav-item.dropdown')
//3 elements of class="dropdown-menu"
const dropdownMenus = document.querySelectorAll('.dropdown-menu')
//3 elements of class="dropdown-toggle"
const dropdownToggles = document.querySelectorAll('.dropdown-toggle')



// Add event listeners
dropdownToggles.forEach((toggle, index) => {
  //Set 'aria-expanded' to false for the three dropdown menus by default
  toggle.setAttribute('aria-expanded', 'false')
//toggle.setAttribute('aria-haspopup', 'true')
  //Listen for click events
  toggle.addEventListener('click', () => toggleDropdown(index))
  //Listen for key events
  toggle.addEventListener('keydown', (event) => handleKeyDown(event, index))
})


//Task: Drop-down menu
//to change 'aria-expanded'
function toggleDropdown(index) {
  //Get the 'aria-expanded' attribute of toggle
  const expanded = dropdownToggles[index].getAttribute('aria-expanded')
  //According to the current state, if it is currently expanded, it is set to closed; and if it is closed, it becomes expanded
  dropdownToggles[index].setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true')
}


//Task: Menu keyboard interaction
//Press ESC to close the open drop-down menu
function handleKeyDown(event, index) {
  //esc only works on opened dropdown menus
  console.log(event)
  if (
    event.key === 'Escape' ||
    (event.key === 'Space' && dropdownToggles[index].getAttribute('aria-expanded') === 'true')
  ) {
    toggleDropdown(index)
    dropdownToggles[index].focus()
   
    //The code itself has implemented show. The role of the toggle method is to remove if there is a show class, and add if there is no
    dropdownMenus[index].classList.toggle('show')
  }

  
  //Spacekey closes an open drop-down menu
  if (event.keyCode == '32') {
    event.preventDefault();
    toggleDropdown(index)
    dropdownToggles[index].focus()
    //The code itself has implemented show. The role of the toggle method is to remove if there is a show class, and add if there is no
    dropdownMenus[index].classList.toggle('show')
  }

}


//Task:Menu keyboard interaction
//close the drop-down menu if Press Tab to jump out of the drop-down menu
window.addEventListener('keydown', function (event) {
  if (event.key === 'Tab') {
    dropdowns.forEach((drop, index) => {
      //Determine whether event.target is in <li class="nav-item dropdown"></li>，if you press the Tab key to jump out of the scope of the drop-down menu, and the drop-down menu is currently open (aria-expanded==true ), then close the drop-down menu
      if (
        !drop.contains(event.target) &&
        dropdownToggles[index].getAttribute('aria-expanded') == 'true'
      ) {
        dropdownToggles[index].setAttribute('aria-expanded', 'false')
        dropdownMenus[index].classList.remove('show')
      }
    })
  }
})