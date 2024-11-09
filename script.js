let list = document.querySelector('.list');
let mylist = document.querySelector('.mylist');
let btn = document.querySelector('.btn');
let listvalue = document.querySelector('.listvalue');
const RemoveAllBtn = document.getElementById('RemoveAllList');
let ul = document.createElement('ul');
listvalue.appendChild(ul);
let storedList = JSON.parse(localStorage.getItem('list')) || [];
// let storedList = storedList.reverse();

console.log(storedList);

const RemoveAllList = () => {
       // if (!listvalue.hasChildNodes) {
       //        RemoveAllBtn.style.display = 'none';
       // }
       // else {
       RemoveAllBtn.addEventListener('click', (e) => {
              if (e.target) {
                     listvalue.innerHTML = '';
                     localStorage.clear();
                     e.textContent = true;
              }
       })
       // }
}

const AddList = (response) => {
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
                            // const itemIndex = Array.from(e.target.parentElement.parentNode.children).indexOf(e.target.parentElement);
                            const itemIndex = e.target.parentElement.remove();
                            // console.log('removed');


                            // Remove the item from storedList based on the index
                            storedList.splice(itemIndex, 1);
                            // storedList.splice(itemIndex, 1, list.value);

                            // Update localStorage
                            localStorage.setItem('list', JSON.stringify(storedList));
                            console.log('the list content are =>', storedList);

                            // Refresh the list display
                            AddList(storedList);
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
              AddList(storedList);
       };
});

window.addEventListener('DOMContentLoaded', () => {
       // localStorage.clear();
       AddList(storedList);
       // console.log('the list content are =>', storedList);
})
RemoveAllList()