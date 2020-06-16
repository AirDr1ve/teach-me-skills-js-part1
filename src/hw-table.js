let table = [{
    name: 'Vitalik',
    surName: 'Petrov',
    age: 11,
    phones: [11111],
}, {
    name: 'Valeriy',
    age: 51,
    phones: [1111, 2222],
}, {
    name: 'Kate',
    surName: 'Ivanova',
    age: 20,
    phones: [111111, 22222, 333333],
}, {
    name: 'Lera',
    surName: 'Kuznetsova',
    age: 110,
    phones: [77777777],
}, {
    name: 'Alex',
    age: 5,
    phones: [555555, 666666],
}];

const tableItem = document.createElement('table');
tableItem.setAttribute('id', 'app');
tableItem.style.cssText = 'width: 1000px; border: 1px solid black; font-family: sans-serif;';

const thead = document.createElement('thead');
tableItem.append(thead);

const theadName = Object.keys(table[0]);

const trHead = document.createElement('tr')
thead.append(trHead);

theadName.forEach(columnName => {
    const th = document.createElement('th');
    columnName = columnName[0].toUpperCase() + columnName.slice(1);
    th.innerText = columnName;
    trHead.append(th);
    th.style.cssText = 'border: 1px solid black;';
});

const tbody = document.createElement('tbody')
tableItem.append(tbody)


const trCollection = [];

const tdCollection = [];

for (let i = 0; i < table.length; i++) {
    const tr = document.createElement('tr');
    tbody.append(tr);
    for (let j = 0; j < theadName.length; j++) {
        const td = document.createElement('td');

        if (table[i][theadName[j]]) {
            if (theadName[j] === 'phones') {
                if (table[i].phones.length === 1) {
                    const span = document.createElement('span')
                    td.append(span)
                    span.innerText = table[i].phones[0];
                    tr.append(td);
                    td.style.cssText = 'border: 1px solid black; color: yellow';
                } else {
                    const ul = document.createElement('ul');
                    td.append(ul);
                    for (let k = 0; k < table[i].phones.length; k++) {
                        const li = document.createElement('li');
                        li.innerText = table[i].phones[k];
                        ul.append(li);
                        tr.append(td);
                        td.style.cssText = 'border: 1px solid black; color: blue';
                    }
                }
                continue;
            }
            td.innerText = table[i][theadName[j]];
        };
        tr.append(td);
        td.style.cssText = 'border: 1px solid black;';

        if (theadName[j] === 'name') {
            td.style.textAlign = 'center';
        }
        tdCollection.push(td);
    }
    trCollection.push(tr);
};


const firstColumn = [];

// console.log(firstColumn.length);

for (let i = 0; i < trCollection.length; i++) {
    firstColumn.push(trCollection[i].firstElementChild);
};

// console.log(firstColumn.length);


for (let i = 0; i < firstColumn.length; i++) {
    if (!firstColumn[i].nextElementSibling.innerText) {
        firstColumn[i].setAttribute('colspan', '2');
        firstColumn[i].nextElementSibling.remove();
        firstColumn[i].style.cssText = 'border: 1px solid black; text-align: center; color: red';
    }
};


document.body.prepend(tableItem);







// document.querySelector('#app').innerHTML = table.map(n =>
//     `
//      <td>${n.name}</td>
//      <td>${n.surName}</td>
//      <td>${n.age}</td>
//      <td><ul><li>${n.phones[0]}</li><li>${n.phones[1]}</li><li>${n.phones[2]}</li></ul></td>

//     </tr>`).join('');





// const firstColumn = document.querySelectorAll('td:first-child');
// for (let i = 0; i < firstColumn.length; i++) {
//     if (firstColumn[i].nextElementSibling.innerText === 'undefined') {
//         firstColumn[i].setAttribute('colspan', '2');
//         firstColumn[i].style.cssText = 'text-align: center; color: red';
//         firstColumn[i].nextElementSibling.remove();
//     }
// };

// const ul = document.querySelectorAll('ul');

// const list = document.querySelectorAll('li');
// for (let i = 0; i < list.length; i++) {
//     if (list[i].innerText === 'undefined') {

//         list[i].remove();
//     }
//     console.log(typeof (list[i]));
// };

// const firstList = document.querySelectorAll('li:first-child');
// console.log(firstList.length);


// for (let i = 0; i < list.length; i++) {
//     if (list[i].innerText === '11111') {
//         list[i].style.cssText = 'color: orange';
//         ul[i].style.cssText = 'list-style-type: none; padding: 0px; margin: 0px'
//     };
// };