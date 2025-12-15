//components
import { CuriosityCard } from "./CuriosityCard";

//css
import "./CuriositiesSection.css"

export function CuriositiesSection() {
  return (
    <div className="curiosities-container">
    
          <h3>Tutte le curiosità</h3>
          <h4>TOT curiosità in tempo reale</h4>
    
          <div className="curiosities-row">
    
            {/* ------- CARD ------- */}
           <CuriosityCard />
             {/* ------- x ------- */}
          </div>
    
        </div>
  );
}
