/**
 * Toggles the mobile navigation menu.
 * When the menu icon is clicked, this function adds or removes the 'menu-open'
 * class from the navigation links and the 'active' class from the menu icon.
 * This allows CSS to handle the display and animation of the menu and the icon.
 */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      // Toggle a class on the nav-links element to show/hide the menu
      navLinks.classList.toggle('menu-open');
      
      // Toggle a class on the button itself to animate the icon
      menuToggle.classList.toggle('active');
    });
  } else {
    // Log an error if the elements aren't found, which can help with debugging
    console.error("Could not find the menu toggle button or navigation links.");
  }
});
