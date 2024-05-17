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

        //Load Page Contents
        /*                     
        <a href="product.html" class="nodecoration">
            <div class="prod">
                <div class="flex centralizenormal">
                    <img src="images/banana.png" alt="" height="160" width="160">
                </div>
                <h3 class="smallname">Name Product</h3>
                <p class="small">R$ 24.00 <small class="small">per unit</small></p>
            </div>
        </a>
        */
    
    const nProducts = 6;
    for(let j = 0; j < nProducts; j ++){
        if(true){ // product in returner
            let creator = document.createElement("a");
            creator.href = "product.html" // product.url;
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
            creator.src = "images/banana.png" // product.img;
            document.querySelector("#e" + j).appendChild(creator);

            creator = document.createElement("h3");
            creator.className = "smallname";
            creator.innerHTML = "Name Prod" // product.name;
            document.querySelector("#d" + j).appendChild(creator);

            creator = document.createElement("p");
            creator.className = "small";
            creator.innerHTML = "$24 " // product.value + " ";
            creator.id = "p" + j
            document.querySelector("#d" + j).appendChild(creator);

            creator = document.createElement("small");
            creator.className = "small";
            creator.innerHTML = "per unit" // product.unit;
            document.querySelector("#p" + j).appendChild(creator);
        }
    }
}, false)