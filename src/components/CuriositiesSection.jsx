import { useEffect, useState, useRef } from "react";

//components
import { CuriosityCard } from "./CuriosityCard";

//data
import { dataCategories } from "../data/counters";

//language
import { useLanguage } from "../i18n/LanguageContext";

//css
import "./CuriositiesSection.css";

export function CuriositiesSection({ activeCategoryId, onClearCategory }) {
  const { lang } = useLanguage();

  // reference used for automatic scroll
  const curiositiesRef = useRef(null);

  // list of all curiosities from all categories
  const allItems = dataCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      sectionId: category.id,
      sectionEmoji: category.emoji,
    }))
  );

  const activeCategory = dataCategories.find(
    (cat) => cat.id === activeCategoryId
  );

  const itemsToShow = activeCategory
    ? allItems.filter((item) => item.sectionId === activeCategoryId)
    : allItems;

  const title = activeCategory
    ? activeCategory.title[lang]
    : lang === "it"
    ? "Tutte le curiosità"
    : "All curiosities";

  const subtitle = activeCategory
    ? activeCategory.subtitle[lang]
    : lang === "it"
    ? `${allItems.length} curiosità in tempo reale`
    : `${allItems.length} curiosities in real time`;

  //seconds “spent today” (approximate)
  const [secondsToday, setSecondsToday] = useState(() => {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  });

  //seconds since when you open the page
  const [secondsSinceOpen, setSecondsSinceOpen] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsToday((prev) => prev + 1);
      setSecondsSinceOpen((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  //auto-scroll to curiosities when a category is selected
  useEffect(() => {
    if (activeCategoryId && curiositiesRef.current) {
      curiositiesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCategoryId]);

  return (
    <div className="curiosities-container" ref={curiositiesRef}>
      <div className="curiosities-header">
        <div>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>

        {/* button "Show All" */}
        {activeCategory && (
          <button
            type="button"
            className="show-all-button"
            onClick={onClearCategory}
          >
            {lang === "it" ? "Mostra tutte" : "Show all"}
          </button>
        )}
      </div>

      <div className="curiosities-row">
        {itemsToShow.map((item) => (
          <CuriosityCard
            key={`${item.sectionId}__${item.id}`}
            item={item}
            lang={lang}
            secondsToday={secondsToday}
            secondsSinceOpen={secondsSinceOpen}
          />
        ))}
      </div>

      {activeCategory && (
        <div className="back-to-categories-wrapper">
          <button
            type="button"
            className="back-to-categories-button"
            onClick={() => {
              onClearCategory();

              // Scroll back to category section
              const el = document.querySelector(".explore-cat-container");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            ↑ {lang === "it" ? "Torna alle categorie" : "Back to categories"}
          </button>
        </div>
      )}
    </div>
  );
}
