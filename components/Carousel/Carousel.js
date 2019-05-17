class Carousel {
  constructor(carouselElement) {
    this.automatic = true;
    this.carousel = carouselElement;

    this.images = this.carousel.querySelectorAll("img");
    this.currentIndex = 0;

    this.next = this.carousel.querySelector(".right-button");
    this.prev = this.carousel.querySelector(".left-button");

    this.next.addEventListener("click", () => this.setNextImage());
    this.prev.addEventListener("click", () => this.setPreviousImage());

    this.setCurrentImage();
    this.setAutomatic();
  }
  setAutomatic() {
    setInterval(() => {
      let images = document.querySelectorAll(".carousel img");
      images.forEach(image => (image.style.opacity = 0));

      this.images.forEach((image, index) => {
        if (index === this.currentIndex) {
          image.style.opacity = 1;
        }
      });
    }, 3000);
  }
  setCurrentImage() {
    let images = document.querySelectorAll(".carousel img");
    images.forEach(image => (image.style.opacity = 0));

    this.images.forEach((image, index) => {
      if (index === this.currentIndex) {
        image.style.opacity = 1;
      }
    });
  }

  setNextImage() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.setCurrentImage();
  }

  setPreviousImage() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.images.length - 1;
    } else {
      this.currentIndex -= 1;
    }
    this.setCurrentImage();
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
