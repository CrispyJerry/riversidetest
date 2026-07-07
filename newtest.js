const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
    sidebar.classList.toggle("active");
    hamburger.classList.toggle("active");
    const isOpen = sidebar.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isOpen);
    hamburger.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

if (hamburger && sidebar) {
    hamburger.addEventListener("click", toggleSidebar);
}
