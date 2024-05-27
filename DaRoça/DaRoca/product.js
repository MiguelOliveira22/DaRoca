function call(){
    fetch("products.json").then(data => {
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
            if(product[i].url == returner){
                inUse = product[i];
            }
        }
        console.log(inUse)
    });
}

document.addEventListener("DOMContentLoaded", call(), false)