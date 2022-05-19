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

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 255, 'Not read yet');
addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 290, 'Already read');
addBookToLibrary('The Little Prince', 'Antoine de Saint-Exupéry', 96, 'Not read yet');


(function displayLibrary () {

    let bookContainer = document.getElementsByClassName('book-container')[0];

    let readCount = 0;

    let readCountContainer = document.getElementsByClassName('read-container')[0];

    for(let a = 0; a < myLibrary.length; a++) {

        if(myLibrary[a].haveRead == 'Already read') {
            
            readCount ++;
            readCountContainer.innerText = `Read : ${readCount} / ${myLibrary.length}`;

        }

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

        let bookRemoveButt = document.createElement('button')
        bookCardUpper.appendChild(bookRemoveButt);
        bookRemoveButt.classList.add('butt');
        bookRemoveButt.textContent = 'REMOVE';
        bookRemoveButt.addEventListener('click', function () {   bookCard.remove()   })

        let readButt = document.createElement('button');
        bookCardLower.appendChild(readButt);
        readButt.classList.add('butt'); 
        
        if(myLibrary[a].haveRead == 'Already read') {readButt.innerText = 'Mark as unread'; readButt.style.color = 'red';}
        else if(myLibrary[a].haveRead == 'Not read yet') {readButt.innerText = 'Mark as read'; readButt.style.color = 'green';}

                
        function readButtFunction () {

            if(myLibrary[a].haveRead == 'Already read' && readButt.innerText == 'Mark as unread') {

                readButt.style.color = 'green';
                readButt.innerText = 'Mark as read';
                myLibrary[a].haveRead = 'Not read yet';
                bookHaveRead.textContent = 'Not read yet';
                readCount --;
                readCountContainer.innerText = `Read : ${readCount} / ${myLibrary.length}`;

            } else
            
            if(myLibrary[a].haveRead == 'Not read yet' && readButt.innerText == 'Mark as read') {

                readButt.style.color = 'red';
                readButt.innerText = 'Mark as unread';
                myLibrary[a].haveRead = 'Already read';
                bookHaveRead.textContent = 'Already read';
                readCount ++;
                readCountContainer.innerText = `Read : ${readCount} / ${myLibrary.length}`;

            }
        }

        readButt.addEventListener('click', readButtFunction)

        
        let bookPageNumber = document.createElement('p');
        bookCardLower.appendChild(bookPageNumber);
        bookPageNumber.classList.add('nr-pag');
        bookPageNumber.textContent = myLibrary[a].pages;

        let bookHaveRead = document.createElement('p');
        bookCardLower.appendChild(bookHaveRead);
        bookHaveRead.classList.add('read-status');
        bookHaveRead.textContent = myLibrary[a].haveRead;


    }



})();

(function bookColorPicker () {

    let bookBody = document.getElementsByClassName('book-body');

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


    














