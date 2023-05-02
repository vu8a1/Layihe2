const btn1 = document.querySelector('#btn1');
const ul = document.querySelector('ul');
const input = document.querySelector('.input');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

function addListItem(text) {
    const li = document.createElement('li');
    li.classList.add('li');
    const input = document.createElement('input');
    input.classList.add('input');
    input.value = text;
    const del = document.createElement('button');
    del.classList.add('btn2');
    del.addEventListener('click', e => {
        e.target.parentElement.remove();
    });

    li.append(input, del);
    ul.append(li);
}

btn3.addEventListener('click', () => {
    addListItem('');
});

let sorted = false;

btn1.addEventListener('click', e => {
    const arr = new Array();
    const items = document.querySelectorAll('ul li');
    items.forEach(li => {
        arr.push(li.firstElementChild.value);
    });
    arr.sort();
    if(sorted) {
        arr.reverse();
        e.target.classList.remove('high');
        e.target.classList.add('low');
    } else {
        e.target.classList.remove('low');
        e.target.classList.add('high');
    }
    sorted = !sorted;
    ul.innerHTML = '';
    arr.forEach(item => {
        addListItem(item);
    });
});


