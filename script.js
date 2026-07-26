// প্রিমিয়াম স্ক্রল রিভিল অ্যানিমেশন (Scroll Reveal Animation)
document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer তৈরি করা হচ্ছে
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // এলিমেন্টের ১৫% স্ক্রিনে আসলেই অ্যানিমেশন শুরু হবে
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 'active' ক্লাস অ্যাড করলে CSS থেকে অ্যানিমেশন ট্রিগার হবে
                entry.target.classList.add('active');
                
                // একবার অ্যানিমেশন হয়ে গেলে অবসার্ভার রিমুভ করে দেওয়া
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    

    // .reveal ক্লাস আছে এমন সব এলিমেন্টকে সিলেক্ট করা
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // স্মুথ স্ক্রলিং (Smooth Scrolling for Navigation Links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Project Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'flex';
                } else {
                    if (card.classList.contains(filterValue)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});