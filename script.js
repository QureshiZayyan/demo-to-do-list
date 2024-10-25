let list = document.querySelector('.list');
let mylist = document.querySelector('.mylist');
let btn = document.querySelector('.btn');
let listvalue = document.querySelector('.listvalue');
let ul = document.createElement('ul');
listvalue.appendChild(ul);

btn.addEventListener('click', (e) => {
       e.preventDefault();

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

              let storedList = JSON.parse(localStorage.getItem('list')) || []; // Check if there's already a list in storage, otherwise start with an empty list
              storedList.push(list.value); // Add the new item to the stored list
              localStorage.setItem('list', JSON.stringify(storedList));
              list.value = '';

              span.addEventListener('click', (e) => {
                     if (e.target.classList.contains('delete')) {
                            e.target.parentElement.remove();
                     }
              });


       };

});