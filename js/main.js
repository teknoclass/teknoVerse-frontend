// Header Sticky
// window.onscroll = () => {
//     if (window.scrollY <= 100) {
//         document.querySelector('header.main-header').classList.remove('sticky');
//     } else {
//         document.querySelector('header.main-header').classList.add('sticky');
//     }
// };
// Password Show Toggle
function showPassword(iconElement) {
    const passInput = iconElement.previousElementSibling;
    if (passInput.type == "password") {
        iconElement.innerHTML =
            `<svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.1766 14C18.1766 16.31 16.31 18.1767 14 18.1767C11.69 18.1767 9.8233 16.31 9.8233 14C9.8233 11.69 11.69 9.82336 14 9.82336C16.31 9.82336 18.1766 11.69 18.1766 14Z" stroke="#002D84BF" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.0001 23.6483C18.1184 23.6483 21.9567 21.2217 24.6284 17.0217C25.6784 15.3767 25.6784 12.6117 24.6284 10.9667C21.9567 6.76666 18.1184 4.34 14.0001 4.34C9.88173 4.34 6.04339 6.76666 3.37173 10.9667C2.32173 12.6117 2.32173 15.3767 3.37173 17.0217C6.04339 21.2217 9.88173 23.6483 14.0001 23.6483Z" stroke="#002D84BF" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        passInput.type = "text";
    } else {
        iconElement.innerHTML = `<svg width="20" height="20" viewBox="0 0 28 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.9516 11.0484L11.0483 16.9517C10.29 16.1934 9.8233 15.155 9.8233 14C9.8233 11.69 11.69 9.82336 14 9.82336C15.155 9.82336 16.1933 10.29 16.9516 11.0484Z"
                                                    stroke="#002D84BF" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M20.7901 6.73168C18.7484 5.19168 16.4151 4.35168 14.0001 4.35168C9.88173 4.35168 6.04339 6.77835 3.37173 10.9784C2.32173 12.6234 2.32173 15.3884 3.37173 17.0334C4.2934 18.48 5.36673 19.7284 6.53339 20.7317"
                                                    stroke="#002D84BF" stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M9.8233 22.785C11.1533 23.345 12.565 23.6483 14 23.6483C18.1183 23.6483 21.9566 21.2217 24.6283 17.0217C25.6783 15.3767 25.6783 12.6117 24.6283 10.9667C24.2433 10.36 23.8233 9.78835 23.3916 9.25168"
                                                    stroke="#002D84BF" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M18.095 14.8167C17.7917 16.4617 16.45 17.8033 14.805 18.1067"
                                                    stroke="#002D84BF" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.0484 16.9517L2.33337 25.6667" stroke="#002D84BF"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M25.6667 2.33331L16.9517 11.0483" stroke="#002D84BF"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>`;
        passInput.type = "password";
    }
}
// Input Tel Iniz
if (document.querySelector('#phone')) {
    window.intlTelInput(document.querySelector('#phone'), {});
}
// Start Our Customers Swiper
const ourCustomersSwiper = new Swiper(".our-customers-swiper .swiper-container", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});