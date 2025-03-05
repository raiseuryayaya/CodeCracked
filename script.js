document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect
    const words = ["Code Mastery", "Code Breakthrough", "Skill Enhancing"];
    let index = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typeText = document.getElementById("type-text");
  
    function typeEffect() {
      if (!isDeleting && letterIndex <= words[index].length) {
        currentWord = words[index].substring(0, letterIndex++);
      } else if (isDeleting && letterIndex >= 0) {
        currentWord = words[index].substring(0, letterIndex--);
      }
  
      typeText.innerHTML = currentWord + "<span class='cursor'></span>";
      
      if (!isDeleting && letterIndex === words[index].length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
      }
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    typeEffect();

    document.querySelectorAll('.faq-question').forEach((item) => {
        item.addEventListener('click', function () {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
    
            // Close other open answers
            document.querySelectorAll('.faq-item').forEach((otherItem) => {
                if (otherItem !== faqItem) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    


  
    // Navbar Menu Toggle
    document.addEventListener("DOMContentLoaded", function () {
        const menuBtn = document.querySelector(".menu-btn");
        const fullscreenMenu = document.querySelector(".fullscreen-menu");
        const closeButton = document.querySelector(".close-menu");
    
        menuBtn.addEventListener("click", function () {
            fullscreenMenu.classList.toggle("open");
            document.body.classList.toggle("nav-open");
        });
    
        closeButton.addEventListener("click", function () {
            fullscreenMenu.classList.remove("open");
            document.body.classList.remove("nav-open");
        });
    });
    
    
    // Color Palette Toggle
    document.addEventListener("DOMContentLoaded", function () {
        const colorButtons = document.querySelectorAll(".color-option");
        const body = document.body;
        const navbar = document.querySelector(".navbar");
        const sections = document.querySelectorAll(".section");
        const cards = document.querySelectorAll(".card");
    
        // Define themes with direct CSS properties
        const themes = {
            dark: {
                bgColor: "#121212",
                textColor: "#ffffff",
                cardBg: "#1e1e1e",
                highlight: "#ffcc00"
            },
            dim: {
                bgColor: "#222222",
                textColor: "#e0e0e0",
                cardBg: "#2e2e2e",
                highlight: "#ffa500"
            },
            lightpink: {
                bgColor: "#ffe6e9",
                textColor: "#000000",
                cardBg: "#ffccd5",
                highlight: "#ff4081"
            },
            blue: {
                bgColor: "#e3f2fd",
                textColor: "#000000",
                cardBg: "#bbdefb",
                highlight: "#1e88e5"
            },
            green: {
                bgColor: "#e8f5e9",
                textColor: "#000000",
                cardBg: "#c8e6c9",
                highlight: "#43a047"
            }
        };
    
        // Function to apply theme directly to elements
        function applyTheme(theme) {
            if (themes[theme]) {
                body.style.backgroundColor = themes[theme].bgColor;
                body.style.color = themes[theme].textColor;
                navbar.style.backgroundColor = themes[theme].bgColor;
                navbar.style.color = themes[theme].textColor;
    
                sections.forEach(section => {
                    section.style.backgroundColor = themes[theme].bgColor;
                    section.style.color = themes[theme].textColor;
                });
    
                cards.forEach(card => {
                    card.style.backgroundColor = themes[theme].cardBg;
                    card.style.color = themes[theme].textColor;
                    card.style.border = `2px solid ${themes[theme].highlight}`;
                });
    
                // Save theme in local storage
                localStorage.setItem("selectedTheme", theme);
            }
        }
    
        // Event listener for color buttons
        colorButtons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedTheme = this.dataset.theme;
                applyTheme(selectedTheme);
            });
        });
    
        // Load saved theme when navigating to another section
        const savedTheme = localStorage.getItem("selectedTheme");
        if (savedTheme) {
            applyTheme(savedTheme);
        }
    });
});    

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (e) {
        let trail = document.createElement("div");
        trail.className = "mouse-trail";
        document.body.appendChild(trail);

        // Set position
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        // Remove trail after animation
        setTimeout(() => {
            trail.remove();
        }, 500);
    });
});
