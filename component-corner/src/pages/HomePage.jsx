import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Hero
        title="Different Saints"
        subtitle="Everyone carries something. Wear the proof."
        ctaText="Shop the Drop"
        image="https://placehold.co/1600x800/222222/888888?text=Hero+Image"
      />

      <section className="why-section">
        <h2 className="section-title">Why Shop With Us?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>Built With Intention</h3>
            <p>Every piece is designed around a story. Structure paired with distress, strength paired with softness.</p>
          </div>
          <div className="why-card">
            <h3>Heavyweight Quality</h3>
            <p>Premium French terry, vintage acid washes, and YKK brass hardware made to last.</p>
          </div>
          <div className="why-card">
            <h3>Limited Drops</h3>
            <p>Small runs mean every release is a chapter. When it's gone, it's gone.</p>
          </div>
        </div>
        <div className="why-cta">
          <Link to="/products" className="btn-dark">Shop the Collection</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;