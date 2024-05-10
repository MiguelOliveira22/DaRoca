function checkcpf(){
    let a = document.querySelector('#cpf').value;
    if(a.length != 11){
        console.log("Tamanho Errado")
        return 2;
    }

    let somatoria = 0;
    let digito1 = 0;

    for(let i = 0, j = 10; i < 9; i += 1, j -= 1)
    {
        somatoria += Number(a[i]) * j;
    }

    if(somatoria / 11 >= 2){
        digito1 = 11 - (somatoria - (Math.floor(somatoria / 11) * 11));
    }
    else{
        digito1 = 0;
    }

    if(!(Number(a[9]) == digito1)){
        console.log("Falso");
        return 0;
    }

    somatoria = 0;
    let digito2 = 0;

    for(let i = 0, j = 11; i < 10; i += 1, j -= 1)
    {
        somatoria += Number(a[i]) * j;
    }

    if(somatoria / 11 >= 2){
        digito2 = 11 - (somatoria - (Math.floor(somatoria / 11) * 11));
    }
    else{
        digito2 = 0;
    }

    if(!(Number(a[10]) == digito2)){
        console.log("Falso");
        return 0;
    }

    console.log("Verdade");
    return 1;
}

function isActive()
{
    if(checkcpf() == 1){
        document.querySelector("#iscpf").src = "images/true.svg";
        document.querySelector("#erro").innerText = "CPF Valido";
    }
    else if(checkcpf() == 2){
        document.querySelector("#iscpf").src = "images/incomplete.svg";
        document.querySelector("#erro").innerText = "O CPF Não Está Completo";
    }
    else if(checkcpf() == 0){
        document.querySelector("#iscpf").src = "images/wrong.svg";
        document.querySelector("#erro").innerText = "CPF Invalido";
    }
}