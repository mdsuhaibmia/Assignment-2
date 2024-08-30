function toggleProducts() {
    const hiddenProducts = document.querySelectorAll('.product.hidden');
    const toggleButton = document.querySelector('.toggle-button');

    hiddenProducts.forEach(product => {
        if (product.style.display === 'none' || product.style.display === '') {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    // Toggle button text
    if (toggleButton.textContent === 'See More Products') {
        toggleButton.textContent = 'See Less Products';
    } else {
        toggleButton.textContent = 'See More Products';
    }
}