const elementInput = document.querySelector('input')

//change -> fica ouvindo se mudou o estado, quando ocorreu mudança, por exemplo, se vc digitar algo dentro do input, ou se vc selecionar e desselecionar, nesse último exemplo ele só vai te dar a confirmação de mudança quando vc desselecionar
elementInput.addEventListener('change', () => {
    console.log('mudou')
})