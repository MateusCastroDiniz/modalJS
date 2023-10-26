function CalcMedia(notas){
    let soma = 0;
    for (b=0; b < notas.length; b++){
        soma += parseFloat(notas[b]);
    };

    media = soma / notas.length
    return media
}

function verificarNota(nome , notas){

    let media = parseFloat(CalcMedia(notas)).toFixed(1);

    let condicao = media >=7 ? "aprovado(a)" : "reprovado(a)";
    let resposta = ""
    if(condicao == "aprovado(a)"){
    resposta = ("O aluno(a) " +nome+" foi " +condicao+ " com média: " +media);

    }else{
        resposta = ("O aluno(a) " +nome+" foi " +condicao+ " por obter média inferior a 7."+ "</br>" +" Média: " +media);

    }

    document.getElementById('resposta').style.display = 'block'
    document.getElementById('resultado').innerHTML = resposta;

}


    // var dados = new FormData(document.querySelector('#valores'))
    // var notas = []

    // for (let key of dados.keys()){

    //     let valor = dados.get(key).match(/[0-9]/) ? Number(dados.get(key)) : 0;

    //     if(!isNaN(valor) && valor >=0 && valor<= 10){
    //         notas.push(valor)
    //     }

    // console.log(notas);

    // verificarNota(document.getElementById('nome-aluno').value, notas);

document.addEventListener('submit', function(event){

    event.preventDefault();
    event.stopPropagation();

    if(this.className == 'corrompido'){
        return false
    }

    // let resposta = ""
    // document.getElementById('resposta').style.display = 'block'
    // document.getElementById('resultado').innerHTML = resposta;

    let campo = document.querySelector('input')

    let nome = document.querySelector('input.nome').value
    let cpf = document.querySelector('input.cpf').value
    let email = String(document.querySelector('input.email').value)
    let telefone = document.querySelector('input.telefone').value
    let uf = document.querySelector('input.uf').value
    let cep = document.querySelector('input.cep').value

    let title_resposta = "Confirmação de dados"
    let resposta = "Nome: " + nome + "<br>" + "CPF: " + cpf + "<br>" + "email: " + email + "<br>" + "Telefone: " + telefone + "<br>" + "UF: " + uf + "<br>" + "CEP: " + cep

    document.querySelector('form#cadastro').style.display = 'none'
    document.querySelector('#resposta').style.display = 'block'
    document.querySelector('#titulo').innerHTML = title_resposta;
    document.querySelector('#resultado').innerHTML = resposta;
    

})

function verificaObrigatorios(elemento){

elemento.addEventListener('focusout', function(event){
    event.preventDefault();

    if(this.value != ""){
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')

        }else{
            document.querySelector('p#resultado').value = "Não deixe campos em vazio!"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }

})}

function resetar(elemento){
    elemento.value = elemento.value.replace(/\(|\)|\-|\s|\./gi, "") 
    return elemento.value
}

function lookIn(elemento){
    elemento.addEventListener('focus', function(event){
        event.preventDefault();
        resetar(elemento)
    })
}   

function formataCPF(elemento){
    let cpfID = elemento
    let cpfAtualizado;

    cpfAtualizado = cpfID.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function(regex, arg1, arg2, arg3, arg4){
        return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4
    })
    cpfID = cpfAtualizado;
    return cpfID
}

function validaCpf(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

       

        if(resetar(this).match(/(\d{3})(\d{3})(\d{3})(\d{2})/)){
            document.querySelector('input.cpf').value = formataCPF(document.querySelector('input.cpf').value)
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')

        }else{
            document.querySelector('p#resultado').value = "Se lida"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
    })

    lookIn(elemento)

}

function validaCampNum(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')

        }else{
            document.querySelector('p#resultado').value = "Digite um valor de 0 a 10"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            this.value = ""
            return false
        }
    })
}


function validaUf(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        if(this.value.match(/\D{2}/)){
            document.querySelector('#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Preencha o campo UF corretamente"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
    })
}


function formataTel(elemento){
    let tel = elemento
    let telAtualizado;

    telAtualizado = tel.replace(/(\d{2})(\d{5})(\d{4})/, function(regex, arg1, arg2, arg3){
        return '('+ arg1 + ')' + ' ' + arg2 + '-' + arg3
    })
    tel = telAtualizado;
    return tel
}

function validaTel(elemento){

    lookIn(elemento)

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(resetar(this).match(/\d{10}/)){
            document.querySelector('p#resultado').value = ""
            document.querySelector('input.telefone').value = formataTel(document.querySelector('input.telefone').value)
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Insira um número de telefone válido"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
        
    })
}

function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();
        
        if(this.value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i)){
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Insira um Email válido"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            this.value = ""
            return false
        }
    })
}

function formataCEP(elemento){
    let CEP = elemento
    let cepAtualizado;

    cepAtualizado = CEP.replace(/(\d{5})(\d{3})/, function(regex, arg1, arg2){
        return arg1 + '-' + arg2
    })
    CEP = cepAtualizado;
    return CEP
}

function validaCep(elemento){
    lookIn(elemento)

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(resetar(this).match(/\d{8}/)){
            this.value = formataCEP(document.querySelector('input.cep').value)
            document.querySelector('p#resultado').value = ""
            this.classList.remove('erro')
            this.parentNode.classList.remove('corrompido')
        }else{
            document.querySelector('p#resultado').value = "Insira um CEP válido"
            this.classList.add('erro')
            this.parentNode.classList.add('corrompido')
            return false
        }
    })

    elemento.addEventListener('focus', function(event){
        event.preventDefault();
        
        this.value = this.value.replace(/\-/, "")
    
        
    })
}


for(let campos of document.querySelectorAll('input')){
    if(campos.className.match('obrigatorio')){
    verificaObrigatorios(campos)
    }
    if(campos.className.match('cpf')){
        validaCpf(campos)}
    if(campos.className.match('email')){
        validaEmail(campos)
    }
    if(campos.className.match('telefone')){
        validaTel(campos)
    }
    if(campos.className.match('uf')){
        validaUf(campos)
    }
    if(campos.className.match('cep')){
        validaCep(campos)
        }
    }
