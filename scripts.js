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
// Get modal elements
const modal = document.getElementById('imageModal');
const modalTitle = document.getElementById('modalPlanTitle');
const modalImage = document.getElementById('modalPlanImage');
const closeBtn = modal.querySelector('.close');

// Attach click events to all buttons with class "choosePlanBtn"
document.querySelectorAll('.choosePlanBtn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior

    const plan = this.getAttribute('data-plan');
    const imgSrc = this.getAttribute('data-img');

    // Set modal content
    modalTitle.textContent = plan;
    modalImage.src = imgSrc;
    modalImage.alt = plan + ' Image';

    // Show modal
    modal.style.display = 'flex';
  });
});

// Close modal when clicking "x"
closeBtn.onclick = function() {
  modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
