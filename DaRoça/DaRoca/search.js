document.addEventListener("DOMContentLoaded", function(){
    //Get Search Values
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

    let product = [
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "categorias": "queijo teste doce", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"},
        {"name": "Morango", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"}
    ]
    let nProducts = product.length;
    let k = 0;
    let l = 0;
    let isContent
    for(let j = 0; j < nProducts; j ++){
        if(k == 0){
            let creator = document.createElement("div");
            creator.id = "div" + l
            creator.className = "flex around rows";
            document.querySelector("#main-content").appendChild(creator);
            l ++;
            k ++;
        }

        if(product[j].name.includes(returner)){
            let creator = document.createElement("a");
            creator.href = product[j].url;
            creator.id = "b" + j
            creator.className = "nodecoration";
            document.querySelector("#div" + (l - 1)).appendChild(creator);

            creator = document.createElement("div");
            creator.className = "prod";
            creator.id = "d" + j;
            document.querySelector("#b" + j).appendChild(creator);

            creator = document.createElement("div");
            creator.className = "flex centralizenormal";
            creator.id = "e" + j;
            document.querySelector("#d" + j).appendChild(creator);

            creator = document.createElement("img");
            creator.style.width = "160px";
            creator.style.Height = "160px";
            creator.src = product[j].img;
            document.querySelector("#e" + j).appendChild(creator);

            creator = document.createElement("h3");
            creator.className = "smallname";
            creator.innerHTML = product[j].name;
            document.querySelector("#d" + j).appendChild(creator);

            creator = document.createElement("p");
            creator.className = "small";
            creator.innerHTML = product[j].value + " ";
            creator.id = "p" + j
            document.querySelector("#d" + j).appendChild(creator);

            creator = document.createElement("small");
            creator.className = "small";
            creator.innerHTML = product[j].unit;
            document.querySelector("#p" + j).appendChild(creator);
            isContent = 1
            k ++;
        }

        if(k > 6){
            k = 0;
        }
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
}, false)
