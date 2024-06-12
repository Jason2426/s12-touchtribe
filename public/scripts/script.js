function disableOtherButtons(clickedButton) {
    // Get all the buttons on the page
    const buttons = document.querySelectorAll('button');

    // Loop through each button
    buttons.forEach(button => {
        // Disable the button if it's not the clicked button
        if (button !== clickedButton) {
            button.disabled = true;
        }
    });
}