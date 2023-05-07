$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 800,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                dots: false,
              }
            },
            
            
            
        ]
    });
    $('.review-slider').slick({
        dots: false,
        arrows: true,
        speed: 800,
        
    });
    
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const sliderItem = slick['$slides'][nextSlide];
        if(sliderItem.classList.contains('crypto-transaction')) { 
            $('.slider').addClass('bckgr-shiny');
        } else {
            $('.slider').removeClass('bckgr-shiny');
        }
    });
});


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const selectInput = select.querySelector('input');
    const arrow = dropdown.querySelector('.arrow');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        arrow.classList.toggle('arrow-rotate');
        menu.classList.toggle('menu-open');
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML;
            selectInput.value = option.textContent.trim();
            select.classList.remove('select-clicked');
            arrow.classList.remove('arrow-rotate');
            menu.classList.remove('menu-open');
                        
        });
    });

    document.addEventListener('click', (e) => {
        const clickDropdown = e.composedPath().includes(dropdown);
        if(!clickDropdown) {
            select.classList.remove('select-clicked');
            arrow.classList.remove('arrow-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

// accordion

const installAccordion = function() {
    const acordion = document.querySelectorAll('.acordion-title');
    acordion.forEach(function (title) {
        title.onclick = function() {
            title.closest('.acordion-item').classList.toggle('active');
        }
    });
}
installAccordion()

// modal 

const modal = document.querySelector('.header-mobile_modal');
const modalBtnOpen = document.querySelector('.open-modal');
const modalBtnClose = document.querySelector('.close-modal');
modalBtnOpen.addEventListener('click', () => {
    modal.classList.add('open');
});
modalBtnClose.addEventListener('click', () => {
    modal.classList.remove('open');
});


