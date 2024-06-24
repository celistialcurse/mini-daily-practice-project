// Book constructor
function Book(title, author) {b 
    this.title = title;
    this.author = author;
}

// Library constructor
function Library() {
    this.books = [];
}

// Add book to library
Library.prototype.addBook = function(book) {
    this.books.push(book);
    this.displayBooks();
}

// Remove book from library
Library.prototype.removeBook = function(title) {
    this.books = this.books.filter(book => book.title !== title);
    this.displayBooks();
}

// Display books in library
Library.prototype.displayBooks = function() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    this.books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = () => this.removeBook(book.title);
        li.appendChild(deleteBtn);
        bookList.appendChild(li);
    });
}

// Initialize library
const library = new Library();

// Handle form submission
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const book = new Book(title, author);
    
    library.addBook(book);
   


    // Clear form
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});
