
const thElements = document.querySelectorAll('table th');

function selectSize(size) {

    thElements.forEach(th => {
        const button = th.querySelector('button');
        if (button.textContent === size) {
            // Add the selected class to the clicked <th> element
            th.classList.add('selected');
        } else {
            // Disable the button inside the other <th> elements
            button.disabled = true;
        }
    });
}

function addCart() {
    console.log("Add to cart button clicked");
    // Add your logic for adding the item to the cart here
}
