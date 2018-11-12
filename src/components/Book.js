/* Import necessary dependencies */


import React from "react";
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';

/* Create Book Component */

class Book extends React.Component{
  
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
     book.shelf = shelf;
     this.setState(state => ({
       books: state.books.filter(b => b.id !== book.id).concat([book])
     }));
    }); 
  }
    render(){
        return (
            <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}"`}}></div>
                      <div className="book-shelf-changer">
                        <select value={this.props.book.shelf || "none"} onChange={(e) => {this.props.updateBook(this.props.book, e.target.value) }}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No Author Info..."}</div>
                  </div>
                </li>
        );       
    }
}

export default Book;