//creating a div and append it into html body
let div = document.createElement("div");
div.setAttribute("class", "elem");
div.setAttribute("id", "elem");
document.body.appendChild(div);
//create heading and append it into created div
// let heading = document.createElement('h1')
// heading.setAttribute('id', 'heading')
// heading.innerText = 'This is a default Heading'
// console.log(heading)
// div.appendChild(heading)

let val = localStorage.getItem("text");
let text;
text = document.createElement("h1");
text.setAttribute("class", "edit");
if (val == null) {
  text.textContent = "hello";
} else {
  text.textContent = val;
}
div.appendChild(text);
div.setAttribute("style", " width: 100em; margin: 34px; padding: 23px;");

div.addEventListener("click", function () {
  let noTextArea = document.getElementsByClassName("textArea").length;
  if (noTextArea == 0) {
    let html = elem.textContent;
    div.innerHTML = `<textarea style="background-color: transparent; border:none; box-shadow:none; font-size:36px; font-weight: bold" class=" textArea form-control" id="textarea" rows="3">${html}</textarea> `;
  }
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    let got = textarea.value;
    // let shaktiman = document.body;
    elem.querySelector('h1').textContent = got;
    localStorage.setItem("text", got);
  });
});
