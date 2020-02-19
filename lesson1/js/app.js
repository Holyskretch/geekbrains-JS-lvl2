'use strict';

const products = [
    {id : 1, title: 'Notebook', price: 2000},
    {id : 2, title: 'Mouse', price: 20},
    {id : 3, title: 'Keyboard', price: 200},
    {id : 4, title: 'Gamepad', price: 50},
];

/**
 * Метод отрисовывает блоки с товарами на странице.
 * @param {string} title 
 * @param {string} price 
 */
const renderProduct = (title = 'Mouse', price = 20) => {
    return `<div class="product-item">
    <h3>${title}</h3>
    <p>${price}</p>
    <button class="buy-btn">Купить</button>
    </div>`
};

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price)).join('');
    document.querySelector('.products').innerHTML = productList;
};
renderPage(products);