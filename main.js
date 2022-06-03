const products = document.querySelector('select[name="products"]');
const categories = document.querySelector('select[name="categories"]')
const animate = document.querySelector('.animate');
const btnContainer = document.querySelector('.btn-container');
const table = document.querySelector('.table-container');

products.value = "";
categories.value = "";

products.addEventListener('change', () => {
    if (products.value !== ""){
        animate.classList.add("animation");
    } else {
        animate.classList.remove("animation");
        update();
    }
})

categories.addEventListener('change', () => {
    if (categories.value !== ""){
        btnContainer.classList.add("d-block");
        table.classList.add("d-block");
        table.style.animation = "slide 1s forwards";
    } else {
        btnContainer.classList.remove("d-block");
        table.classList.remove("d-block");
    }
})