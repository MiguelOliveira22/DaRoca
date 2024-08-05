function call(){
    let id = "1";
    fetch("http://localhost:3000/produtos/" + id).then(data => {
        return data.json();
    })
    .then(product => {
        let creator = document.createElement("img");
        creator.src = "http://localhost:3300/cdn/" + product[0].imagem;
        creator.id = "image-main";
        document.querySelector("#image").appendChild(creator);

        creator = document.createElement("h1");
        creator.innerHTML = product[0].nome;
        creator.className = "nomargin";
        document.querySelector("#name").appendChild(creator);

        let inner = document.createElement("small");
        inner.innerHTML = product[0].unidade;
        inner.className = "nomargin";

        creator = document.createElement("p");
        creator.id = "valuefinal";
        creator.className = "nomargin paddown";
        creator.innerHTML = product[0].valor.toFixed(2) + " ";
        document.querySelector("#valores").appendChild(creator);
        document.querySelector("#valuefinal").appendChild(inner);

        let quebra = inUse.categoria;
        for(let i = 0; i < quebra.length; i ++){
            creator = document.createElement("span");
            creator.className = "nodeco newpad color background unbreakeable marginleft";
            creator.innerHTML = quebra[i];
            document.querySelector("#categs").appendChild(creator);
        }

        creator = document.createElement("p");
        creator.className = "nomargin";
        creator.innerHTML = product[0].descricao;
        document.querySelector("#descript-container").appendChild(creator);
    });    
}

function addCart(){
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