import "../styles/about.css";

function About() {
  return (
    <main className="about-page">

      {/* =========================================
          HERO / INTRO
      ========================================= */}

      <section className="about-hero">

        <div className="about-glow"></div>

        <div className="about-hero-content">

          <p className="about-eyebrow">
            ABOUT ME
          </p>

          <h1>
            Still learning.
            <br />
            Still <em>creating.</em>
          </h1>

          <p className="about-hero-description">
            I'm a video editor who believes that
            <br />
            there's always something new to learn.
          </p>

        </div>

        <div className="about-number">
          ABOUT
        </div>

      </section>


      {/* =========================================
          WHO I AM
      ========================================= */}

      <section className="about-introduction">

        <div className="about-section-label">
          <span></span>
          WHO I AM
        </div>

        <div className="about-introduction-grid">

          <div className="about-introduction-title">
            <p>
              THE PERSON
              <br />
              BEHIND THE
              <br />
              <em>EDIT.</em>
            </p>
          </div>

          <div className="about-introduction-text">

            <p>
              I'm Lokesh, a video editor who enjoys turning
              ordinary footage into something people
              want to watch.
            </p>

            <p>
              I don't consider myself a finished editor.
              I'm still learning, experimenting, making
              mistakes, and discovering better ways to
              tell stories through a timeline.
            </p>

            <p>
              Every project gives me something new to
              learn — and that's what keeps me creating.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          LEARNING / PHILOSOPHY
      ========================================= */}

      <section className="about-learning">

        <div className="about-learning-content">

          <p className="about-eyebrow">
            THE PROCESS
          </p>

          <h2>
            Learn.
            <br />
            Experiment.
            <br />
            <em>Improve.</em>
          </h2>

          <p className="about-learning-description">
            Editing is a craft I want to keep improving.
            Every new project is another opportunity to
            understand timing, sound, motion, storytelling,
            and visual language a little better.
          </p>

        </div>

      </section>


      {/* =========================================
    WHAT I CREATE
========================================= */}

<section className="about-work">

  <div className="about-section-label">
    <span></span>
    WHAT I CREATE
  </div>

  <div className="about-work-list">


    {/* FANCY EDITS */}

    <a
      href="/fancy-edits"
      className="about-work-item"
    >

      <span className="about-work-number">
        01
      </span>

      <h3>
        Fancy Edits
      </h3>

      <span className="about-work-arrow">
        ↗
      </span>

    </a>


    {/* MARRIAGE TEASERS */}

    <a
      href="/teasers"
      className="about-work-item"
    >

      <span className="about-work-number">
        02
      </span>

      <h3>
        Marriage Teaser Cuts
      </h3>

      <span className="about-work-arrow">
        ↗
      </span>

    </a>


    {/* INSTAGRAM REELS */}

    <a
      href="/reels"
      className="about-work-item"
    >

      <span className="about-work-number">
        03
      </span>

      <h3>
        Instagram Reels
      </h3>

      <span className="about-work-arrow">
        ↗
      </span>

    </a>

  </div>

</section>


      {/* =========================================
          BECOMING
      ========================================= */}

      <section className="about-becoming">

        <div className="about-becoming-glow"></div>

        <div className="about-becoming-content">

          <p className="about-eyebrow">
            WHAT I'M BECOMING
          </p>

          <h2>
            Not finished.
            <br />
            <em>Not stopping.</em>
          </h2>

          <p className="about-becoming-text">
            I want to become an editor who can take an idea,
            understand the feeling behind it, and turn it
            into something that feels bigger than the footage
            it started with.
          </p>

          <p className="about-becoming-text">
            I'm still on that journey.
            <br />
            And I'm enjoying every step of it.
          </p>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="about-closing">

        <p className="about-eyebrow">
          THE JOURNEY CONTINUES
        </p>

        <h2>
          Still learning.
          <br />
          Still <em>becoming.</em>
        </h2>

        <p className="about-closing-text">
          And there's a lot more left to create.
        </p>

      </section>

    </main>
  );
}

export default About;