function closeModal() {
    const modal = document.getElementById("subscribe-modal");
    modal.classList.remove("modal_active");

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 2);
    document.cookie = "modalClosed=true; expires=" + expirationDate.toUTCString() + "; path=/";
}


function checkModalClosed() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === "modalClosed" && value === "true") {
            return true; 
        }
    }
    return false; 
}


window.onload = function() {
    if (!checkModalClosed()) {
        const modal = document.getElementById("subscribe-modal");
        modal.classList.add("modal_active");
    }
};


const closeBtn = document.querySelector(".modal__close");
closeBtn.addEventListener("click", closeModal);
