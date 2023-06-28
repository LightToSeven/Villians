// function scaleSite() {
//     var viewportWidth = window.innerWidth;
//     var scale = viewportWidth / 420;
//     if(viewportWidth < 375) {
//         document.body.style.transform = 'scale(' + scale + ')';
//         document.body.style.transformOrigin = 'top left';
//     }else {
//         document.body.style.transform = 'scale(1)';
//     }
// }
//
// window.addEventListener('resize', scaleSite);

$(document).ready(function () {
    $('.herosMobNav .item').on('click', function () {
        if(!$(this).hasClass('active')){
            $('.herosMobNav .item').removeClass('active')
            $(this).addClass('active')
            $('.content__hero').removeClass('active')
            $($(this).data('id')).addClass('active')
            $('.herosMob img').removeClass('active')
            $($(this).data('img')).addClass('active')
        }
    })
    $('.carousel figure').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.behind .behind__slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    function faqs() {
        const faqsContainer = document.querySelector('.faqs__lists')

        if (faqsContainer) {
            const btns = faqsContainer.querySelectorAll('.item__btn')

            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const item = btn.closest('.item')
                    const content = item.querySelector('.item__content')

                    item.classList.toggle('active')

                    if (item.classList.contains('active')) {
                        content.style.maxHeight = content.scrollHeight + 'px'
                    } else {
                        content.style.maxHeight = '0'
                    }
                })
            })
        }
    }
    faqs()
})
