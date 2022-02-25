//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//---------------//!Add methods to display prototype

Display.prototype.add = function (book) {
  console.log("adding to ui");
  let tablebody = document.getElementById("tablebody");
  let uiString = ` <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`;
  tablebody.innerHTML += uiString;
};
//Implement the clear function
Display.prototype.clear = function () {
  libraryForm.reset();
};

//Implement the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, message) {
  let Alert = document.getElementById("message");
  Alert.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>!</strong>  ${message}.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
  `;
  //setting the time of display Alert 
  setTimeout(function() {
    Alert.innerHTML = " ";
  }, 2000);
};

//---------------//!Add submmit event listener to libraryForm

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("submited library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  // for checkbox first we call all id's
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "  Your Book is added successfully");
  } else {
    display.show("danger", "  Sorry you cannot add this book");
  }
  e.preventDefault();
}
