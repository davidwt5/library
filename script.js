let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(book, library) {
    library.push(book);
}

function deleteAllChildren(node){
    node.innerHTML = "";
}

function displayLibrary(library){
    const libraryContainer = document.querySelector('.library');
    for(book of library) {
        const bookCard = createBookCard(book);
        libraryContainer.appendChild(bookCard);
    }
}

function refreshLibrary(){
    deleteAllChildren(document.querySelector('.library'));
    displayLibrary(myLibrary);
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

    // Notice how these callback functions reference varialbes which no longer exist when they're called
    // However, they still have access to these private variables because of closure
    let deleteBook = document.createElement('img');
    deleteBook.src = "icons/cross.png";
    deleteBook.classList.add('close-icon');
    deleteBook.addEventListener('click', e => {
        let book = myLibrary.find(element => element.title === title.innerText && element.author === author.innerText);
        let index = myLibrary.indexOf(book);
        if(index > -1) myLibrary.splice(index, 1);
        refreshLibrary();
    });
    card.appendChild(deleteBook);

    let readIcon = document.createElement('img');
    readIcon.src = book.read ? "icons/eye.png" : "icons/eye-off.png";
    readIcon.classList.add('read-icon');
    readIcon.addEventListener('click', e => {
        let book = myLibrary.find(element => element.title === title.innerText && element.author === author.innerText);
        book.read = book.read ? false : true;
        readIcon.src = book.read ? "icons/eye.png" : "icons/eye-off.png";
    });
    card.appendChild(readIcon);

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

function clearForm(){
    document.querySelector('#title-input').value = "";
    document.querySelector('#author-input').value = "";
    document.querySelector('#read-input').checked = false;
}

const newBookBtn = document.querySelector('.new-book');
newBookBtn.addEventListener('click', e => bringUpForm());

document.documentElement.addEventListener('keydown', e => {
    if(e.code === "Escape")
        hideForm();
});

const newBookSubmission = document.querySelector('.new-book-sumbmission');
newBookSubmission.addEventListener('click', e => {
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author-input').value;
    const read = document.querySelector('#read-input').checked;
    const book = new Book(title, author, read);

    addBookToLibrary(book, myLibrary);
    refreshLibrary();
    clearForm();
    hideForm();
});

addBookToLibrary(new Book("LOTR", "J.R.R Tolkien", true), myLibrary);
addBookToLibrary(new Book("The Room", "Tommy Wiseau", false), myLibrary);

displayLibrary(myLibrary);