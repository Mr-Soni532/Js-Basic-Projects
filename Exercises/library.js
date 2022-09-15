// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)
//-----------------------------------

function bSearch(arr, k, l, r) {
  if (l >= r) {
    return false;
  }
  let mid = Math.floor(l + (r - l) / 2);

  if (arr[mid] == k) {
    return true;
  } else if (k < arr[mid]) {
    return bSearch(arr, k, l, mid);
  } else {
    return bSearch(arr, k, mid + 1, r);
  }
}

class library { // Get the list of the book
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }
  //by bookStatus we can check whether the book is available or issued to someone 
  bookStatus(name) {
    if (bSearch(this.bookList, name, 0, this.bookList.length - 1)) {
      // binarySearch(array, search_item_name, starting index in array, ending index in array) this will search the perticular book from the given array between the given starting and ending points
      console.log("This Book is available");
    } else {
      "Sorry! This book is already issued by " + this.issuedBooks[bookName];
    }
  }

  getBookList() {
    this.bookList.forEach((element) => {
      if (searchable) console.log(element);
    });
  }
  issueBooks(bookName, user) {
    if (this.issuedBooks[bookName] == undefined) {
      this.issuedBooks[bookName] = user;
      //! searchable = 0;
    } else {
      console.log(
        "Sorry! This book is already issued by " + this.issuedBooks[bookName]
      );
    }
  }
  returnBook(bookName) {
    delete this.issuedBooks[bookName];
    //! searchable= 1;
  }
}
//! [{book1,author,type,...,searchable = 1},book2,book3]
