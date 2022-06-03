const products = document.querySelector('select[name="products"]');
const categories = document.querySelector('select[name="categories"]')
const animate = document.querySelector('.animate');
const btnContainer = document.querySelector('.btn-container');
const table = document.querySelector('.table-container');
const dropdownItem = document.querySelector('.currency .dropdown-menu');

products.value = "";
categories.value = "";

products.addEventListener('change', () => {
    if (products.value !== ""){
        animate.classList.add("animation");
        animate.style.animation = "slide 1s forwards";
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
    } else {
        animate.classList.remove("animation");
        btnContainer.classList.remove("d-block");
        table.classList.remove("d-block");
        categories.value = "";
    }
});

dropdownItem.addEventListener('click', (e) => {
    // console.log(e.target.getAttribute('data-name'));
    switch (true) {
        case e.target.getAttribute('data-name') === "inr":
            console.log('le inr');
            break;
    
        case e.target.getAttribute('data-name') === "euro":
            console.log('le euro');
            break;
        
        default:
            console.log('le usd');
            break;
    }
})

