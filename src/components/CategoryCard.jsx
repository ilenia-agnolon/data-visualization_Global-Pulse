//css
import "./CategoryCard.css";

export function CategoryCard({
  icon,
  counter,
  title,
  description,
  isActive,
  onClick,
}) {
  return (
    <>
      {/* ------- CARD */}
      <div
        className={`cat-card ${isActive ? "category-card--active" : ""}`}
        onClick={onClick}
        role="button"
      >
        <div className="icon-and-counter-box">
          {/* ICON */}
          <div className="icon">{icon}</div>
          {/* COUNTER */}
          <div className="counter">{counter}</div>
        </div>

        {/* TXT */}
        <div className="cat-card-txt">
          {/* TITLE */}
          <h5 className="cat-title">{title}</h5>
          {/* DESCRIPTION */}
          <p className="cat-description">{description}</p>
        </div>
      </div>
    </>
  );
}
