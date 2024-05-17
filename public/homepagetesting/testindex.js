const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: videoContainer,
  triggerHook: 0,
  duration: '100%'
})
.setTween(video, { transform: 'translateY(0%)' })
.addTo(controller);

// After the animation is complete, adjust the height of the container to fit the video
scene.on('update', () => {
  const height = video.offsetHeight;
  videoContainer.style.height = `${height}px`;
});

gsap.registerPlugin(ScrollTrigger);

// Function to animate the count-up
function startCounting(target, duration) {
  var countTo = target.attr('data-count');

  $({ countNum: target.text() }).animate(
    {
      countNum: countTo,
    },
    {
      duration: duration,
      easing: 'linear',
      step: function () {
        target.text(Math.floor(this.countNum));
      },
      complete: function () {
        target.text(this.countNum);
        console.log('Counting completed for target:', target); // Log when counting is completed
        // Add any additional completion logic here
      },
    }
  );
}

// Fade-in and count-up animation for the row
gsap.from('.slant-row', {
  opacity: 0,
  y: 50,
  duration: .5,
  scrollTrigger: {
    trigger: '.slant-row',
    start: 'top 80%',
    end: 'bottom 20%',
  },
  onComplete: () => {
    console.log('Fade-in animation completed'); // Log when fade-in animation is completed
    // Call the count-up function for each counter in the row
    $('.counter').each(function () {
      console.log('Starting counting for target:', $(this)); // Log when counting starts
        startCounting($(this), 1500);
    });
  },
});

