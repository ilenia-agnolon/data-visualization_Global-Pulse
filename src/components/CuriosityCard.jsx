import "./CuriosityCard.css"

export function CuriosityCard () {
  return (
    <>
     {/* ------- CARD */}
        <div className="curiosities-card-container">

        <div className="main-info">
            {/* ICON */}
            <div className="cc-icon">ICO</div>
            {/* TITLE */}
            <div className="box-title-and-descrp">
              <h5 className="cc-title">Respiri nel mondo oggi</h5>
              <p className="cc-description">Respiri totali dell'umanità</p>
            </div>
        </div>

          {/* DATA */}
          <p className="cc-total"><span className="txt-orange">TOT MILA M</span> miliardi</p>
          {/* RATE PER SECOND */}
          <p className="rate-per-second">+8300000000/sec</p>

          {/* GRAPH */}
          <div className="graph"></div>
         
        </div>
    </>
  );
}
