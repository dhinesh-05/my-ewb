document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    // Add staggered animation delay to items on initial load
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(f => f.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter elements
            items.forEach(item => {
                // Reset animation
                item.style.animation = 'none';
                // Trigger reflow
                item.offsetHeight; 
                
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('hidden');
                    // Add slight timeout to allow display change before animating in
                    setTimeout(() => {
                        item.style.animation = `popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
                    }, 10);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// Preloader Fallback (in case of cached HTML)
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('loaded');
            setTimeout(() => {
                preloader.remove();
            }, 1000); // Wait for transition out
        }, 2000); // 2 seconds loading
    }
});
