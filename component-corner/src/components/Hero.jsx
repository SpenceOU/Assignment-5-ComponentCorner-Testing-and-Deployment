import './Hero.css';

function Hero({ title, subtitle, ctaText, image }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-cta">{ctaText}</button>
      </div>
    </section>
  );
}

export default Hero;
