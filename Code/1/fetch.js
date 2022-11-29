export function fetchPost(title,price) {
  return fetch(`https://dummyjson.com/products/add`, {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    price: price,
  })});
}

export function fetchGet() {
  return fetch(`https://dummyjson.com/products`);
}

export function fetchPut(id,title,price) {
  return fetch(`https://dummyjson.com/products/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    title: title,
    price: price,
  })});
}

export function fetchDelete(id) {
  return fetch(`https://dummyjson.com/products/${id}`, {
  method: 'DELETE',
});
}