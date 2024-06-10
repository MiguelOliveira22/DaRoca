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
    let info = document.createElement("path");
    info.id = "iscpf";
    
    if(checkcpf() == 1){
        info.setAttribute("d", "images/true.svg");
        document.querySelector("#iscpf").remove();
        document.querySelector("#access").appendChild(info);
        document.querySelector("#erro").innerText = "CPF Valido";
    }
    else if(checkcpf() == 2){
        info.setAttribute("d", "M421.428,72.476C374.868,25.84,312.86,0.104,246.724,0.044C110.792,0.044,0.112,110.624,0,246.548c-0.068,65.912,25.544,127.944,72.1,174.584c46.564,46.644,108.492,72.46,174.4,72.46h0.58v-0.048c134.956,0,246.428-110.608,246.556-246.532C493.7,181.12,468,119.124,421.428,72.476z M257.516,377.292c-2.852,2.856-6.844,4.5-10.904,4.5c-4.052,0-8.044-1.66-10.932-4.516c-2.856-2.864-4.496-6.852-4.492-10.916c0.004-4.072,1.876-8.044,4.732-10.884c2.884-2.86,7.218-4.511,11.047-4.542c3.992,0.038,7.811,1.689,10.677,4.562c2.872,2.848,4.46,6.816,4.456,10.884C262.096,370.46,260.404,374.432,257.516,377.292z M262.112,304.692c-0.008,8.508-6.928,15.404-15.448,15.404c-8.5-0.008-15.42-6.916-15.416-15.432L231.528,135c0.004-8.484,3.975-15.387,15.488-15.414c4.093,0.021,7.895,1.613,10.78,4.522c2.912,2.916,4.476,6.788,4.472,10.912L262.112,304.692z");
        document.querySelector("#iscpf").remove();
        document.querySelector("#access").appendChild(info);
        document.querySelector("#erro").innerText = "O CPF Não Está Completo";
    }
    else if(checkcpf() == 0){
        info.setAttribute("d", "M246.73,0C110.682,0,0.002,110.684,0.002,246.744c0,136.032,110.68,246.712,246.728,246.712s246.724-110.68,246.724-246.712C493.454,110.684,382.778,0,246.73,0z M360.258,348.776l-11.112,11.12c-2.808,2.836-7.82,2.836-10.644,0l-88.68-88.672c-0.728-0.74-1.704-1.136-2.732-1.136c-1.028,0-2.004,0.4-2.732,1.136L155.682,359.9c-2.82,2.836-7.828,2.836-10.648,0l-11.108-11.12c-1.412-1.404-2.196-3.304-2.196-5.3c0-2.02,0.784-3.916,2.196-5.344l88.68-88.672c1.508-1.512,1.508-3.948,0-5.452l-88.68-88.68c-1.412-1.416-2.196-3.308-2.196-5.32c0-2.02,0.784-3.916,2.196-5.328l11.108-11.108c2.82-2.82,7.828-2.82,10.648,0l88.68,88.672c1.444,1.444,4.016,1.444,5.46,0l88.676-88.676c2.824-2.824,7.836-2.824,10.644,0l11.112,11.112c2.928,2.924,2.928,7.716,0,10.648l-88.692,88.676c-1.504,1.504-1.504,3.94,0,5.452l88.696,88.672C363.186,341.072,363.186,345.844,360.258,348.776z");
        document.querySelector("#iscpf").remove();
        document.querySelector("#access").appendChild(info);
        document.querySelector("#erro").innerText = "CPF Invalido";
    }
}

function SaveCookies(){
    document.cookie = "username = " + document.querySelector("#username").value;
    document.cookie = "pass = " + document.querySelector("#pass").value;
}