// ? Navbar Time 
setInterval(() => {
    time();
}, 1000);
let navTime = document.getElementById("time");
let h, m, s, stat = "PM";
function time() {
  const today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  m = check(m);
  s = check(s);
  h = (h > 12) ? h - 12 : h;
  h = (h==0)? 12 : h;
  if (h == 12) {
    stat = stat === "PM" ? "AM" : "PM";
  }
  navTime.innerHTML = h + ":" + m + ":" + s + " " + stat;
}
function check(i) {
  return i = (i < 10)? "0" + i : i;
}

// ! Utility Functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}
//when user click on GET type then disable both content type and hide jsonBox
let typeOfGet = document.getElementById('get');
typeOfGet.addEventListener('click', () =>{
  document.getElementById('jsonRadio').setAttribute("disabled","")
  document.getElementById('customRadio').setAttribute("disabled","")
  document.getElementById("jsonBox").style.display = "none";
})
//when user click on POST type then Enable both content type and show jsonBox
let typeOfPost = document.getElementById('post');
typeOfPost.addEventListener('click', () =>{
  document.getElementById('jsonRadio').removeAttribute("disabled","")
  document.getElementById('customRadio').removeAttribute("disabled","")
  document.getElementById("jsonBox").style.display = "block";
})
// Hide the parametersBox initially bcoz json is default selected
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = "none";
//! if the user clicks on type custom parameters, hide json box
let customRadio = document.getElementById("customRadio");
customRadio.addEventListener("click", () => {
  document.getElementById("jsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});
//! if the user clicks on type json, hide parametersBox
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("jsonBox").style.display = "block";
  document.getElementById("parametersBox").style.display = "none";
});
//parameter counter
let paramCount = 1;
// if user click '+' button then add more parameters
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addParams = document.getElementById("addparam");

  let string = ` <div id="parametersBox" class="form-row my-2">
                <form class="row g-3">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${
                      paramCount + 1
                    }</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Enter Key" id="paramKey${
                          paramCount + 1
                        }">
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="paramValue${
                          paramCount + 1
                        }" placeholder="Enter Value">
                    </div>
                    
                        <button class="col btn btn-danger deleteParam" style="width: 63px;" id="addBtn"> Delete </button>
                    
                </form>
         </div>`;
  //convert the element string to DOM node
  let paramElement = getElementFromString(string);
  addParams.appendChild(paramElement);
  //   Add a event listner to remove the parametersBox on clicking '-'
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (let item of deleteParam) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      //user confirmation to delete the parameters
      // if (confirm("Are you sure to execute this action?"))
        e.target.parentElement.remove();
      //e.target is the button on which user clicks
    });
  }
  paramCount += 1;
});
//! Sumition.............

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  //waiting Message for user
  // let ResponseJsonText = document.getElementById("ResponseJsonText");
  // ResponseJsonText.value = "Fetching response data...";
  document.getElementById("prismResponse").innerHTML = "Fetching response data...";
  Prism.highlightAll();

  // fetch all the values user has entered
  let url = document.getElementById("urlField").value;
  // now getting the request type which is checked by its name
  let request = document.querySelector(
    "input[name='requestType']:checked"
  ).value;
  let contentType = document.querySelector(
    "input[name='contentType']:checked"
  ).value;
  console.log(contentType);
  //! if user has selected custom parameters then collect all the parameter in an object
  let data = {};
  if (contentType == "Parameters") {
    for (let i = 0; i < paramCount + 1; i++) {
      console.log(document.getElementById("paramKey" + (i + 1)));
      if (document.getElementById("paramKey" + (i + 1)) != undefined) {
        let key = document.getElementById("paramKey" + (i + 1)).value;
        let value = document.getElementById("paramValue" + (i + 1)).value;
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
  } else {
    data = document.getElementById("jsonText").value;
  }

  if (request == "get") {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        // document.getElementById("ResponseJsonText").value = text;
        document.getElementById("prismResponse").innerHTML = text;
        Prism.highlightAll();
      });
  } else{
    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then((response) => response.text())
      .then((text) => {
        // document.getElementById("ResponseJsonText").value = text;
        document.getElementById("prismResponse").innerHTML = text;
        Prism.highlightAll();
      });
  }
});
