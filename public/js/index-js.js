// Initialize the tooltip plugin
//$(document).ready(function () {
//    $('[data-toggle="tooltip"]').tooltip();
//  });

gsap.set('span', { width: 0 })

gsap.timeline({
    scrollTrigger:{
      trigger: 'span',
      scrub:0.3,
      start:"top 40%",
      end:"top 20%",
      //markers:true
    }
 })
  .to('span', {
  width:'100%', 
  duration:1, ease:'none',
  stagger:1
})