// Кнопка "Наверх"
function createScrollTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-top';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        button.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', createScrollTopButton);

// Lazy loading для изображений
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    // Оптимизация загрузки изображений
    const imageOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '50px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.catalog .item').forEach(item => {
        observer.observe(item);
    });
});

// Функционал поиска
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const catalogItems = document.querySelectorAll('.catalog .item');

            catalogItems.forEach(item => {
                const cityName = item.querySelector('a').textContent.toLowerCase();
                const shouldShow = cityName.includes(searchTerm);
                item.style.display = shouldShow ? 'block' : 'none';
                
                if (shouldShow) {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50);
                }
            });
        });
    }
});

// Функционал фильтрации
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const region = btn.dataset.region;
            
            // Обновляем активную кнопку
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Фильтруем элементы
            const items = document.querySelectorAll('.catalog .item');
            items.forEach(item => {
                if (region === 'all' || item.dataset.region === region) {
                    item.style.display = '';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
});

// Удаляем функции галереи
// function initializeGallery() {...}
// function initializeSlideshow() {...}

document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    // Удаляем инициализацию галереи
    // initializeGallery();
    // initializeSlideshow();
});
