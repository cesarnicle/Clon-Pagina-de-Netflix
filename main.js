document.addEventListener('DOMContentLoaded', () => {
    function scrollLeft() {
        const posterWrapper = document.querySelector('.poster-wrapper');
        posterWrapper.scrollBy({
            left: -500,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        const posterWrapper = document.querySelector('.poster-wrapper');
        posterWrapper.scrollBy({
            left: 500,
            behavior: 'smooth'
        });
    }

    document.querySelector('.btn-left').onclick = scrollLeft;
    document.querySelector('.btn-right').onclick = scrollRight;
});
