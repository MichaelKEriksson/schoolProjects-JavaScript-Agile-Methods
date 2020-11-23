"use strict";

function Book(name, topic, pages, number) {
  this.name = name;
  this.topic = topic;
  this.pages = pages;
  this.number = number;
  this.getBookInfo = function () {
    console.log(
      "Book: " +
        this.name +
        "\nTopic: " +
        this.topic +
        "\nPages: " +
        this.pages +
        "\nISBN: " +
        this.number +
        "\n-----"
    );
  };
}

let books = [];
books.push(new Book("book1", "topic1", "200", "12345"));
books.push(new Book("book2", "topic2", "300", "11111"));
books.push(new Book("book3", "topic3", "400", "22222"));

let numbOfBooks = prompt("Please enter number of books to add: ");

for (let i = 0; i < numbOfBooks; i++) {
  let addName = prompt("Please enter name of author: ");
  let addTopic = prompt("Please enter topic of the book: ");
  let addPages = prompt("Please enter the amount of pages: ");
  let addNumber = prompt("Please enter the ISBN number: ");
  books.push(new Book(addName, addTopic, addPages, addNumber));
}

books.forEach(function (printBooks) {
  printBooks.getBookInfo();
});
