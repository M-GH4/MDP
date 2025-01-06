const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".slider-wrapper .lrarrow");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft;
//get no. cards fit carousel
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//insert copies of the last few cards to beginning of carousel for infinite scrolling.
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

//insert copies of the last few cards to end of carousel for infinite scrolling.
carouselChildrens
  .slice(0, cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

//event listeners for arrows
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id === "left-arrow" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  //records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return; //if isDragging is false return from here
  //updates the scroll position of the carousrl based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  //if at beg go end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } //if at end go beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
