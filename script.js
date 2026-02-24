/* =========================================
   BACK TO TOP BUTTON LOGIC
========================================= */
const backToTopBtn = document.getElementById("backToTopBtn");

// Lắng nghe sự kiện cuộn chuột
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Kiểm tra xem nút có tồn tại trên trang không
    if (!backToTopBtn) return;

    // Nếu cuộn quá 300px thì hiện nút
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        // Về tuốt trên cùng thì ẩn đi
        backToTopBtn.style.display = "none";
    }
}

// Bấm nút thì trượt mượt mà lên top
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

    // Dùng API Clipboard để copy text
    navigator.clipboard.writeText(email).then(function() {
        if (btn) {
            // Đổi text và màu nền thành xanh lá cây
            btn.innerHTML = "Copied! ✨";
            btn.style.backgroundColor = "#83c486ff"; 
            
            // Tự động trả về trạng thái cũ sau 2 giây (2000 milliseconds)
            setTimeout(function() {
                btn.innerHTML = "maxsrarity@gmail.com";
                btn.style.backgroundColor = "#ff8a65"; 
            }, 2000);
        }
    }).catch(function(err) {
        console.error("Lỗi copy: ", err);
        alert("Oops! Không thể copy tự động, bạn hãy bôi đen maxsrarity@gmail.com để copy tay nhé.");
    });
}