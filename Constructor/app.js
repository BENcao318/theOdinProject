let myLibrary = [
  // { 
  //   id: 0,
  //   title: "The Hobbits",
  //   Author: "J.R.R Tokien",
  //   numberOfPages: "295",
  //   haveReadTheBook: true,
  // },
  // { 
  //   id: 1,
  //   title: "The Hobbits",
  //   Author: "J.R.R Tokien",
  //   numberOfPages: "295",
  //   haveReadTheBook: true,
  // },
];
const selector = '.card-haveReadTheBook';

document.addEventListener('click', (e) => {
  let el = e.target;

  if(el.matches(selector)){
    myLibrary[el.parentElement.parentElement.id].haveReadTheBook = el.checked;
    console.log(myLibrary);
  }

});


const addNewBookBtn = document.querySelector('.btn-newBook').addEventListener('click', () => {
  if(!inputCard.classList.contains('active')){
    inputCard.classList.add('active');
  }
});

const closeInputBtn = document.querySelector('.btn-closeInput').addEventListener('click', () => {
  if(inputCard.classList.contains('active')){
    inputCard.classList.remove('active');
    clearInputField();
  }
})

const inputCard = document.querySelector('.inputCard');
const addBookBtn = document.querySelector('.btn-addBook');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookNumberOfPages = document.getElementById('book-numberofpages');
const inputHaveReadTheBook = document.getElementById('input-haveReadTheBook');




const booklist = document.querySelector('.booklist');
const card = document.querySelectorAll('.card');

addBookBtn.addEventListener('click', () => { 
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookNumberOfPages.value, inputHaveReadTheBook.checked);
  if(inputCard.classList.contains('active')){
    inputCard.classList.remove('active');
  }

  clearInputField();
})




function Book(id, title, author, numberOfPages, haveReadTheBook) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveReadTheBook = haveReadTheBook;
}

function createTheCard(record, id) {

  
  // Create the card context
  let newCard = document.createElement('div');
  newCard.className = 'card';
  newCard.id = id;

  let closeBtn = document.createElement('button');
  closeBtn.classList.add('btn', 'btn-removeBook');

  let ul = document.createElement('ul');
  ul.className = 'bookInfo';

  let li1 = document.createElement('li');
  li1.appendChild(document.createTextNode(record.title));
  let li2 = document.createElement('li');
  li2.appendChild(document.createTextNode(record.author));
  let li3 = document.createElement('li');
  li3.appendChild(document.createTextNode(`Pages: ${record.numberOfPages}`));

  let checkbox = document.createElement('div');
  checkbox.className = 'checkbox';
  let checkboxLabel = document.createElement('label');
  checkboxLabel.htmlFor = 'haveReadTheBook';
  checkboxLabel.textContent =  `Read the book`;
  newCard.appendChild(closeBtn);
  newCard.appendChild(ul);
  newCard.appendChild(checkbox);
  booklist.appendChild(newCard); 'Read the book';
  let checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.className = 'card-haveReadTheBook';
  checkboxInput.name = 'haveReadTheBook';
  checkboxInput.checked = record.haveReadTheBook;

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  checkbox.appendChild(checkboxLabel);
  checkbox.appendChild(checkboxInput);

  
  newCard.appendChild(closeBtn);
  newCard.appendChild(ul);
  newCard.appendChild(checkbox);
  booklist.appendChild(newCard);

  let removeBookBtn = document.querySelectorAll('.btn-removeBook');
  removeBookBtn.forEach(btn => {
    btn.addEventListener('click', removeBookFromLibrary)
  })
}

function clearInputField() {
  bookTitle.value = '';
  bookAuthor.value = '';
  bookNumberOfPages.value = '';
  inputHaveReadTheBook.checked = false;
}

function addBookToLibrary(title, author, numberOfPages, haveReadTheBook) {
  // const newBook = new Book("A Game of Thrones", "George R.R Martin", "694", true);
  let id = myLibrary.length;
  const newBook = new Book(id, title, author, numberOfPages, haveReadTheBook);
  // newBook.createTheCard();
  myLibrary.push(newBook);
  // console.log(myLibrary);
  displayCards(myLibrary);
}


function removeBookFromLibrary(b) {
  let id = parseInt(b.target.parentElement.id);
  myLibrary = myLibrary.filter(book => book.id !== parseInt(b.target.parentElement.id));
  // console.log(myLibrary, id);
  removeCard(id);
  // displayCards(myLibrary);
}

function removeCard(id) {
  // booklist.children.forEach((child) => {
  //   console.log(child);
  // })
  let booklistArr = Array.from(booklist.children);
  booklistArr.forEach(book => {
    if(parseInt(book.id) === id) {
      let d = document.getElementById(`${id}`);
      booklist.removeChild(d);
      console.log(myLibrary);
    }
  })
}

function displayCards(myLibrary) {
  let booklistArr = Array.from(booklist.children);
  // console.log(myLibrary[myLibrary.length - 1]);
  if(booklistArr.length !== myLibrary.length) {
    createTheCard(myLibrary[myLibrary.length - 1], myLibrary[myLibrary.length - 1].id);
  }
  // myLibrary.forEach((record, index) => {
  //     createTheCard(record, index);
  // })
  console.log(myLibrary)
}



// // console.log(`card length: ${card.length}`);
// booklist.forEach(card => {
//   console.log(card);
// })

// console.log(booklist.children);
// let arr = Array.from(booklist.children);

// console.log(arr[1].id)

// // console.log(myLibrary);