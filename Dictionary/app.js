let list = document.getElementById("list");
let input = document.getElementById("input");
let button = document.getElementById("searchBtn");
let heading = document.getElementById("heading");

button.addEventListener("click", fetchData);
function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.open("get", "dictionary.json", true);
  xhr.onprogress = function () {
    html = `<h1> LOADING... </h1>`;
    heading.innerHTML = html;
  };

// const myTimeout = setTimeout(xhr.onload, 2000);


  xhr.onload = function () {
    // setTimeout(() => {
      
      heading.innerHTML = ``;
    // }, 2000);
    let obj = JSON.parse(this.responseText);
    html = ``;
    if (input.value == obj.word) {
      obj.results.forEach((element) => {
        html += `<li> ${element.definition}</li>`;
        // console.log(element.definition);
      });
      list.innerHTML = html;
      // console.log(obj.results);
    } else {
      html = ` <h3> NO data found in json file</h3>`;
      list.innerHTML = html;
    }
  };
  xhr.send();
}
