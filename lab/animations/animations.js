(() => window.addEventListener('load', () => {
    document.getElementById('news-list').addEventListener('click', (e) => {
        console.log('Clicked!', parseInt(e.target.dataset.newsId, 10));
        e.target.classList.toggle('news-item-hidden', true);
    });

    document.getElementById('news-slider-btn--1').addEventListener('click', () => {
        document.querySelectorAll('.news-item').forEach(
            elm => {
                console.log(elm);
                elm.classList.toggle('news-item-hidden', false);
            }
        );
    });
})
)();
