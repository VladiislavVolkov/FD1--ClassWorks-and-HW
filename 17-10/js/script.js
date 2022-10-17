// let el = document.getElementById('root')
// // el.style.backgroundColor = "blue"
// console.log(el.style.backgroundColor)
// console.log(el.style.width)
// console.log(el.style.height)
// console.log(el.classList)
// el.classList.add()
// el.classList.remove()

// el.classList.add('circle')
// setTimeout(()=>{
//     el.classList.remove('circle')
// },2000)

// el.classList.toggle('class')

// el.classList.contains('class')



// el.style.backgroundColor = "blue"

// el.classList.add('circle')
// setTimeout(()=>{
//     el.style.backgroundColor = ''
// },2000)


// let styles = getComputedStyle(el)
// el.style.width = styles.width.substring(0,styles.width.indexOf('px'))*2+'px';
// console.log(styles.width)

let el = document.getElementById('root')
let el2 = document.getElementById('root2')
let styles = getComputedStyle(el)
// let styles2 = getComputedStyle(el2)
el2.style.borderRadius = styles.borderRadius
el2.style.width = styles.width
el2.style.height = styles.height
el2.style.backgroundColor = 'red'



// setTimeout(()=>{
//     el.style.display='none'
//     console.log(el.offsetHeight);
//     console.log(el.offsetWidth);
// },2000)

// console.log(el.clientLeft)
// console.log(el.clientTop)

// console.log(el.clientWidth)
// console.log(el.clientHeight)
// console.log(el.offsetWidth)
// console.log(el.offsetHeight)

// console.log(el.scrollWidth)
// console.log(el.scrollHeight)





let widthSum = styles.border.substring(0,styles.border.indexOf('px'))*2;
let widthScroll = el.offsetWidth - el.clientWidth - widthSum
// console.log(widthScroll)





// console.log(el.scrollLeft)
// console.log(el.scrollTop)

// setTimeout(()=>{
//     el.style.overflow = 'hidden'
// },1200)

// console.log(window.pageYOffset)
// console.log(window.pageXOffset)

// scrollTo
// scrollBy
// scrollIntoView
// el.scrollBy(0,100)
// el.scrollTo(0,100)


// console.log(el.getBoundingClientRect())
// console.log(el2.getBoundingClientRect())

// console.log(document.elementFromPoint())


let a = el.getBoundingClientRect()
console.log('координаты:' + 'x-' + a.x, 'y-' + a.y, 'r-' + a.right, 'b-' + a.bottom)







