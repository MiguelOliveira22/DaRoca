// Open Cart
function openCart(cart, backdrop) {
  cart.classList.add('open')
  backdrop.style.display = 'block'
  backdrop.classList.add('show')
}

// Close Cart
function closeCart(cart, backdrop) {
  cart.classList.remove('open')
  backdrop.classList.remove('show')
  setTimeout(() => {
    backdrop.style.display = 'none'
  }, 500)
}

function Search(){
    document.querySelector("#main-query").submit();
}

document.addEventListener("DOMContentLoaded", () => {
    let values = document.cookie.split("; ");
    let isUser = false;
    for(let i = 0; i < values.length; i ++){
        if(/username*/gm.test(values[i])){
            isUser = true;
        }
    }
    if(isUser){
        let b = document.createElement("button");
        b.id = 'open_cart_btn';
        b.innerHTML = '<img src="../images/carrinho-removebg-preview.png" alt="" style="width: 30px;"/>';
        document.querySelector("#selector").replaceChildren(b);

        let ab = document.createElement("div");
        ab.className = "backdrop";
        document.querySelector("#selector").append(ab);

        let c = document.createElement("div");
        c.id = "sidecart";
        c.className = "sidecart";
        c.innerHTML = '<div class="cart_content">\n' + '<div class="cart_header">\n' +
        '<img src="' +  + '" alt="" style="width: 30px;"/>\n' +
        '<div class="header_title">\n' + '<h2>Seu Carrrinho</h2>\n' +
        '</div>\n' + '<span id="close_btn" class="close_btn">&times;</span>\n';
        document.querySelector("#selector").append(c);

        let size = window.localStorage.length;
        let d = document.createElement("div");
        d.className = "cart_items"
        b.append(d)

        let cartc = document.querySelector(".cart_content")
        for(let i = 0; i < size; i ++){
            let content = window.localStorage.getItem(window.localStorage.key(i));
            let e = document.createElement("div");
            e.className = "cart_item";
            e.innerHTML = '<div class="remove_items">\n' + '<span>&times;</span>\n' +
            '</div>\n' + '<div class="item_img">\n' +
            '<img src="../../../images/' + "" + '">\n' +
            '</div>\n' + '<div class="item_details">' +
            '<p>Banana</p>\n' + '<strong>R$2,99</strong>\n' +
            '<div class="qty">\n' + '<span>-</span>\n' +
            '<strong>1</strong>\n' + '<span>+</span>\n';
            cartc.append(e)
        }

        let ad = document.createElement("div");
        ad.className = "cart_action";
        ad.innerHTML = '<div class="subtotal">\n' + '<p>SUBTOTAL:</p>\n' +
        '<p>R$<span id="subtotal_price">3896</span></p></div>' +
        '<button>Olhar o Carrinho</button>\n' +
        '<button>Checkout</button>\n' + '</div>\n';
        c.append(ad);


        addTriggers()
    }
}, false);

function addTriggers(){
    const openBtn = document.getElementById('open_cart_btn');
    const cart = document.getElementById('sidecart');
    const closeBtn = document.getElementById('close_btn');
    const backdrop = document.querySelector('.backdrop');

    openBtn.addEventListener('click', () => openCart(cart, backdrop));
    closeBtn.addEventListener('click', () => closeCart(cart, backdrop));
}