document.addEventListener("DOMContentLoaded", function(){
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
}, false)