document.addEventListener('DOMContentLoaded', () => {
    // Populate toy list
    const toys = [
        { name: 'Building Blocks', price: '₱150/month', img: 'images/bblocks.jpg' },
        { name: 'Toy Car Set', price: '₱100/month', img: 'images/tcars.jpg' },
        { name: 'Puzzle Board', price: '₱120/month', img: 'images/puzzles.jpg' },
        { name: 'Doll House', price: '₱200/month', img: 'images/dhouse.jpg' }
    ];

    const toyList = document.getElementById('toy-list');

    toys.forEach(toy => {
        const toyCard = document.createElement('div');
        toyCard.className = 'col-md-3 mb-4';
        toyCard.innerHTML = `
            <div class="toy-card card text-center">
                <img src="${toy.img}" alt="${toy.name}">
                <div class="card-body">
                    <h5 class="card-title">${toy.name}</h5>
                    <p class="card-text">${toy.price}</p>
                    <button class="btn btn-custom">Rent Now</button>
                </div>
            </div>
        `;
        toyList.appendChild(toyCard);
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation on scroll
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Ensure scroll snapping to sections
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('visible');
            }
        });
    });
});