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
   SMOOTH SCROLL & Clean URL Hash LOGIC
========================================= */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        //'#', '#games', '/#games' 
        if (href && href.includes('#')) {
            // Pick out the part starting with # (e.g. '#games')
            const targetId = href.substring(href.indexOf('#'));
            
            const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

            if (isHomePage) {
                e.preventDefault(); // Prevent default jump behavior
                
                if (targetId === '#') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                
                // Remove the hash (#) from the URL after scrolling
                history.pushState(null, null, window.location.pathname);
            }
        }
    });
});

// Handle the case when user directly visits a URL with a hash (e.g. index.html#games)
// wait for the page to load, then remove the hash from the URL without affecting scroll position
window.addEventListener('load', function() {
    if (window.location.hash) {
        setTimeout(function() {
            history.replaceState(null, null, window.location.pathname);
        }, 100);
    }
});