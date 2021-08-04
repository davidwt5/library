let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book, library) {
    library.push(book);
}

function displayLibrary(library){
    const libraryContainer = document.querySelector('.library');
    for(book of library) {
        const bookCard = createBookCard(book);
        libraryContainer.appendChild(bookCard);
    }
}

function createBookCard(book) {
    let card = document.createElement("div");
    card.classList.add("book");

    let title = document.createElement("p");
    title.classList.add("title");
    title.innerText = book.title;
    card.appendChild(title);

    let author = document.createElement("p");
    author.classList.add("author");
    author.innerText = book.author;
    card.appendChild(author);

    return card;
}

function bringUpForm(){
    const body = document.getElementsByTagName('body')[0];
    const form = document.querySelector('.new-book-form');
    body.classList.add("grayed-out");
    form.classList.remove("ghost");
}

function hideForm(){
    const body = document.getElementsByTagName('body')[0];
    const form = document.querySelector('.new-book-form');
    body.classList.remove("grayed-out");
    form.classList.add("ghost");
}

const newBookBtn = document.querySelector('.new-book');
newBookBtn.addEventListener('click', e => bringUpForm());

addBookToLibrary(new Book("LOTR", "J.R.R Tolkien", true), myLibrary);
addBookToLibrary(new Book("The Room", "Tommy Wiseau", false), myLibrary);

displayLibrary(myLibrary);