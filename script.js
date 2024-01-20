let list = document.querySelector('.list');
let mylist = document.querySelector('.mylist');
let btn = document.querySelector('.btn');
let listvalue = document.querySelector('.listvalue');
let ul = document.createElement('ul');
// let span = document.createElement('span');

listvalue.appendChild(ul);

btn.addEventListener('click', () => {

       if (list.value === '') {
              alert('error');
       }

       if (list.value !== '') {
              let li = document.createElement('li');
              ul.append(li);
              li.classList.add('notes');
              li.innerHTML = list.value;
              let span = document.createElement('span');
              span.classList.add('delete');
              span.innerHTML = 'X';
              li.appendChild(span);
              list.value = '';

              span.addEventListener('click', (e) => {
                     if (e.target.classList.contains('delete')) {
                            e.target.parentElement.remove();
                     }
              })
       };
})

list.addEventListener('keyup', (e) => {

       if (list.value === '') {
              alert('this cant be add to the list beacsue it is empty')
       }

       if (e.key === 'Enter' && list.value !== '') {

              let li = document.createElement('li');
              ul.append(li);
              li.innerHTML = list.value;
              let span = document.createElement('span');
              span.innerHTML = 'X';
              span.classList.add('delete');
              li.appendChild(span);
              list.value = '';

              span.addEventListener('click', (e) => {
                     if (e.target.classList.contains('delete')) {
                            e.target.parentElement.remove();
                     }
              })
       }
})
