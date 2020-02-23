'use strict';

class productsList {
    constructor (container ='.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }

    /**
     * Массив товаров
     */
    _fetchProducts (){
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }
}

class ProductItem {
    constructor (product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.img = product.id;
        this.img = img;
    }

/**
 * Метод отрисовывает верстку товаров на странице
 */
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
                </div>`
        }
}

let list = new productsList();
list.render();


// Открытие/закрытие корзины при клике на кнопку.
const basketBtn = document.querySelector('.btn-card');
const tbl = document.querySelector('.basket-content');

basketBtn.addEventListener('click', function(){
    tbl.classList.toggle('visible');
});




// ДЗ 
// задание №2
//  Для подсчета суммарной стоимости товаров к орзине нам сначала понадобится
//  добавить счетчик товаров в корзине (каждого товара может быть по несколько единиц)
// И далее будет примерно такой метод
//     getTotalSum() {
//         let sum = 0;
//         for (let key in this.products) {    // products-добавленый в корзину товар
//             sum += this.products[key].price * this.products[key].count;
//         }
//         return sum;
//     }

// Задание №1
// Методы которые предположительно понадобятся:

// addProduct() - добавляет продукт в корзину

// addProductToObject(); - добавляет продукт в обьект с продуктами

// renderProductInBasket(); - отрисовывет продукт в корзине(увеличивает количество, если там такой уже есть)

// renderTotalSum(); - при помощи getTotalSum() считает общую стоимость товаров в корзине и отображает значение в поле "итого"

// Так же понадобится кнопка удаления товара из корзины, соответственно к ней нужен метод который будет удалять
// товар из корзины(уменьшать количество, если их несколько). 

// + на перспективу может пригодится кнопка оформить заказ.
// + понадобится Local Storage для сохрания данных в корзине (этот момент меня как раз интересует, писал вам по этому поводу =) )