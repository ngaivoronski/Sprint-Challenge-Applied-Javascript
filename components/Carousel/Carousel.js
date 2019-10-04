/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

var carouselContainer = document.querySelector('.carousel-container');

function carouselCreator() {
  // create elements
  const newCarousel = document.createElement('div'),
  carouselInner = document.createElement('div'),
  item1 = document.createElement('div'),
  item2 = document.createElement('div'),
  item3 = document.createElement('div'),
  item4 = document.createElement('div'),
  image1 = document.createElement('img'),
  image2 = document.createElement('img'),
  image3 = document.createElement('img'),
  image4 = document.createElement('img'),
  leftButton = document.createElement('a'),
  rightButton = document.createElement('a');

  // classes
  newCarousel.classList.add('carousel');
  newCarousel.classList.add('slide');
  carouselInner.classList.add('carousel-inner');
  item1.classList.add('carousel-item');
  item1.classList.add('active');
  item2.classList.add('carousel-item');
  item3.classList.add('carousel-item');
  item4.classList.add('carousel-item');
  image1.classList.add('d-block');
  image1.classList.add('w-100');
  image2.classList.add('d-block');
  image2.classList.add('w-100');
  image3.classList.add('d-block');
  image3.classList.add('w-100');
  image4.classList.add('d-block');
  image4.classList.add('w-100');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  leftButton.classList.add('carousel-control-prev');
  rightButton.classList.add('carousel-control-next');

  // properties
  newCarousel.setAttribute("data-ride","carousel");
  newCarousel.id = 'newCarousel';
  leftButton.textContent = " < ";
  rightButton.textContent = " > ";
  leftButton.setAttribute("data-slide","prev");
  rightButton.setAttribute("data-slide","next");
  leftButton.setAttribute("role","button");
  rightButton.setAttribute("role","button");
  leftButton.setAttribute("href","#newCarousel");
  rightButton.setAttribute("href","#newCarousel");
  image1.src = "./assets/carousel/mountains.jpeg";
  image2.src = "./assets/carousel/computer.jpeg";
  image3.src = "./assets/carousel/trees.jpeg";
  image4.src = "./assets/carousel/turntable.jpeg";

  //structure
  newCarousel.appendChild(carouselInner);
  carouselInner.appendChild(item1);
  carouselInner.appendChild(item2);
  carouselInner.appendChild(item3);
  carouselInner.appendChild(item4);
  item1.appendChild(image1);
  item2.appendChild(image2);
  item3.appendChild(image3);
  item4.appendChild(image4);
  newCarousel.appendChild(leftButton);
  newCarousel.appendChild(rightButton);

  return newCarousel;
}

carouselContainer.appendChild(carouselCreator());