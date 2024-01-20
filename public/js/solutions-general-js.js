document.querySelectorAll('.accordion-item h2').forEach((accordionToggle) => { 
  accordionToggle.addEventListener('click', () => { 
  const accordionItem = accordionToggle.parentNode; 
  const accordionContent = accordionToggle.nextElementSibling; 

        // If this accordion item is already open, close it.
   if (accordionContent.style.maxHeight) { 
       accordionContent.style.maxHeight = null; 
       accordionItem.classList.remove('active'); 
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
            accordionItem.classList.add('active'); 
        }
    });
});

window.onscroll = function() {myFunction()};

var main_navbar = document.getElementById("main_navbar");
var sub_navbar = document.getElementById("sub_navbar");
var sticky = sub_navbar.offsetTop - 68;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_navbar.classList.add("first_sticky");
    sub_navbar.classList.add("second_sticky");
  } else {
    main_navbar.classList.remove("first_sticky");
    sub_navbar.classList.remove("second_sticky");
  }
}