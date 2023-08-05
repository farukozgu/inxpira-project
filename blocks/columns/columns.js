export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}



document.querySelector('.test-block').classList.add('swiper');
document.querySelector('.test-block').classList.add('mySwiper');

document.querySelector('.swiper > div').classList.add('swiper-wrapper');


document.querySelectorAll('.swiper-wrapper > div').forEach(div => {
  div.classList.add('swiper-slide');
});

// Select the swiper-wrapper div
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Create a new div element
const newDiv = document.createElement('div');

// Add the swiper-pagination class to the new div
newDiv.classList.add('swiper-pagination');

// Insert the new div after the swiperWrapper
swiperWrapper.insertAdjacentElement('afterend', newDiv);

const swiper = new Swiper('.mySwiper', {
  // slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Sayfa noktalarına tıklanabilir yapar
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
