import { useRef } from "react";
import "../styles/fancy-edits.css";

function FancyEdits() {

  const videoRefs = useRef([]);


  /* =========================================
     LOCAL VIDEO FULLSCREEN
     Used only for Project 01
  ========================================= */

  const openLocalFullscreen = async (index) => {

    const video = videoRefs.current[index];

    if (!video) return;

    try {

      await video.play();

      if (video.requestFullscreen) {

        await video.requestFullscreen();

      } else if (video.webkitRequestFullscreen) {

        await video.webkitRequestFullscreen();

      }

    } catch (error) {

      console.log(
        "Fullscreen video could not be opened:",
        error
      );

    }

  };


  /* =========================================
     YOUTUBE VIDEO
     Used for Projects 02, 03 and 04
  ========================================= */

  const openYouTube = (videoId) => {

    window.open(
      `https://www.youtube.com/watch?v=${videoId}`,
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (
    <main className="fancy-page">


      {/* =========================================
          HERO
      ========================================= */}

      <section className="fancy-hero">

        <video
          className="fancy-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/videos/fancy-hero-web.mp4"
            type="video/mp4"
          />
        </video>

        <div className="fancy-hero-overlay"></div>

        <div className="fancy-hero-glow"></div>


        <div className="fancy-hero-content">

          <p className="fancy-eyebrow">
            VIDEO EDITING PORTFOLIO
          </p>

          <h1>
            FANCY
            <span>EDITS</span>
          </h1>

          <p className="fancy-hero-description">
            Cinematic edits crafted with rhythm,
            atmosphere and attention to every frame.
          </p>


          <a
            href="#fancy-work"
            className="fancy-scroll-button"
          >
            <span>
              Explore work
            </span>

            <span className="fancy-arrow">
              ↓
            </span>
          </a>

        </div>


        <div className="fancy-hero-number">
          01
        </div>

      </section>



      {/* =========================================
          INTRO
      ========================================= */}

      <section className="fancy-intro">

        <div className="fancy-intro-label">
          <span></span>
          THE CRAFT
        </div>


        <div className="fancy-intro-content">

          <h2>
            Turning footage
            <br />
            into <em>feeling.</em>
          </h2>


          <p>
            Every edit has a rhythm.
            Every cut has a purpose.
            I focus on creating visuals that
            don't just look good — they feel right.
          </p>

        </div>

      </section>



      {/* =========================================
          SELECTED WORK
      ========================================= */}

      <section
        id="fancy-work"
        className="fancy-work"
      >


        <div className="fancy-section-heading">

          <div>

            <p className="fancy-eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Edits that
              <br />
              speak <em>visually.</em>
            </h2>

          </div>


          <span className="fancy-work-count">
            04 EDITS
          </span>

        </div>



        {/* =========================================
            PROJECT 01
            LOCAL VIDEO
        ========================================= */}

        <article className="fancy-project fancy-project-main">

          <div className="fancy-project-media">

            <video
              ref={(el) => {
                videoRefs.current[0] = el;
              }}
              className="fancy-project-video"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/fancy-hero-web.mp4"
                type="video/mp4"
              />
            </video>


            <div className="fancy-project-shade"></div>


            <div className="fancy-project-top">

              <span>
                FANCY EDITS
              </span>

              <span>
                01
              </span>

            </div>


            <button
              type="button"
              className="fancy-project-view"
              onClick={() => openLocalFullscreen(0)}
            >
              VIEW
            </button>


            <div className="fancy-project-bottom">

              <span>
                CINEMATIC
              </span>

              <span>
                2026
              </span>

            </div>

          </div>


          <div className="fancy-project-details">

            <div>

              <p className="fancy-project-label">
                FEATURED EDIT
              </p>

              <h3>
                Cinematic
                <br />
                Visual Story
              </h3>

            </div>


            <div className="fancy-project-description">

              <p>
                A visual edit built around movement,
                atmosphere, sound design and cinematic
                pacing.
              </p>


              <div className="fancy-tags">

                <span>EDITING</span>
                <span>SFX</span>
                <span>COLOR</span>
                <span>VFX</span>

              </div>

            </div>

          </div>

        </article>



        {/* =========================================
            PROJECT 02 — GHOSTED
            YOUTUBE
        ========================================= */}

        <article className="fancy-project fancy-project-ghosted">

          <div className="fancy-project-heading-row">

            <div>

              <p className="fancy-project-index">
                02
              </p>

              <h3>
                Ghosted
              </h3>

            </div>


            <span className="fancy-project-type">
              PORTRAIT EDIT
            </span>

          </div>


          <div className="fancy-portrait-wrap">

            <div className="fancy-project-media">

              <iframe
                className="fancy-project-video"
                src="https://www.youtube.com/embed/J_iYZFkO4Ts?rel=0&modestbranding=1"
                title="Ghosted Movie Edit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>


              <div className="fancy-project-shade"></div>


              <button
                type="button"
                className="fancy-project-view"
                onClick={() =>
                  openYouTube("J_iYZFkO4Ts")
                }
              >
                VIEW
              </button>

            </div>

          </div>


          <div className="fancy-project-bottom-info">

            <p>
              A vertical cinematic edit focused on
              atmosphere, pacing and visual emotion.
            </p>


            <div className="fancy-tags">

              <span>EDITING</span>
              <span>SFX</span>
              <span>COLOR</span>

            </div>

          </div>

        </article>



        {/* =========================================
            PROJECT 03 — DC
            YOUTUBE
        ========================================= */}

        <article className="fancy-project fancy-project-wide">

          <div className="fancy-project-heading-row">

            <div>

              <p className="fancy-project-index">
                03
              </p>

              <h3>
                DC Movie Edit
              </h3>

            </div>


            <span className="fancy-project-type">
              CINEMATIC EDIT
            </span>

          </div>


          <div className="fancy-project-media">

            <iframe
              className="fancy-project-video"
              src="https://www.youtube.com/embed/DDUC-FNYNYM?rel=0&modestbranding=1"
              title="DC Movie Edit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>


            <div className="fancy-project-shade"></div>


            <div className="fancy-project-top">

              <span>
                DC
              </span>

              <span>
                03
              </span>

            </div>


            <button
              type="button"
              className="fancy-project-view"
              onClick={() =>
                openYouTube("DDUC-FNYNYM")
              }
            >
              VIEW
            </button>

          </div>


          <div className="fancy-project-bottom-info">

            <p>
              Built around cinematic composition,
              powerful transitions and controlled
              sound design.
            </p>


            <div className="fancy-tags">

              <span>EDITING</span>
              <span>SFX</span>
              <span>VFX</span>
              <span>COLOR</span>

            </div>

          </div>

        </article>



        {/* =========================================
            PROJECT 04 — THALAPATHY
            YOUTUBE
        ========================================= */}

        <article className="fancy-project fancy-project-thalapathy">

          <div className="fancy-project-heading-row">

            <div>

              <p className="fancy-project-index">
                04
              </p>

              <h3>
                Thalapathy
                <br />
                Vijay
              </h3>

            </div>


            <span className="fancy-project-type">
              VISUAL EDIT
            </span>

          </div>


          <div className="fancy-project-media">

            <iframe
              className="fancy-project-video"
              src="https://www.youtube.com/embed/dMRm13YXAEg?rel=0&modestbranding=1"
              title="Thalapathy Vijay Edit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>


            <div className="fancy-project-shade"></div>


            <div className="fancy-project-top">

              <span>
                THALAPATHY
              </span>

              <span>
                04
              </span>

            </div>


            <button
              type="button"
              className="fancy-project-view"
              onClick={() =>
                openYouTube("dMRm13YXAEg")
              }
            >
              VIEW
            </button>


            <div className="fancy-project-bottom">

              <span>
                CINEMATIC
              </span>

              <span>
                2026
              </span>

            </div>

          </div>


          <div className="fancy-project-bottom-info">

            <p>
              A character-driven visual edit shaped
              through rhythm, energy and cinematic
              presentation.
            </p>


            <div className="fancy-tags">

              <span>EDITING</span>
              <span>SFX</span>
              <span>COLOR</span>

            </div>

          </div>

        </article>



        {/* =========================================
            MORE WORK
        ========================================= */}

        <div className="fancy-coming">

          <div className="fancy-coming-line"></div>


          <div className="fancy-coming-content">

            <span>
              MORE WORK
            </span>

            <p>
              More cinematic edits are being added.
            </p>

          </div>


          <span className="fancy-coming-number">
            05
          </span>

        </div>

      </section>



      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="fancy-process">

        <div className="fancy-process-heading">

          <p className="fancy-eyebrow">
            BEHIND THE EDIT
          </p>


          <h2>
            More than
            <br />
            just <em>cuts.</em>
          </h2>

        </div>


        <div className="fancy-process-list">


          <div className="fancy-process-item">

            <span>
              01
            </span>

            <div>

              <h3>
                Rhythm
              </h3>

              <p>
                Building the edit around movement,
                music and timing.
              </p>

            </div>

          </div>


          <div className="fancy-process-item">

            <span>
              02
            </span>

            <div>

              <h3>
                Atmosphere
              </h3>

              <p>
                Using color, sound and motion to
                create a cinematic mood.
              </p>

            </div>

          </div>


          <div className="fancy-process-item">

            <span>
              03
            </span>

            <div>

              <h3>
                Detail
              </h3>

              <p>
                The small transitions, SFX and
                finishing touches that complete the frame.
              </p>

            </div>

          </div>


        </div>

      </section>



      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="fancy-closing">

        <p className="fancy-eyebrow">
          MORE TO COME
        </p>


        <h2>
          This is only
          <br />
          the <em>beginning.</em>
        </h2>


        <p className="fancy-closing-text">
          More stories. More frames. More edits.
        </p>

      </section>


    </main>
  );
}

export default FancyEdits;