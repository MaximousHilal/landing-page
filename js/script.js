document.querySelector(".bar").addEventListener("click", function () {
        let nav = document.querySelector(".main-nav");
        nav.classList.toggle("hidden");
        nav.classList.toggle("slideInDown");
    });

document.querySelector('.scroll-down').addEventListener('click', function () {
        window.scrollBy(0, window.innerHeight);
    })
