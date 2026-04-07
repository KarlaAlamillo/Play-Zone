/*Karla Alamillo Palacios
Diseño Web */
const sections = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add('show');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();
