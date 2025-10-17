import React from "react";
import st from '../ComponentsCss/Home.module.css';
import book1 from '../images/9781408855652.jpg'
import book2 from '../images/9781787461482.jpg'
import book3 from '../images/9789356295698.jpg'
import book4 from '../images/9789358566147.jpg'

const Home = () => {
  const books = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      description: "A young wizard discovers his magical heritage and begins an adventure at Hogwarts School of Witchcraft and Wizardry.",
      image: book1
    },
    {
      id: 2,
      title: "The Family Upstairs",
      description: "A gripping thriller about a mysterious inheritance, dark secrets, and the tangled lives of a wealthy family.",
      image: book2
    },
    {
      id: 3,
      title: "Ratan Tata",
      description: "An inspiring story of India’s iconic industrialist, his journey, vision, and leadership that shaped the Tata empire.",
      image: book3
    },
    {
      id: 4,
      title: "Quantam theory",
      description: "An accessible introduction to the fascinating world of quantum physics, exploring the principles that govern the universe at the smallest scales.",
      image: book4
    }
  ];
  return (
    <div className={st.homepage}>
      <section className={st.firstpage}>
        <div className={st.textinfirstpage}>
          <h1>Discover Your Next Favorite Book</h1>
          <p>
            Explore thousands of books, from timeless classics to modern
            masterpieces.
          </p>
          <div className={st.firstpagebutton}>
            <button className={st.primaryBtn}>Shop Now</button>
            <button className={st.secondaryBtn}>Learn More</button>
          </div>
        </div>
        <div className={st.homeimage}>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Books"
          />
        </div>
      </section>

      <section className={st.featured}>
        <h2>Featured Books</h2>
        <div className={st.bookGrid}>
          {books.map((book) => (
            <div key={book.id} className={st.bookCard}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <button className={st.addCart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
