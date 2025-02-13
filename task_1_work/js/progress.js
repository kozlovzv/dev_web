function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.clientHeight;
        const fullHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = (window.scrollY / fullHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

function updateViewCount() {
    const pageUrl = window.location.pathname;
    let views = localStorage.getItem(pageUrl) || 0;
    views = parseInt(views) + 1;
    localStorage.setItem(pageUrl, views);

    const viewCounter = document.querySelector('.view-counter');
    if (viewCounter) {
        viewCounter.textContent = `Просмотров: ${views}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initProgressBar();
    updateViewCount();
});
