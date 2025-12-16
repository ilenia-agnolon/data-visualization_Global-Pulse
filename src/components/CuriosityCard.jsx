// components
import { DotPulseVisualization } from "./DotPulseVisualization";

//css
import "./CuriosityCard.css";

//compact formatter that returns { numberPart, suffixPart } safely
// It avoids long "italian compact" strings breaking the UI and forces max 2 decimals.
function formatCompactParts(value, lang) {
  const locale = lang === "it" ? "it-IT" : "en-US";

  // Compact number with max 2 decimals
  const formatted = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }).format(value);

  const trimmed = formatted.trim();

  // Case 1: glued suffix (e.g. "103.32B")
  const gluedMatch = trimmed.match(/^([\d.,]+)([A-Za-z]+)$/);
  if (gluedMatch) {
    return { numberPart: gluedMatch[1], suffixPart: gluedMatch[2] };
  }

  // Case 2: space-separated suffix (e.g. "103,32 Bln")
  const parts = trimmed.split(/\s+/);
  if (parts.length === 2 && /[A-Za-z]/.test(parts[1])) {
    return { numberPart: parts[0], suffixPart: parts[1] };
  }

  // Fallback: no suffix
  return { numberPart: trimmed, suffixPart: "" };
}

export function CuriosityCard({ item, lang, secondsToday }) {
  const { emoji, sectionEmoji, title, description, ratePerSecond, unit } = item;

  //estimated total “today”
  const totalToday = ratePerSecond * secondsToday * 3;

  //safe split number + suffix with max 2 decimals
  const { numberPart, suffixPart } = formatCompactParts(totalToday, lang);

  // unit for the total
  const rawUnit = lang === "it" ? unit.it : unit.en;
  const mainUnitLabel = rawUnit.includes("/sec")
    ? rawUnit.replace("/sec", "")
    : rawUnit;

  // per-second increment (compact, max 2 decimals)
  const { numberPart: rateNumber, suffixPart: rateSuffix } = formatCompactParts(
    ratePerSecond,
    lang
  );
  const rateCompact = `${rateNumber}${rateSuffix ? ` ${rateSuffix}` : ""}`;

  return (
    <>
      {/* ------- CARD ------- */}
      <div className="curiosities-card-container">
        <div className="main-info">
          {/* ICON */}
          <div className="cc-icon">{emoji || sectionEmoji}</div>
          {/* TITLE */}
          <div className="box-title-and-descrp">
            <h5 className="cc-title">{title[lang]}</h5>
            <p className="cc-description">{description[lang]}</p>
          </div>
        </div>

        {/* DATA */}
        <p className="cc-total">
          {/* orange number */}
          <span className="txt-orange cc-number">{numberPart}</span>
          <span className="cc-unit">
            {suffixPart && (
              <span className="cc-total-suffix">{suffixPart}</span>
            )}{" "}
            {mainUnitLabel}
          </span>
        </p>
        {/* RATE PER SECOND  +XX/sec */}
        <p className="rate-per-second">
          {lang === "it"
            ? `+${rateCompact} ${unit.it}`
            : `+${rateCompact} ${unit.en}`}
        </p>

        {/* GRAPH PLACEHOLDER  */}
        <div className="graph">
          <DotPulseVisualization rate={ratePerSecond} theme={item.sectionId} />
        </div>
      </div>
    </>
  );
}
