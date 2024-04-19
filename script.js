
// document.addEventListener("DOMContentLoaded", function() {
//     // Set a timeout for a smooth fade-out effect
//     setTimeout(function() {
//         // Get the preloader element
//         var preloader = document.getElementById("Preloader");
        
//         // Apply a fade-out transition with opacity
//         preloader.style.transition = "opacity 0.5s ease";
//         preloader.style.opacity = 0;

//         // Hide the preloader after the fade-out effect completes
//         setTimeout(function() {
//             preloader.style.display = "none";
//         }, 500); // Adjust the second timeout to match the transition duration
//     }, 4000); // Adjust the initial timeout duration as needed
// });

// Function to check if an element is in viewport


$(document).ready(function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
              $(entry.target).addClass('show');
              observer.unobserve(entry.target); // Stop observing after the first intersection
          } else {
              $(entry.target).removeClass('show');
          }
      });
  }, { once: true }); // Ensure the observer runs only once

  $('.hidden').each(function() {
      observer.observe(this);
  });
});

    

    // window.addEventListener("scroll", function() {
    //     var logo = document.getElementById("logo");
    //     var header = document.querySelector("header");
      
    //     if (window.scrollY === 0) {
    //       logo.style.fontSize = "24px";
    //       header.style.backgroundColor = "#333";
    //     } else {
    //       logo.style.fontSize = "16px";
    //       header.style.backgroundColor = "transparent";
    //     }
    //   });

    // window.addEventListener('scroll', function() {
    //     var logo = document.getElementById('logo');
    //     var scrollTop = window.scrollY;
      
    //     // Check if the user is at the top of the home page
    //     var isHomePage = scrollTop === 0; // Change this condition based on your home page structure
      
    //     if (isHomePage) {
    //       logo.style.padding = '50px 10px';
    //       logo.style.transform = 'rotate(90deg) translateY(-50%)'; // Reversed translateY value
    //       logo.classList.add('sword');
    //     } else {
    //         logo.style.padding = '0';
    //       logo.style.transform = 'none';
    //       logo.classList.remove('sword');
          
    //     }
    //   });
      
    $('#menu-btn').click(function() {
        $('.navbar').toggleClass('active');
    });
    $(document).ready(function() {
        $('.navbar a span').hide();
    });

  

    // Toggle text visibility when clicking on icons
    $('.navbar a').mouseenter(function() {
      $(this).find('span').stop(true, true).fadeIn();
      $(this).addClass('active');
  }).mouseleave(function() {
      var $span = $(this).find('span');
      $span.stop(true, true).fadeOut(); 
      $(this).removeClass('active');
  });
  

    
    $(document).ready(function(){
        // Initialize the slider
        $('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          infinite: true,
          speed: 1000, // Adjust the speed (in milliseconds)
          prevArrow: '<div class="slick-prev"></div>',
          nextArrow: '<div class="slick-next"></div>'
        });
      
        
        $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          
          if (nextSlide === slick.slideCount - 1) {
            
            setTimeout(function() {
              $('.slider').slick('slickGoTo', 0);
            }, 2000);
          }
        });
      });
      
      
      $(document).ready(function() {
        var currentYear = new Date().getFullYear();
        $('#currentYear').text(currentYear);
    });
   
    

    // navbar codess

    $(document).ready(function() {
      var lastScrollTop = 0;
      var navbar = $('.header');
  
      // Hide the navbar by default when the page loads
      navbar.addClass('opacityZero');
  
      $(window).scroll(function(event){
          var st = $(this).scrollTop();
          if (st > lastScrollTop){
              navbar.removeClass('opacityZero');
          } else {
             
              if (st <= 0) {
                  
                  navbar.addClass('opacityZero');
              }
          }
          lastScrollTop = st;
      });
  });
  
  