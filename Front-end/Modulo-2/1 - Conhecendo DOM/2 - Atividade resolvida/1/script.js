const colecaoDeLi = document.querySelectorAll('li')


for (const li of colecaoDeLi) {
    li.onclick = (event) => {
        const elementoClicado = event.target;
        if (elementoClicado.style.backgroundColor !== 'rgb(204, 204, 204)') {
            elementoClicado.style.backgroundColor = '#ccc';
            elementoClicado.style.textDecoration = "line-trough"
            return;
        }
        elementoClicado.style.backgroundColor = 'purple';
        elementoClicado.style.textDecoration = 'none';
    }
}