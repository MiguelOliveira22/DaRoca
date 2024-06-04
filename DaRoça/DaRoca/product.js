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

        let inUse
        for(let i = 0; i < product.length; i ++){
            if(product[i].id == returner){
                inUse = product[i];
            }
        }

        let creator = document.createElement("img");
        creator.src = inUse.imagem;
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
        creator.innerHTML = inUse.descriptor;
        document.querySelector("#descript-container").appendChild(creator);
    });    
}

document.addEventListener("DOMContentLoaded", call(), false)