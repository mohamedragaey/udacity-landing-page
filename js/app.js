/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const section = document.getElementsByTagName('section')
const navList = document.getElementById('navbar__list')
const links = document.getElementsByTagName('a')


/**
 * End Global Variables
 * Start Helper Functions
 *
 */


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavList () {

  for (let item = 0; item < section.length; item++) {
    let listItem = document.createElement('li')
    let listItemLink = document.createElement('a')
    listItemLink.setAttribute('href', '#' + section[item].getAttribute('id'))
    listItemLink.setAttribute('class', 'menu__link')
    listItemLink.innerHTML = section[item].getAttribute('data-nav')
    listItem.appendChild(listItemLink)
    navList.appendChild(listItem)
  }

}

// Add class 'active' to section when near top of viewport

function checkIfSectionInView () {
  let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect()
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  for (let i = 1; i < section.length + 1; i++) {
    let sectionInFullView = document.getElementById('section' + i)

    window.addEventListener('scroll', function (event) {
      if (isInViewport(sectionInFullView)) {
        sectionInFullView.classList.add('your-active-class')
      } else {
        sectionInFullView.classList.remove('your-active-class')
      }
    }, false)
  }
}

// Scroll to anchor ID using scrollTO event


/**
 *
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavList()
// Scroll to section on link click

// Set sections as active
checkIfSectionInView()
