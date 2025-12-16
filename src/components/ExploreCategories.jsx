//components
import { CategoryCard } from "./CategoryCard";

//data
import { dataCategories } from "../data/counters";

//language
import { useLanguage } from "../i18n/LanguageContext";

//css
import "./ExploreCategories.css";

export function ExploreCategories({ activeCategoryId, onCategoryChange }) {
  const { lang } = useLanguage();

  return (
    <div className="explore-cat-container">
      <h3>
        {lang === "it" ? "Esplora le categorie" : "Explore the categories"}
      </h3>
      <h4>
        {lang === "it"
          ? "Seleziona una categoria per filtrare i dati"
          : "Select a category to filter the data"}
      </h4>

      <div className="cat-row">
        {dataCategories.map((category) => {
          const isActive = category.id === activeCategoryId;

          return (
            <CategoryCard
              key={category.id}
              icon={category.emoji}
              counter={category.items.length}
              title={category.title[lang]}
              description={category.subtitle ? category.subtitle[lang] : ""}
              isActive={isActive}
              onClick={() => onCategoryChange(category.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
