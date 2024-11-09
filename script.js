let list = document.querySelector('.list');
let mylist = document.querySelector('.mylist');
let btn = document.querySelector('.btn');
let listvalue = document.querySelector('.listvalue');
let ul = document.createElement('ul');
listvalue.appendChild(ul);
let storedList = JSON.parse(localStorage.getItem('list')) || [];
// let storedList = storedList.reverse();

console.log(storedList);

const FillData = (response) => {
       ul.innerHTML = '';
       storedList = storedList.reverse();
       response.forEach((data) => {
              let li = document.createElement('li');
              ul.append(li);
              li.classList.add('notes');
              li.textContent = data;

              let span = document.createElement('span');
              span.classList.add('delete');
              span.textContent = 'X';
              li.appendChild(span);

              span.addEventListener('click', (e) => {
                     if (e.target.classList.contains('delete')) {
                            const itemIndex = Array.from(e.target.parentElement.parentNode.children).indexOf(e.target.parentElement);
                            console.log(itemIndex);

                            // localStorage.removeItem('list');
                            e.target.parentElement.remove();
                     }
              });
       })
}

btn.addEventListener('click', (e) => {
       e.preventDefault();
       if (list.value === '') {
              alert('error');
       }

       if (list.value !== '') {

              storedList.push(list.value);
              list.value = '';
              localStorage.setItem('list', JSON.stringify(storedList));

              FillData(storedList);
       };
});

window.addEventListener('DOMContentLoaded', () => {
       // localStorage.clear();
       FillData(storedList);
       console.log('the list content are =>', storedList);

})