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
        console.log(values[i])
        console.log(/username*/gm.test(values[i]))
    }
    if(isUser){
        console.log("a");
        let b = document.createElement("button");
        b.id = 'open_cart_btn';
        b.innerHTML = '<img src="images/carrinho-removebg-preview.png" alt="" style="width: 30px;"/>';
        document.querySelector("#selector").replaceChildren(b);

        let c = document.createElement("div");
        c.id = "sidecart";
        c.className = "sidecart";

        /*
            <div class="cart_content">
                <!-- Cart Header-->
                <div class="cart_header">
                    <img src="images/carrinho-removebg-preview.png" alt="" style="width: 30px;"/>
                    <div class="header_title">
                        <h2>Seu Carrrinho</h2>
                        <span id="items_num">4</span>
                    </div>
                    <span id="close_btn" class="close_btn">&times;</span>
                </div>
                <!-- Cart Items-->
                <div class="cart_items">
                <!-- Item-->
                <div class="cart_item">
                <div class="remove_items">
                    <span>&times;</span>
                </div>
                <div class="item_img">
                    <img src="images/banana.png">
                    </div>
                    <div class="item_details">
                            <p>Banana</p>
                            <strong>R$2,99</strong>
                            <div class="qty">
                            <span>-</span>
                            <strong>1</strong>
                            <span>+</span>
                    </div>   
                </div>
            </div>

<!-- Cart Actions-->
<div class="cart_actions">
<div class="subtotal">
<p>SUBTOTAL:</p>
<p>$<span id="subtotal_price">3896</span></p>
</div>
<button>Olhar o Carrinho</button>
<button>Checkout</button>
</div>
</div>
</div> */
    }
}, false);