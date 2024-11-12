// Create amazing floating bubbles
function createBubbles() {
    const bubbleCount = 50;
    const body = document.body;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 100 + 20;
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const animationDuration = Math.random() * 20 + 10;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${startX}px`;
        bubble.style.top = `${startY}px`;

        body.appendChild(bubble);

        bubble.animate(
            [
                { transform: `translate(0, 0) scale(0.5)`, opacity: 0 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${-window.innerHeight}px) scale(1)`, opacity: 1, offset: 0.8 },
                { transform: `translate(${Math.random() * 200 - 100}px, ${-window.innerHeight * 1.2}px) scale(0.5)`, opacity: 0 }
            ],
            {
                duration: animationDuration * 1000,
                iterations: Infinity,
                delay: Math.random() * -20000,
                easing: 'ease-in-out'
            }
        );
    }
}

// Form validation
const form = document.getElementById('bubbleForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const colorInput = document.getElementById('favoriteColor');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Age validation
    if (ageInput.value < 1 || ageInput.value >
