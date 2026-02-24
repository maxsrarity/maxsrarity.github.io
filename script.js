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
    SMOOTH SCROLL & CLEAN URL LOGIC
========================================= */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href && href.startsWith('#')) {
            e.preventDefault(); 
            
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            
            //remove # from URL after scrolling
            history.pushState(null, null, window.location.pathname);
        }
    });
});

// Handle the case when user directly visits a URL with a hash (e.g., from an external link)
// wait for the page to load, then remove the hash from the URL
window.addEventListener('load', function() {
    if (window.location.hash) {
        setTimeout(function() {
            history.replaceState(null, null, window.location.pathname);
        }, 100);
    }
});