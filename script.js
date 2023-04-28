function clicar() {
    let pesotxt = window.document.getElementById('pesotxt')
    let peso = Number(pesotxt.value)
    let alturatxt = window.document.getElementById('alturatxt')
    let altura = Number(alturatxt.value)
    let imc = peso / altura**2
    let p = window.document.getElementById('p')
    let nome = window.document.getElementById('nometxt')

    if (nometxt.value.length == 0 || pesotxt.value.length == 0 || alturatxt.value.length == 0 || altura == 0 || peso == 0) {
        alert('ERRO! Algo deu errado, sinto muito :(')

    } else {
        p.innerHTML = `Olá ${nome.value}, seu IMC é igual a ${imc.toFixed(1)}`

        if (imc < 18.5) {
            p.innerHTML += `! Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico.`

        } else if (imc >= 18.5 && imc <= 24.9) {
            p.innerHTML += `! Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais`

        } else if (imc >= 25 && imc <= 29.9) {
            p.innerHTML += `! Você está com sobrepeso. Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.`

        } else if (imc >= 30 && imc <= 34.9) {
            p.innerHTML += `! Você está com Obesidade grau I. Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde.`

        } else if (imc >= 35 && imc <= 39.9) {
            p.innerHTML += `! Você está com Obesidade grau II. Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo`

        } else {
            p.innerHTML += `! Você está com Obesidade grau III. Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo.`
        }
    }
}