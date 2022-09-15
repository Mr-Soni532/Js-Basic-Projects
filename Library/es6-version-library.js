//? This is the es-6 version of the collage library project
// class Display
class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}
class Display {
  //fetchData is all about getting the data from local stroge
  fetchData() {
    let list = localStorage.getItem("list");
    let listObj;
    if (list == null) {
      listObj = [];
    } else {
      listObj = JSON.parse(list);
    }
    let uiString = ``;
    listObj.forEach(function (element, index) {
      uiString += `
                      <tr class= "bookList">
                        <td id="name">${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td><button type="button" onclick="deleteBook(${index})"class="btn btn-danger">Delete</button></button></td>
                      </tr>
                    `;
    });

    let tableBody = document.getElementById("tablebody");
    if (listObj.length != 0) {
      tableBody.innerHTML = uiString;
    } else {
      tableBody.innerHTML = ` <div class="container">
                                <div class="row justify-content-center mx-5 my-5 px-4">
                                  <h5>No Books Available</h5>
                                </div>
                              </div>`;
    }
  }
  clear() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }
  validate(book) {
    if (book.name.length < 3 || book.author.length < 3) {
      return false;
    } else {
      return true;
    }
  }
  show(type, message) {
    let Alert = document.getElementById("message");
    Alert.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>!</strong>  ${message}.
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
    `;
    setTimeout(function () {
      Alert.innerHTML = " ";
    }, 4000);
  }
}
//! Class Display END
let display = new Display();
display.fetchData();

class storeData {
  store(book) {
    let list = localStorage.getItem("list");
    let listObj;
    if (list == null) {
      listObj = [];
    } else {
      listObj = JSON.parse(list);
    }
    let myObj = {
      name: book.name,
      author: book.author,
      type: book.type,
    };
    listObj.push(myObj);
    localStorage.setItem("list", JSON.stringify(listObj));
    display.fetchData();
  }
}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
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
  let StoreData = new storeData();

  if (display.validate(book)) {
    display.clear();
    display.fetchData();
    StoreData.store(book);
    display.show("success", "  Your Book is added successfully");
  } else {
    display.show("danger", "  Sorry you cannot add this book");
    display.fetchData();
  }
  e.preventDefault();
}

//delete book
function deleteBook(index) {
  let list = localStorage.getItem("list");
  if (list == null) {
    listObj = [];
  } else {
    listObj = JSON.parse(list);
  }
  listObj.splice(index, 1);
  localStorage.setItem("list", JSON.stringify(listObj));
  display.fetchData();
}
//search book
let search = document.getElementById("searchBar");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let list = document.getElementsByClassName('bookList')
  Array.from(list).forEach(function (element) {
    let listText = element.getElementsByTagName('td')[0].innerText;
    if (!listText.toLowerCase().includes(inputVal)) {
      element.style.display = "none";
    } else if(inputVal=='')
    {
      display.fetchData();
    } 
  });
});
