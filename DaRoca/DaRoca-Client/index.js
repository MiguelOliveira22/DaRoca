function Search(){
    document.querySelector("#main-query").submit();
}

document.addEventListener("DOMContentLoaded", () => {
    let values = document.cookie;
    let isUser = false;
    for(let i = 0; i < document.cookie.length; i ++){
        if("username" in values[i]){
            isUser = true;
        }
    }
    if(isUser){
        document.createElement("")
        document.querySelector("#selection").replaceWith()
    }
}, false);