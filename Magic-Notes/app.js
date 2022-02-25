//to show the pre-saved values in localStorage
showNotes();
//if user add a note then add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  //addTxt is <textarea> of note discription
  let addTxt = document.getElementById("addTxt");
  //addTitle is <textarea> of note title
  let addTitle = document.getElementById("addTitle");
  //notes is the class of div in which we set the textarea
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  //push is the function of array by which we add any value at the end of array
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  //!after pushing the text in notesObj, we update the localStorage
  //using JSON.stringify because in localStorage only strings are added
  localStorage.setItem("notes", JSON.stringify(notesObj));
  //afer the value is saved in localStorage then the text area will be set to empty for further use
  addTxt.value = "";
  addTitle.value = "";
  showNotes();
});

//to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  //using forEach loop to add new card every time user click "Add Note".. 
  //And, all the values stored in localStorage is behaving like the elements of an array
  notesObj.forEach(function (element, index) {
    html += `
    <div class=" noteCard mx-2 my-2 card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <!-- To print the Entered Text by user we use element -->
        <p class="card-text">${element.text}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delet</button>
    </div>
</div>`;
// for(index=0; index<=n; index++)
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "Nothing to show!";
  }
}

// function to delete a note
function deleteNote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1)
  //Update localStorge after deleting any note
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
//Search
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none"
        }
    })
})