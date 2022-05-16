let bookBody = document.getElementsByClassName('book-body');

function bookColorPicker () {

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

    
}    

let colorChangeButt = document.querySelector('button')

    colorChangeButt.addEventListener ('click', bookColorPicker)












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

function addBookToLibrary(book) {

    myLibrary.push(book)

}

let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 255, 'not read yet');
let twoCities = new Book('A Tale of Two Cities', 'Charles Dickens', 290, 'already read');
let littlePrince = new Book('The Little Prince', 'Antoine de Saint-Exupéry', 96, 'not read yet');



addBookToLibrary(hobbit);
addBookToLibrary(twoCities);
addBookToLibrary(littlePrince);


let libraryContainer = document.getElementsByClassName('book-container');
