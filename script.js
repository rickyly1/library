const showPopupButton = document.getElementById("showPopup");
const closePopupButton = document.getElementById("closePopup");
const popupForm = document.getElementById("popup");
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