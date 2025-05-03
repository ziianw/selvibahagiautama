$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".top-menu").css('right', "0");
    });

    $('.close').click(function (){ 
        $(".top-menu").css('right', "-100vw");
       });

       var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: true,
        },
        loop: true, // Menambahkan loop untuk kembali ke slide pertama setelah mencapai slide terakhir
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});

$(window).scroll(function () {
    const scroll = $(this).scrollTop();
    $('.parallax').css('background-position', `center calc(50% - ${scroll / 2}px)`);
});

function showLargeImage(imageNumber) {
  var modal = document.getElementById("largeImageModal" + imageNumber);
  modal.style.display = "block";
}

function closeModal(imageNumber) {
  var modal = document.getElementById("largeImageModal" + imageNumber);
  modal.style.display = "none";
}


// Rating

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel-rating");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

    // Rating

    //project
    
// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


  function changePage(filter) {
    // Ganti 'nama_halaman.html' dengan halaman HTML yang ingin dituju
    if (filter === 'all') {
      window.location.href = 'nama_halaman_all.html';
    } else if (filter === 'selesai') {
      window.location.href = 'index.html';
    } else if (filter === 'berjalan') {
      window.location.href = '404.html';
    }
  }

    //project

    document.addEventListener("DOMContentLoaded", function () {
      const hamburgerMenu = document.querySelector(".hamburger");
      const closeMenu = document.querySelector(".close");
      const topMenu = document.querySelector(".top-menu");
  
      hamburgerMenu.addEventListener("click", function () {
          topMenu.classList.add("active");
      });
  
      closeMenu.addEventListener("click", function () {
          topMenu.classList.remove("active");
      });
  });
  
  let fiterItem = document.querySelector('.items-linkes');
  let fileteImages = document.querySelectorAll('.project-img')
  
  window.addEventListener('load', () => {
    fiterItem.addEventListener('click', (selectedItem) => {
      if (selectedItem.target.classList.contains('item-link')) {
        document.querySelector('.menu-active').classList.remove('menu-active');
        selectedItem.target.classList.add('menu-active');
        let filterName = selectedItem.target.getAttribute('data-name');
        fileteImages.forEach((image) => {
          let filterImages = image.getAttribute('data-name')
          if ((filterImages == filterName) || filterName == 'all') {
            image.style.display = 'block'
          } else {
            image.style.display = 'none'
          }
        })
      }
    })
  })
  
  const video = document.getElementById('video');

console.log('test')


  
  
  
  
  


    






