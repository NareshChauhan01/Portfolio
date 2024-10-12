document.addEventListener('DOMContentLoaded', () => {
  const navLinkEls = document.querySelectorAll('.navbar-list ul li a');
  navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
      document.querySelector('.active-link').classList.remove('active-link');
      navLinkEl.classList.add('active-link');
    })
  })

  // NavLists
  const hamburgerIcon = document.querySelector(".menu-btn");
  hamburgerIcon.addEventListener('click', () => {
    console.log('You click me');
    const header = document.querySelector('header');
    header.classList.toggle('active-header');
  })

  // theme-button
  const themeBtn = document.querySelector('.theme-btns');
  console.log(themeBtn);
  themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('active-theme');
  })

  // Dark Mode
  let darkMode = localStorage.getItem('darkmode');
  const themeSwitch = document.querySelector('.theme-btns');

  const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null)
  }

  if (darkMode === 'active') enableDarkMode()

  themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkmode')
    darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
  })

  // Type Animaction
  var typeData = new Typed(".role", {
    strings: [
      "Mern Stack Developer",
      "Learner",
      "Problem Solver",
      "Web Developer",
      "Backend Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  }); 

});

