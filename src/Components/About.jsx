import React from "react";
import st from "../ComponentsCss/About.module.css";
import bookshelf from '../images/pawel-czerwinski-BAiRfbt1HRE-unsplash.jpg'

const About = () => {
  return (
    <div className={st.aboutPage}>
      <section className={st.about}>
        <div className={st.aboutText}>
          <h2>Why Inkspire?</h2>
          <p>
            Inkspire brings you the best collection of books, carefully curated
            to spark your imagination and inspire your mind.
          </p>
        </div>
        <div className={st.aboutImage}>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Person reading a book"
          />
        </div>
      </section>

      <section className={st.mission}>
        <h2>Our Mission</h2>
        <p>
          At Inkspire, our mission is to cultivate a love of reading by making
          diverse and engaging books accessible to everyone.
        </p>
      </section>

      <section className={st.story}>
        <div className={st.storyText}>
          <h2>Our Story</h2>
          <p>
            Founded by passionate readers, Inkspire started as a small
            independent bookstore and has grown into a platform connecting
            readers with stories that inspire and entertain.
          </p>
        </div>
        <div className={st.storyImage}>
          <img
            src={bookshelf}
            alt="Bookshelf in a cozy library"
          />
        </div>
      </section>
      
    </div>
  );
};

export default About;