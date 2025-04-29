// Lord of the Rings Wedding Invitation Script

document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal animation
    const sections = document.querySelectorAll('section, header, footer');
    
    // Simple scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
    
    // Add elvish text hover effect
    const elvishTexts = document.querySelectorAll('.elvish');
    elvishTexts.forEach(text => {
        text.addEventListener('mouseover', function() {
            this.style.letterSpacing = '4px';
            this.style.transition = 'letter-spacing 0.5s ease';
        });
        
        text.addEventListener('mouseout', function() {
            this.style.letterSpacing = '2px';
        });
    });
    
    // Add ring pulse effect on click
    const ring = document.querySelector('.ring');
    if (ring) {
        ring.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 1000);
        });
    }
    
    // Add countdown timer to the wedding date
    const weddingDate = new Date('June 25, 2024 18:00:00').getTime();
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    
    // Insert countdown after the date
    const dateElement = document.querySelector('.date');
    if (dateElement) {
        dateElement.parentNode.insertBefore(countdownElement, dateElement.nextSibling);
        
        // Update countdown every day
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
            if (distance < 0) {
                countdownElement.innerHTML = "<p>The journey has begun!</p>";
            } else {
                countdownElement.innerHTML = `<p>${days} days until the ceremony</p>`;
            }
        }
        
        updateCountdown();
        // Update once a day
        setInterval(updateCountdown, 86400000);
    }
});

// Add CSS for the new elements
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease, transform 1s ease;
        }
        
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .pulse {
            animation: ringPulse 1s ease;
        }
        
        @keyframes ringPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); box-shadow: 0 0 30px var(--gold), inset 0 0 30px var(--gold); }
            100% { transform: scale(1); }
        }
        
        .countdown {
            margin: 1rem 0;
            font-family: 'Cinzel', serif;
            color: var(--gold);
            font-size: 1.2rem;
        }
    `;
    document.head.appendChild(style);
});
