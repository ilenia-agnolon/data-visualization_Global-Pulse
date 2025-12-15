import "./Hero.css"

export function Hero() {
  return (
    <div className="hero-container">
      
      <h1 className="white-txt">Il mondo si muove.</h1>
      <h1 className="orange-txt">Guarda i numeri in tempo reale.</h1>

      <h2 className="hero-subtitle">Una collezione di fatti, ritmi e curiosità che non si fermano mai.</h2>
      
      <div className="hero-live-row">
        <span className="hero-live-dot" />
        <span className="hero-live-label">LIVE DATA</span>
      </div>

    </div>
  );
}
