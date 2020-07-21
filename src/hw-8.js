const loadList = document.getElementById('loadList');
const removedItems = [];


loadList.addEventListener('click', async function foo() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const list = await responce.json();
  const ul = document.createElement('ul');

  list.map(id => {
    const item = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = id.title;
    item.addEventListener('click', function del() {
      localStorage.removedItems = JSON.stringify(removedItems)
      removedItems.push(id.id);
      item.remove()
    });
    ul.append(item)
    item.append(span)
  })

  document.body.append(ul)
  loadList.remove()

})