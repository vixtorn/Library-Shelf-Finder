let book1 = {
    name: "1984",
    author: "George Orwell",
    price: 120,
    shelf: "5-3",
};
let book2 = {
    name: "The Book of Accidents",
    author: "Chuck Wendig",
    price: 75,
    shelf: "4-2",
};
let book3 = {
    name: "They Both Die at the End",
    author: "Adam Silvera",
    price: 50,
    shelf: "3-3",
};
let book4 = {
    name: "Misery",
    author: "Stephen King",
    price: 153,
    shelf: "2-1",
};
let book5 = {
    name: "The Silent Companions",
    author: "Laura Purcell",
    price: 28,
    shelf: "1-3",
};

let library = [book1, book2, book3, book4, book5];

let shelves = [
    ["5-1", "5-2", "5-3", "5-4", "5-5"],
    ["4-1", "4-2", "4-3", "4-4", "4-5"],
    ["3-1", "3-2", "3-3", "3-4", "3-5"],
    ["2-1", "2-2", "2-3", "2-4", "2-5"],
    ["1-1", "1-2", "1-3", "1-4", "1-5"],
];

function createShelves() {
    const container = document.getElementById('shelvesContainer');
    shelves.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'shelfRow';
        row.forEach(shelf => {
            const shelfDiv = document.createElement('div');
            shelfDiv.className = 'shelf';
            shelfDiv.id = `shelf-${shelf}`;
            shelfDiv.textContent = shelf;
            rowDiv.appendChild(shelfDiv);
        });
        container.appendChild(rowDiv);
    });
}

function findBook(bookName) {
    for (let book of library) {
        if (book.name.toUpperCase().includes(bookName.toUpperCase())) {
            return book.shelf;
        }
    }
    return null;
}

function showShelf(shelfCode) {
    const shelfDiv = document.getElementById(`shelf-${shelfCode}`);
    if (shelfDiv) {
        shelfDiv.classList.add('visible');
    }
}

function findAndShowBook() {
    const bookName = document.getElementById('bookInput').value;
    const shelfCode = findBook(bookName);
    if (shelfCode) {
        showShelf(shelfCode);
    } else {
        alert("Your book is not found.");
    }
}

// Initialize shelves on page load
createShelves();

// Attach the event listener after the page has loaded
document.getElementById('findButton').addEventListener('click', findAndShowBook);
