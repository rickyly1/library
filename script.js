const showPopupButton = document.getElementById("showPopup");
const closePopupButton = document.getElementById("closePopup");
const popupForm = document.getElementById("popup");
const addBookButton = document.getElementById("add-book");
const myLibrary = [];

// Book object constructor
function Book(title, author, pages, read, index) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.index = index
}

// iterates and displays myLibrary on DOM
function addBookToLibrary() {
    
}

// button#showPopup displays book input form
showPopupButton.addEventListener("click", () => {
    popupForm.style.display = "block";
})

// #closePopup closes book input form
closePopupButton.addEventListener("click", () => {
    popupForm.style.display = "none";
})

// makes a Book object and pushes into array
addBookButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;

    // makes and pushes object to array
    const newBook = new Book(title, author, pages, read, myLibrary.length + 1);
    myLibrary.push(newBook);

    // resets input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    popupForm.style.display = "none";
})
