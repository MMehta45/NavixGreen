let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

const toggleSwitch = document.querySelector('#toggle-switch');
const footer = document.querySelector('footer');
  
function setTheme(theme) {
    console.log("setTheme called with theme:", theme);
    const body = document.body;
    const footer = document.querySelector("footer");
    const elementsToChange = [body, footer];
    elementsToChange.forEach((el) => {
        console.log("Setting theme class on element:", el);
        el.classList.remove("light-theme", "dark-theme");
        el.classList.add(`${theme}-theme`);
    });
    /*change_images(theme)*/
}
function switchTheme(event) {
    if (event.target.checked) {
      setTheme('dark');
      localStorage.removeItem('theme')
      localStorage.setItem('theme', 'dark');
    } 
    else {
      setTheme('light');
      localStorage.removeItem('theme')
      localStorage.setItem('theme', 'light');
    }
}
  
  toggleSwitch.addEventListener('change', switchTheme);
  
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
      setTheme(currentTheme);
      toggleSwitch.checked = currentTheme === 'dark';
  }
  /*
  function change_images(current_theme) {
      
      if (current_theme == 'light') {
          try {
              document.getElementById("footer_name").setAttribute("src", "img/NavixInBlack.png")
          } catch(e) {
              //pass
          }
          try {
              document.getElementById("tour_footer_name").setAttribute("src", "../img/NavixInBlack.png")
          } catch(e) {
              //pass
          }
          try {
              document.getElementById("account_footer_name").setAttribute("src", "../img/NavixInBlack.png")
          } catch(e) {
              //pass
          }
      }
      if (current_theme == 'default') {
         
          try {
              document.getElementById("footer_name").setAttribute("src", "img/NavixInWhite.png")
          } catch(e) {
              //pass
          }
          try {
              document.getElementById("tour_footer_name").setAttribute("src", "../img/NavixInWhite.png")
          } catch(e) {
              //pass
          }
          try {
              document.getElementById("account_footer_name").setAttribute("src", "../img/NavixInWhite.png")
          } catch(e) {
              //pass
          }
      }
  };
  change_images()
  */