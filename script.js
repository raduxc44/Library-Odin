let myLibrary = [];

class Book {

    constructor(title, author, pages, haveRead) {

        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead;

    }

    info() {

        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}.`

    }

}

function addBookToLibrary(title, author, pages, haveRead) {

    myLibrary.push(new Book(title, author, pages, haveRead))

}

function displayLibrary (arr) {

    let bookContainer = document.getElementsByClassName('book-container')[0];

    for(a = 0; a < myLibrary.length; a++) {

        let bookCard = document.createElement('div');
        bookContainer.appendChild(bookCard);
        bookCard.classList.add('book-body')

        let bookCardUpper = document.createElement('div');
        bookCard.appendChild(bookCardUpper);
        bookCardUpper.classList.add('book-top');

        let bookCardLower = document.createElement('div');
        bookCard.appendChild(bookCardLower);
        bookCardLower.classList.add('book-low');

        let bookTitle = document.createElement('p');
        bookCardUpper.appendChild(bookTitle);
        bookTitle.classList.add('title')
        bookTitle.textContent = myLibrary[a].title;

        let bookAuthor = document.createElement('p');
        bookCardUpper.appendChild(bookAuthor);
        bookAuthor.classList.add('author');
        bookAuthor.textContent = myLibrary[a].author;

        let bookPageNumber = document.createElement('p');
        bookCardLower.appendChild(bookPageNumber);
        bookPageNumber.classList.add('nr-pag');
        bookPageNumber.textContent = myLibrary[a].pages;

        let bookHaveRead = document.createElement('p');
        bookCardLower.appendChild(bookHaveRead);
        bookHaveRead.classList.add('read-status');
        bookHaveRead.textContent = myLibrary[a].haveRead;

    }
}




addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 255, 'Not read yet')
addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 290, 'Already read')
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', 96, 'Not read yet')

displayLibrary(myLibrary)







let bookBody = document.getElementsByClassName('book-body');

(function bookColorPicker () {

    for( i = 0; i < bookBody.length; i++) {
    while (!bookBody[i].classList.contains('colored')) {

    let j;
    
    (function getRandomInt () {j = Math.floor(Math.random() * 6)})()   
    
    
        switch (j) {

            case 0: bookBody[i].classList.add('first-color');
                    bookBody[i].classList.add('colored');
                    
            break;

            case 1: bookBody[i].classList.add('second-color'); 
                    bookBody[i].classList.add('colored');
                    
            break;

            case 2: bookBody[i].classList.add('third-color'); 
                    bookBody[i].classList.add('colored')
                    
            break;

            case 3: bookBody[i].classList.add('fourth-color');
                    bookBody[i].classList.add('colored');
                    
            break;

            case 4: bookBody[i].classList.add('fifth-color');
                    bookBody[i].classList.add('colored');
                
            break;

            case 5: bookBody[i].classList.add('sixth-color'); 
                    bookBody[i].classList.add('colored');
                    
            break;
        
        }
     }
    }

    
})();    



(function () {

    let creatorButton = document.getElementsByClassName('new-butt')[0]


    function showForm () {document.getElementsByClassName('form-body')[0].style.display = 'block';}


    creatorButton.addEventListener('click', showForm);

})();


    














