
// второй способ
// let node = document.getElementById('root')

// node.onclick = () => alert('Hello from JS!')
// node.setAttribute('onclick', alert('Hello')); // =>>> так нельзя!!!!!!!!!!!!



/// третий способ обработчика события

// let handlee = () => alert('Hello-New');

// node.addEventListener('click', handlee)
// node.addEventListener('click', () => node.innerText = "Helloooooooo");
// node.addEventListener('DOMContentLoaded', () => ())
// node.addEventListener('transitioned', () => ())

// // node.removeEventListener('click', handlee);


/// третий способ обработчика события

// let handlee = (event) => {
//     console.log(event);}

// let handlee = (event) => {
//     console.log(event.target);}

// node.addEventListener('click', handlee)

// node.removeEventListener('click', handlee);


// let id = document.getElementById('root2')
// id.addEventListener('click', () => document.getElementById('root3').style.display = 'none');


// let id = document.getElementById('root2')
// id.addEventListener(
//     'click', 
//     (event) => {
//         let state = event.target.getAttribute('data-state')
//         if (state === 'true') {
//             state = 'false';
//             document.getElementById('root3').style.display = '';
           
//         } else {
//             state = 'true';
//             document.getElementById('root3').style.display = 'none';
            
//         }
        
//         event.target.setAttribute('data-state', state)
//     }
// );

// let node = document.getElementById('main')
// node.addEventListener (
//     'click',
//     (event) => {
//         let item = document.getElementById('root4')
//         item.style.top = `${event.clientY-50}px`;
//         item.style.left = `${event.clientX-50}px`;
//         console.log(event.clientX, event.clientY)
//     }
// );






// let node = document.getElementById('main')
// let node1 = document.getElementById('main1')

// node.addEventListener (
//     'click',
//     (event) => {
//         // let item = document.getElementById('root4')

//         console.log(event.target)
//         alert('main')
//     }
// );

// node1.addEventListener (
//     'click',
//     (event) => {
//         // let item = document.getElementById('root4')

//         console.log(event.target)
//         alert('main1')
//     }
// );


let node = document.getElementById('main')

node.addEventListener (
    'click',
    (event) => {
        if (event.target.id !== 'main'){
     
        let ch = event.target.parentNode.childNodes
        for (let i = 0; i < ch.length; i++) {
            if (ch[i].nodeType === 1) {
                ch[i].style.background = ''
            }
        }
        event.target.style.background = 'red';
        }
    }
);
