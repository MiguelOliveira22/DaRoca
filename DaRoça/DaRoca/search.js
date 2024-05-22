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

    const nProducts = 6;
    let product = [
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
        {"name": "Banana", "url": "banana-prata", "img": "./images/banana.png", "value": "R$2340.00", "unit": "per unit"}
    ]
    for(let j = 0; j < nProducts; j ++){
        if(true){
            let creator = document.createElement("a");
            creator.href = product[j].url;
            creator.id = "b" + j
            creator.className = "nodecoration";
            document.querySelector("#main-content").appendChild(creator);

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
        }
    }
}, false)
