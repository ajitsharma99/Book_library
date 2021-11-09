
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const button = document.querySelector(".btn");
const bookList = document.querySelector("#book_list");

const table = document.querySelector("#table1");

button.addEventListener("click", function(e){

e.preventDefault();

if(title.value === '' && author.value === '' && year.value === ''){
alert(" Please fiil up the full form");


}
else{

  // Creat new row
const newRow = document.createElement("tr");


// creat new title
const newTitle = document.createElement("th");
newTitle.innerHTML = title.value;
newRow.appendChild(newTitle);

// creat new author
const newAuthor = document.createElement("th");
newAuthor.innerHTML = author.value;
newRow.appendChild(newAuthor);

// creat new year
const newYear = document.createElement("th");
newYear.innerHTML = year.value;
newRow.appendChild(newYear);

// new row relation with booklist (parents)
bookList.appendChild(newRow);
table1.appendChild(bookList);


}




});