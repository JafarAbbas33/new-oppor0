var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    // spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

function fix_formatting_flex() {
    // Solution 2 (https://stackoverflow.com/questions/34928565/properly-sizing-and-aligning-the-flex-items-on-the-last-row):
    // Using flexbox, create 3 or 4 "phantom" items that always occupy the last slots.
    // So, for instance, user #82 is currently your last entry.
    // Make fake users 83, 84, 85 with visibility: hidden.
    // Alternatively, try just one phantom item at the end with visibility: hidden and flex-grow: 10. Target it with :last-child or :last-of-type pseudo-class.

    // Solution 3 (https://stackoverflow.com/questions/34928565/properly-sizing-and-aligning-the-flex-items-on-the-last-row):
    // .userlist:after {
    //     content: '';
    //     flex: 10 0 auto;
    // }

    const grids = document.getElementsByClassName('service-grid');
    // for (let index = 0; index < grids.length; index++) {
    for (let _grid of grids) {
        let grid = Array.from(_grid.children);

        // let grid = grids[index];
        // const grid = Array.from(document.querySelector("#service-grid").children);
        const baseOffset = grid[0].offsetTop;
        const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
        const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);
        const left = (grid.length % numPerRow);
        // console.log('Length:', grid.length, 'Per row', numPerRow, 'Left:', left);

        if (left > 0) {
            for (let i = 0; i < numPerRow - left; i++) {
                let element = grid[grid.length - 1];
                let new_element = element.cloneNode(true);
                new_element.style.visibility = 'hidden';
                element.after(new_element);
            }
        }
    }
}
// fix_formatting_flex();


// const myCarousel = document.getElementById('carouselExampleIndicators');

// myCarousel.addEventListener('slide.bs.carousel', event => {
//     // console.log(event);
//     let carousel_inner_items =  Array.from(document.getElementsByClassName('carousel-inner-items'));
//     for (let carousel_inner_item of carousel_inner_items) {
//         window.carousel_inner_item = carousel_inner_item;
//         console.log(carousel_inner_item);

//         // let f = window.getComputedStyle(carousel_inner_item);
//         // let fsize = f.fontSize;
//         // console.log(window.getComputedStyle(carousel_inner_item).fontSize);
//         // console.log(parseInt(fsize.replace('px', '')) + 4 + 'px');
//         // carousel_inner_item.style.fontSize = parseInt(fsize.replace('px', '')) + 4 + 'px';
//         // console.log(window.getComputedStyle(carousel_inner_item).fontSize);

//         // carousel_inner_item.style.animation = '';
//         // carousel_inner_item.style.animation = 'textgrowth 3s alternate;';
//     }
// });

