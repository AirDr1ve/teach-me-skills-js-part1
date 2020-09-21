const loadList = document.getElementById('loadList');
const removedItems = [];
const div = document.createElement('div')
const ul = document.createElement('ul');



async function creatList() {
  try {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const list = await responce.json();
    getList(list, loadList, div)

  } catch (e) {
    console.log(132);
  }

}

creatList()


function getList(list, button, wrapper) {
  list.map(id => {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = id.title;
    ul.append(item)
    item.append(span)

  })
  button.addEventListener('click', () => {
    document.body.append(div)
    loadList.remove()
  })
 
  ul.addEventListener('click', function del({target, currentTarget}) {
    localStorage.removedItems = JSON.stringify(removedItems);
    removedItems.push(target.parentNode.id);
    if (target.tagName === 'SPAN') {
    target.parentNode.remove()
    }
    console.log(target.parentNode);
  });
  div.append(ul);
}


// function delItem({target, currentTarget}) {
//   if (target.tagName === 'LI') {
//     target.remove();
//     localStorage.setItem(target.id, target);
//     if (!currentTarget.childNodes.length) {
//       const emptyList = document.createElement('span');
//       emptyList.innerText = 'Список пуст';
//       wrapper.append(emptyList);
//     }
//   }
// }

