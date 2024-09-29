const elementoInput = document.querySelector('input');


elementoInput.addEventListener("focus", () => {
    elementoInput.style.outline = 'none';
    elementoInput.style.borderColor = 'red';
    console.log('meu elemento está em foco')
})