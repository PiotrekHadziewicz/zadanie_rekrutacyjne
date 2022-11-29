import {
    fetchPost,
    fetchGet,
    fetchPut,
    fetchDelete } from './fetch.js';

const postBtn = document.querySelector('.post');
const getBtn = document.querySelector('.get');
const putBtn = document.querySelector('.put');
const deleteBtn = document.querySelector('.delete');

const idInput = document.querySelector('.id');
const titleInput = document.querySelector('.title');
const priceInput = document.querySelector('.price');
const result = document.querySelector('#result');

let idValue, titleValue, priceValue;

idInput.addEventListener('input', (event) => { 
    idValue = event.currentTarget.value;
});
titleInput.addEventListener('input', (event) => { 
    titleValue = event.currentTarget.value;
});
priceInput.addEventListener('input', (event) => { 
    priceValue = event.currentTarget.value;
});

getBtn.onclick = () => {
    fetchGet()
        .then((res) => {
            return res.json();
        }).then((products) => {
            result.innerHTML = '';
            for (const product of products.products) {
                const id = document.createElement("p");
                const title = document.createElement("p");
                const price = document.createElement("p");
                id.textContent = 'id: '+ product.id;
                title.textContent = 'title: '+ product.title;
                price.textContent = 'price: '+ product.price;
                result.append(id,title,price);
            }
        })
};

postBtn.onclick = () => { 
    fetchPost(titleValue, priceValue)
        .then((res) => {
            return res.json();
        }).then(() => {
            alert('Added successfully');
        });
};

putBtn.onclick = () => { 
    fetchPut(idValue, titleValue, priceValue)
        .then((res) => {
            return res.json();
        }).then(() => {
            alert('Updated successfully');
        });
};

deleteBtn.onclick = () => { 
    fetchDelete(idValue)
        .then((res) => {
            return res.json();
        }).then(() => {
            alert('Deleted successfully');
        });
};