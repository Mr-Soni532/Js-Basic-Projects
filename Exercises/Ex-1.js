let save = document.links;
let word = 'harry'; 
Array.from(save).forEach(function(el){
    if(el.href.includes(word))
        console.log(el.href);
});

// for (let el = 0; el < array.length; el++) {
//     const element = array[el];
//     if(element.href.includes(word))
//     console.log(element.href)
// }