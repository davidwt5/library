let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
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

addBookToLibrary(new Book("LOTR", "J.R.R Tolkien"), myLibrary);
addBookToLibrary(new Book("The Room", "Tommy Wiseau"), myLibrary);

displayLibrary(myLibrary);