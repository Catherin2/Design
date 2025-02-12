let header = document.querySelector("header");
let menu = document.querySelector('#menu-icon');
let menu = document.querySelector('navbar');


window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY>0);});

    menu.onclick =()=>{
    navbar.classList.toggle('active')
    }
    window.onScroll = ()=>{
        navbar.classList.remove('active')
    }

    /*media query*/

    function handleMediaQueryChange(e) {
      if (e.matches) {
        // Code for mobile view
        console.log('Mobile view');
      } else {
        // Code for desktop view
        console.log('Desktop view');
      }
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Call the function once to handle the initial state
    handleMediaQueryChange(mediaQuery);

    // Add the listener for future changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

