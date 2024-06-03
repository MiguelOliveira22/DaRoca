function call(categstrings){
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
        document.querySelector("#querymain").value = returner;

        let nProducts = product.length;
        let k = 0;
        let l = 0;
        let isContent = 0;
        for(let j = 0; j < nProducts; j ++){
            if(k == 0){
                let creator = document.createElement("div");
                creator.id = "div" + l
                creator.className = "flex around rows";
                document.querySelector("#main-content").appendChild(creator);
                l ++;
                k ++;
            }

            let string = product[j].nome.toLowerCase();

            if(string.includes(returner.toLowerCase()) && categoryIn(categstrings, product[j])){
                let creator = document.createElement("a");
                creator.href = "product.html?prod=" + product[j].id;
                creator.id = "b" + j
                creator.className = "nodecoration flex flex-root";
                document.querySelector("#div" + (l - 1)).appendChild(creator);

                creator = document.createElement("div");
                creator.className = "prod flex down flex-root";
                creator.id = "d" + j;
                document.querySelector("#b" + j).appendChild(creator);

                creator = document.createElement("div");
                creator.className = "flex centralizenormal";
                creator.id = "e" + j;
                document.querySelector("#d" + j).appendChild(creator);

                creator = document.createElement("img");
                creator.style.width = "160px";
                creator.style.Height = "160px";
                creator.src = product[j].imagem;
                document.querySelector("#e" + j).appendChild(creator);

                creator = document.createElement("h3");
                creator.className = "smallname";
                creator.innerHTML = product[j].nome;
                document.querySelector("#d" + j).appendChild(creator);

                creator = document.createElement("p");
                creator.className = "small";
                creator.innerHTML = "R$" + product[j].valor + " ";
                creator.id = "p" + j
                document.querySelector("#d" + j).appendChild(creator);

                creator = document.createElement("small");
                creator.className = "small";
                creator.innerHTML = "per kg";// product[j].unit
                document.querySelector("#p" + j).appendChild(creator);
                isContent = 1
                k ++;
            }

            if(k > 6){
                k = 0;
            }
        }

        while((k <= 6 && k != 0) && isContent){
            let creator = document.createElement("div");
            creator.className = "nodecoration flex flex-root";
            document.querySelector("#div" + (l - 1)).appendChild(creator);

            k++;
        }

        if(!isContent){
            document.querySelector("#div0").className = "flex centralize centralizenormal rows";

            let creator = document.createElement("img");
            creator.style.width = "350px";
            creator.style.Height = "350px";
            creator.src = "images/perdao.svg";
            creator.className = "flex around rows";
            document.querySelector("#div0").appendChild(creator);

            creator = document.createElement("p");
            creator.style.width = "350px";
            creator.innerHTML = "Perdão, mas não conseguimos encontrar nenhum produto parecido com o descrito!";
            creator.className = "flex around rows";
            document.querySelector("#div0").appendChild(creator);
        }
    })
}

function callCategs(){
    document.querySelector("#main-content").childNodes.forEach(element => {
        document.querySelector("#main-content").removeChild(element)
    });

    let categorysave = [];
    document.querySelector("#categs").childNodes.forEach(element => {
        if(element.checked){
            categorysave.push(element.value);
        }
    });
    
    for(let j = 0; j < categorysave.length; j ++){
        console.log(categorysave);
    }

    call(categorysave)
}

function categoryIn(categories, compare){
    if(categories == null){
        return true;
    }
    else if(categories.length == 0){
        return true;
    }

    let categoriasUsada = compare.categorias.split(" ");
    for(let i = 0; i < categories.length; i ++){
        for(let j = 0; j < categoriasUsada.length; j ++){
            if(categories[i] == categoriasUsada[j]){
                return true;
            }
        }
    }
    return false;
}

document.addEventListener("DOMContentLoaded", document => call(), false)