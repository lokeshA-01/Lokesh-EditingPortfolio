import "../styles/landing.css";

function Landing() {
  return (
    <main className="landing">

      {/* ========================================
          CINEMATIC LIGHT FIELD
      ======================================== */}

      <div className="light-field">
        <div className="light-ribbon"></div>
        <div className="light-glow"></div>
      </div>


      {/* ========================================
          LANDING CONTENT
      ======================================== */}

      <section className="landing-content">

        <p className="landing-welcome">
          Welcome
        </p>

        <h1>
          Choose your experience
        </h1>


        {/* ========================================
            CATEGORY CARDS
        ======================================== */}

        <div className="category-list">


          {/* ======================================
              FANCY EDITS
          ====================================== */}

          <button
            className="category-card fancy-card"
            type="button"
            onClick={() => {
              window.location.href = "/fancy-edits";
            }}
          >

            <img
              src="/images/fancy-edits.jpg"
              alt="Fancy Edits"
              className="card-image"
            />

            <span className="card-number">
              01
            </span>

            <div className="card-info">

              <span className="card-title">
                FANCY EDITS
              </span>

              <span className="card-arrow">
                ↗
              </span>

            </div>

          </button>


          {/* ======================================
              TEASERS
          ====================================== */}

          <button
            className="category-card wedding-card"
            type="button"
            onClick={() => {
              window.location.href = "/teasers";
            }}
          >

            <img
              src="/images/wedding-teaser.jpg"
              alt="Teasers"
              className="card-image"
            />

            <span className="card-number">
              02
            </span>

            <div className="card-info">

              <span className="card-title">
                TEASERS
              </span>

              <span className="card-arrow">
                ↗
              </span>

            </div>

          </button>


          {/* ======================================
              INSTAGRAM REELS
          ====================================== */}

          <button
            className="category-card reels-card"
            type="button"
          >

            <img
              src="/images/instagram-reels.jpg"
              alt="Instagram Reels"
              className="card-image"
            />

            <span className="card-number">
              03
            </span>

            <div className="card-info">

              <span className="card-title">
                REELS EDITS
              </span>

              <span className="card-arrow">
                ↗
              </span>

            </div>

          </button>


        </div>

      </section>

    </main>
  );
}

export default Landing;