function LoadAll(){
    fetch("http://localhost:3000/carousel").then(data => {
        return data.json();
    })
    .then(carousel => {
        const carouselNumber = carousel.length;
        let rotation = document.querySelector(".carousel-indicators");
        let add = document.createElement("li");
        for(let i = 0; i < carouselNumber; i ++){
            add = document.createElement("li");
            add.setAttribute("data-target", "#myCarousel");
            add.setAttribute("data-slide-to", i);
            if(i == 0){
                add.setAttribute("class", "active");
            }
            rotation.append(add);
        }

        for(let j = 0; j < carouselNumber; j ++){
            rotation = document.querySelector(".carousel-inner");
            add = document.createElement("div");
            add.className = "item";
            if(j == 0){
                add.className += " active";
            }
            rotation.append(add);

            rotation = add;
            add = document.createElement("img");
            add.src = "../images/" + carousel[j].imagem;
            rotation.append(add);

            add = document.createElement("div");
            add.className = "carousel-caption";
            rotation.append(add);

            rotation = add;
            add = document.createElement("h3");
            add.innerHTML = carousel[j].nome;
            rotation.append(add);

            add = document.createElement("p");
            add.innerHTML = carousel[j].descricao;
            rotation.append(add);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => LoadAll(), false);