function call(){
    fetch("http://localhost:3000/produtos").then(data => {
        return data.json();
    })
    .then(product => {
        let a = document.URL;
        let b = true;
        let returner = new String();
        for(let i = 0; i < a.length; i ++){
            if(!b){
                returner += a[i];
            }
            if(a[i] == "="){
                b = false;
            }
        }
        console.log(product)

        let inUse;
        for(let i = 0; i < product.length; i ++){
            if(product[i].id == returner){
                inUse = product[i];
            }
        }

        let creator = document.createElement("img");
        console.log(inUse)
        creator.src = "../" + inUse.imagem;
        creator.id = "image-main"
        document.querySelector("#image").appendChild(creator);

        creator = document.createElement("h1");
        creator.innerHTML = inUse.nome;
        creator.className = "nomargin";
        document.querySelector("#name").appendChild(creator);

        let inner = document.createElement("small");
        inner.innerHTML = inUse.unidade;
        inner.className = "nomargin";

        creator = document.createElement("p");
        creator.id = "valuefinal";
        creator.className = "nomargin paddown";
        creator.innerHTML = inUse.valor.toFixed(2) + " ";
        document.querySelector("#valores").appendChild(creator);
        document.querySelector("#valuefinal").appendChild(inner);

        let quebra = inUse.categoria;
        for(let ji = 0; ji < quebra.length; ji ++){
            creator = document.createElement("span");
            creator.className = "nodeco newpad color background unbreakeable marginleft";
            creator.innerHTML = quebra[ji];
            document.querySelector("#categs").appendChild(creator);
        }

        creator = document.createElement("p");
        creator.id = "valuefim";
        creator.className = "nomargin";
        creator.innerHTML = inUse.descricao;
        document.querySelector("#descript-container").appendChild(creator);
    });    
}

function addCart(){
    let a = document.URL;
    let b = true;
    let returner = new String();
    for(let i = 0; i < a.length; i ++){
        if(!b){
            returner += a[i];
        }
        if(a[i] == "="){
            b = false;
        }
    }

    let uso = window.localStorage.length;
    let inUse = true;
    for(let i = 0; i < uso; i ++){
        if(localStorage.getItem(localStorage.key(i)) == returner){
            inUse = false;
        }
        console.log(i + " " + window.localStorage.length)
        console.log(window.localStorage.getItem(localStorage.key(i)));
    }
    if(inUse){
        window.localStorage.setItem("cart" + uso, returner);
    }
}

document.addEventListener("DOMContentLoaded", call(), false)