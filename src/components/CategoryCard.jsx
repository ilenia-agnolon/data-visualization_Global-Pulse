//css
import "./CategoryCard.css"

export function CategoryCard() {
  return (
    <>
     {/* ------- CARD */}
        <div className="cat-card">

          <div className="icon-and-counter-box">
            {/* ICON */}
            <div className="icon">ICO</div>
            {/* COUNTER */}
            <div className="counter">3</div>
          </div>

          {/* TXT */}
          <div className="cat-card-txt">
            {/* TITLE */}
            <h5 className="cat-title">Pianeta & natura</h5>
            {/* DESCRIPTION */}
            <p className="cat-description">Fenomeni naturali e planetari</p>
          </div>
         
        </div>
    </>
  );
}
