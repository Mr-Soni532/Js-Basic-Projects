let cNew = document.createElement('h1')
cNew.className = 'heading'

let body = document.body;
body.appendChild(cNew)

let change = document.querySelector('.heading')
// change.innerText = 'World'


// console.log(body)
let link = document.createElement('a')
link.innerText = "This is Harry's website"
link.setAttribute('href', 'https://www.codewithharry.com/videos/javascript-tutorials-in-hindi-16')
// console.log(link)

let include = document.querySelector('.heading')
console.log(include)

include.appendChild(link)



