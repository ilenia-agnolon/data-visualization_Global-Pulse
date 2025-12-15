//components
import { CategoryCard } from "./CategoryCard";

//css
import "./ExploreCategories.css"

export function ExploreCategories() {
  return (
    <div className="explore-cat-container">

      <h3>Esplora le categorie</h3>
      <h4>Seleziona una categoria per filtrare i dati</h4>

      <div className="cat-row">

        {/* ------- CARD */}
       <CategoryCard />

         {/* ------- */}
      </div>

    </div>
  );
}
