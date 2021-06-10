const item = document.querySelector('.item');

const articles = JSON.parse(localStorage.getItem('article-array'));

const remove = (id) => {
    let index = articles.findIndex((el) => {
        return el.id === id;
    });
    articles.splice(index, 1);
    localStorage.setItem('article-array', JSON.stringify(articles));
}

articles.forEach((el) => {
    item.style.textAlign = 'center';
    const articleName = document.createElement('h1');
    articleName.innerText = `Name: ${ el.articleName }`;
    const articleQty = document.createElement('h2');
    articleQty.innerText = `Qty: ${ el.qty }`;
    const articlePrice = document.createElement('h3');
    articlePrice.innerText = `Price: ${ el.price }`;
    const articlePhoto = document.createElement('img');
    articlePhoto.setAttribute('src', el.photo);
    articlePhoto.style.width = `400px`;
    articlePhoto.style.height = `400px`;
    const articleButton = document.createElement('button');
    articleButton.innerText = `delete`;
    articleButton.onclick = () => {
        remove(el);
    };
    item.appendChild(articleName);
    item.appendChild(articleQty);
    item.appendChild(articlePrice);
    item.appendChild(articlePhoto);
    item.appendChild(articleButton);
    document.body.appendChild(item);
})