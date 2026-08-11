import "../styles/contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* =========================================
          HERO / CONTACT INTRO
      ========================================= */}

      <section className="contact-hero">

        <div className="contact-glow"></div>

        <div className="contact-content">

          <p className="contact-eyebrow">
            GET IN TOUCH
          </p>

          <h1>
            Let's make
            <br />
            something <em>great.</em>
          </h1>

          <p className="contact-description">
            Have a project, an edit, or an idea in mind?
            <br />
            I'd love to hear about it.
          </p>

        </div>

        <div className="contact-number">
          CONTACT
        </div>

      </section>


      {/* =========================================
          CONTACT OPTIONS
      ========================================= */}

      <section className="contact-options">

        <div className="contact-section-label">
          <span></span>
          CONTACT DIRECTLY
        </div>


        <div className="contact-list">


          {/* =====================================
              INSTAGRAM
          ===================================== */}

          <a
            href="https://www.instagram.com/lokiiiieeeee____/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >

            <div className="contact-item-left">

              <span className="contact-item-number">
                01
              </span>


              {/* Instagram Logo */}

              <span className="contact-item-icon instagram-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                  />

                  <circle
                    cx="17.4"
                    cy="6.6"
                    r="1.1"
                    className="instagram-dot"
                  />

                </svg>

              </span>


              <div>

                <p className="contact-item-label">
                  INSTAGRAM
                </p>

                <h2>
                  @lokiiiieeeee____
                </h2>

              </div>

            </div>


            <span className="contact-item-arrow">
              ↗
            </span>

          </a>



          {/* =====================================
              EMAIL
          ===================================== */}

          <a
            href="mailto:lokeshz.editor@gmail.com"
            className="contact-item"
          >

            <div className="contact-item-left">

              <span className="contact-item-number">
                02
              </span>


              {/* Gmail Logo */}

              <span className="contact-item-icon gmail-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >

                  <path
                    d="M4 5.5
                       C4 4.67 4.67 4 5.5 4
                       H18.5
                       C19.33 4 20 4.67 20 5.5
                       V18.5
                       C20 19.33 19.33 20 18.5 20
                       H5.5
                       C4.67 20 4 19.33 4 18.5
                       Z"
                    className="gmail-outline"
                  />

                  <path
                    d="M4 6
                       L12 12
                       L20 6"
                    className="gmail-line"
                  />

                </svg>

              </span>


              <div>

                <p className="contact-item-label">
                  PROFESSIONAL EMAIL
                </p>

                <h2>
                  lokeshz.editor@gmail.com
                </h2>

              </div>

            </div>


            <span className="contact-item-arrow">
              ↗
            </span>

          </a>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="contact-closing">

        <p className="contact-eyebrow">
          FOR EDITING PROJECTS & COLLABORATIONS
        </p>

        <h2>
          Your idea.
          <br />
          <em>My edit.</em>
        </h2>

        <p className="contact-closing-text">
          Let's turn it into something worth watching.
        </p>

      </section>

    </main>
  );
}

export default Contact;