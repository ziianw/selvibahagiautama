function setupCarousel1() {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
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
    }
    setupCarousel1(); // Call this function to set up the carousel

    function setupCarousel2() {
      const wrapper = document.querySelector(".wrapper2");
      const carousel = document.querySelector(".carousel2");
      const firstCardWidth = carousel.querySelector(".card2").offsetWidth;
      const arrowBtns = document.querySelectorAll(".wrapper2 i");
      const carouselChildrens = [...carousel.children];
      let isDragging = false, isAutoPlay3 = true, startX, startScrollLeft, timeoutId;
      
      function initializeCarousel() {
         let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
         
         carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
             carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
         });
      
         carouselChildrens.slice(0, cardPerView).forEach(card => {
             carousel.insertAdjacentHTML("beforeend", card.outerHTML);
         });
      
         carousel.classList.add("no-transition");
         carousel.scrollLeft = carousel.offsetWidth;
         carousel.classList.remove("no-transition");
      }
      
      function scrollCarousel(direction) {
         carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
      }
      
      function dragStart(e) {
         isDragging = true;
         carousel.classList.add("dragging");
         startX = e.pageX;
         startScrollLeft = carousel.scrollLeft;
      }
      
      function dragging(e) {
         if (!isDragging) return;
         carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      }
      
      function dragStop() {
         isDragging = false;
         carousel.classList.remove("dragging");
      }
      
      function infiniteScroll() {
         if (carousel.scrollLeft === 0) {
             carousel.classList.add("no-transition");
             carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
             carousel.classList.remove("no-transition");
         } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
             carousel.classList.add("no-transition");
             carousel.scrollLeft = carousel.offsetWidth;
             carousel.classList.remove("no-transition");
         }
         clearTimeout(timeoutId);
         if (!wrapper.matches(":hover")) autoPlay3();
      }
      
      function autoPlay3() {
         if (window.innerWidth < 800 || !isAutoPlay3) return;
         timeoutId = setTimeout(() => scrollCarousel(firstCardWidth), 1500);
      }
      
      initializeCarousel();
      arrowBtns.forEach(btn => {
         btn.addEventListener("click", () => {
             const direction = btn.id === "left" ? "left" : "right";
             scrollCarousel(direction);
         });
      });
      
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel.addEventListener("scroll", infiniteScroll);
      wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.addEventListener("mouseleave", autoPlay3);
      }
      
      setupCarousel2();

      //proyek 3

      function setupCarousel3() {
         const wrapper = document.querySelector(".wrapper3");
         const carousel = document.querySelector(".carousel3");
         const firstCardWidth = carousel.querySelector(".card3").offsetWidth;
         const arrowBtns = document.querySelectorAll(".wrapper3 i");
         const carouselChildrens = [...carousel.children];
         let isDragging = false, isAutoPlay3 = true, startX, startScrollLeft, timeoutId;
         
         function initializeCarousel() {
            let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
            
            carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });
         
            carouselChildrens.slice(0, cardPerView).forEach(card => {
                carousel.insertAdjacentHTML("beforeend", card.outerHTML);
            });
         
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
         }
         
         function scrollCarousel(direction) {
            carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
         }
         
         function dragStart(e) {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
         }
         
         function dragging(e) {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
         }
         
         function dragStop() {
            isDragging = false;
            carousel.classList.remove("dragging");
         }
         
         function infiniteScroll() {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay3();
         }
         
         function autoPlay3() {
            if (window.innerWidth < 800 || !isAutoPlay3) return;
            timeoutId = setTimeout(() => scrollCarousel(firstCardWidth), 1500);
         }
         
         initializeCarousel();
         arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const direction = btn.id === "left" ? "left" : "right";
                scrollCarousel(direction);
            });
         });
         
         carousel.addEventListener("mousedown", dragStart);
         carousel.addEventListener("mousemove", dragging);
         document.addEventListener("mouseup", dragStop);
         carousel.addEventListener("scroll", infiniteScroll);
         wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
         wrapper.addEventListener("mouseleave", autoPlay3);
         }
         
         setupCarousel3(); 