// let node = document.getElementById('root')

/// КНОПКИ МЫШИ

// node.addEventListener('click', () => alert('MSG'));
// node.addEventListener('contextmenu', () => alert('MSG'));
// node.addEventListener('dblclick', () => alert('MSG'));
// node.addEventListener('mouseout', () => alert('MSG'));


// node.addEventListener('mouseover', () => console.log('event'));
// node.addEventListener('mouseout', () => console.log('event1'));


// node.addEventListener('mousedown', () => console.log('event'));
// node.addEventListener('mouseup', () => console.log('event1'));


// node.addEventListener('mousedown', (e) => console.log(e.button));

// node.addEventListener('mousedown', (e) => console.log(e.button, e.shiftKey, e.altKey, e.ctrlKey));






//// КООРДИНАТЫ МЫШИ





// node.addEventListener('click', (e) => console.log(e.clientX, e.clientY, e.pageX, e.pageY));

// node.addEventListener('mousemove', (e) => console.log(e.clientX, e.clientY, e.pageX, e.pageY));

// node.addEventListener('mouseenter', () => console.log('event'));
// node.addEventListener('mouseleave', () => console.log('event1'));



// let node = document.getElementById('root')

// let check = false;

// node.addEventListener('mouseenter', () => {
//     check = true
//     setTimeout(() => {
//         if(check){
//             node.style.backgroundColor = 'red'
//         }
//     },1000)
// });

// node.addEventListener('mouseleave', () => {check = false});


// drag & drop
// 1.mousedown
// 2.mousemove
// 3.mouseup




// node.addEventListener('mousedown', (e) => {

//     let a = e.clientX - node.getBoundingClientRect().left
//     let b = e.clientY - node.getBoundingClientRect().top;

//     if (e.ctrlKey) {
//         function mouseMove(e) {
//             node.style.top = e.clientY - b + 'px'
//             node.style.left = e.pageX - a + 'px';
//         }

//         document.addEventListener('mousemove', mouseMove)
//         document.addEventListener('mouseup', () => {
//             document.removeEventListener('mousemove', mouseMove)
//         });
//     }
// });






// let node = document.getElementById('root')
// let node2 = document.getElementById('root2')
// let node3 = document.getElementById('root3')

// node.addEventListener('mousedown', (e) => {

//     let a = e.clientX - node.getBoundingClientRect().left

//         function mouseMove(e) {
//             node.style.left = e.pageX - a + 'px';
//         }

//         document.addEventListener('mousemove', mouseMove)
//         document.addEventListener('mouseup', () => {
//             document.removeEventListener('mousemove', mouseMove)
//         });
//    let b = ((node.getBoundingClientRect().left/node2.getBoundingClientRect().right)*100 +'%');
//    node3.innerText = b;
// });









/// КЛАВИАТУРА


// let pwd = 'asd'
// let match = ''
// document.addEventListener('keydown', (e) => {

//     match+=e.key;

//     if (match.toString() === pwd) {
//         alert('match')
//     }
//     if (match.length == pwd.length){
//         match = ''
//     }

//     console.log(match)

//     })






//// СКРОЛЛ


// document.addEventListener('scroll', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('change', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('input', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('cut', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('copy', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('paste', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('focus', (e) => console.log(e))


// let node = document.getElementById('root')
// node.addEventListener('blur', (e) => console.log(e))















