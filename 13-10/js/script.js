// console.log(document.querySelector('#text').nodeType);
// console.log(document.querySelector('#text').nextSibling.nodeType);
// console.log(document.querySelector('#text').tagName);
// console.log(document.querySelector('#text').nodeName);
// console.log(document.querySelector('#root').innerHTML);

// let name = 'HEllo andrey'
// let name1 = 'HEllo sergey'
// console.log(document.querySelector('#root').innerHTML += `<div>${name}</div>`);
// console.log(document.querySelector('#root').outerHTML = `<div>${name1}</div>`);

// console.log(document.querySelector('#text').innerHTML);

// console.log(document.body.textContent);

// console.log(document.body.innerText);

// document.querySelector('#text3').innerText = 'hellooooo';

// document.querySelector('#text').hidden = true/false;

// document.querySelector('#image').innerHTML = `<img src="form.png" width="300px">`

// console.log(document.querySelector('#root').id);
// console.log(document.querySelector('#root').style);
// console.log(document.querySelector('#root').car);
// console.log(document.querySelector('#root').getAttribute('date-state'));
// console.log(document.querySelector('#root').setAttribute('value', 'checked'));
// console.log(document.querySelector('#root').hasAttribute('value'));
// console.log(document.querySelector('#root').removeAttribute('value'));

// let root = {
//     'id': 'root',
//     'style': 'width:120px ;height:700px ;background:red;',
//     'data-state': 'true',
//     'checked':'checked',
// };


// console.log(document.querySelector('div').getAttribute('date-widget-name'))

// let div = document.createElement('div')
// div.id = 'child2'
// console.log(typeof div)


// document.querySelector('#root'.appendChild)  /// устаревшее

// // document.querySelector('#root').append(div)   //// методы вставки в html
// // document.querySelector('#root').prepend(div)
// // document.querySelector('#root').before(div)
// // document.querySelector('#root').after(div)
// // document.querySelector('#root').replaceWith(div)

// // document.querySelector('#root').remove()

// // document.querySelector('#root').replaceWith(`div`)


// insertAdjacentElement(where,html)
// where ---->
// beforebegin
// afterbegin
// beforeend
// afterend



// document.querySelector('#root').insertAdjacentElement('beforebegin',div)


let div = document.createElement('div')
div.id = 'parent'
div.style = 'border:3px solid green; margin:10px;';

let div2 = document.createElement('div')
div2.id = 'firstChild'
div2.className = 'child'
div2.innerText = "First Child TExt"

let div3 = document.createElement('div')
div3.id = 'lastChild'
div3.className = 'child'

let div4 = document.createElement('div')
div4.className = 'child'

let div5 = document.createElement('div')
div5.className = 'child'
div5.style = 'width:30px; height:30px; border-radius:30px';


document.body.append(div)
document.querySelector('#parent').append(div2, div3)
document.querySelector('#lastChild').append(div4, div5)
