/* =========================================
   BACK TO TOP BUTTON LOGIC
========================================= */
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (!backToTopBtn) return;

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}

if (backToTopBtn) {
    backToTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

/* =========================================
   COPY EMAIL LOGIC
========================================= */
function copyEmail() {
    const email = "maxsrarity@gmail.com";
    const btn = document.getElementById("copyEmailBtn");

    navigator.clipboard.writeText(email).then(function() {
        if (btn) {
            btn.innerHTML = "Copied! ✨";
            btn.style.backgroundColor = "#83c486ff"; 
            
            setTimeout(function() {
                btn.innerHTML = "maxsrarity@gmail.com";
                btn.style.backgroundColor = "#ff8a65"; 
            }, 2000);
        }
    }).catch(function(err) {
        console.error("Failed to copy email:", err);
        alert("Oops! Failed to copy email. Please try manually: " + email);
    });
}

/* =========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
========================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});