// Single Book
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>Title:{props.title}</h2>
      <p>Author: {props.author}</p>
      <span className="number">#{props.number + 1}</span>
    </article>
  );
};

export default Book;
