// project Book list
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { books } from "./Books";
import Book from "./Book";

// linkedIn icon
const linkedIn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-linkedin"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

// main component
function BookList() {
  const getBook = (id) => {
    const book = books.find((b) => {
      return b.id === id;
    });
    console.log(book);
  };

  return (
    <React.Fragment>
      <div className="coder">
        <h4>
          Coder: NSENGIYUMVA CHRISTIAN
          <a
            href="https://www.linkedin.com/in/nsengiyumva-christian-b9947a233/"
            target="blank"
            className="linkedIn"
          >
            {linkedIn}
          </a>
        </h4>
      </div>
      <h1>AMAZON BEST SELLER</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              title={book.title}
              img={book.image}
              author={book.author}
              key={index}
              getBook={getBook}
              id={book.id}
              number={index}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}

// rendering the booklsit
const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<BookList />);
