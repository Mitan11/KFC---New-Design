const inputs = document.querySelectorAll('input');

// Input Focus
function focusfunction() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

// Input Blur
function blurf() {
    if (this.value.trim() !== '') {
        return;
    } else {
        let parent = this.parentNode.parentNode;
        parent.classList.remove('focus');
    }
}


// Function Calling
inputs.forEach(input => {
    input.addEventListener('focus', focusfunction)
});

inputs.forEach(input => {
    input.addEventListener('blur', blurf)
});