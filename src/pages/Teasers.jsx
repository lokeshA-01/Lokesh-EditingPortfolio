import { useRef } from "react";
import "../styles/teasers.css";

function Teasers() {
  const heroVideoRef = useRef(null);

  const openFullscreen = async (videoRef) => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();

      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen video could not be opened:", error);
    }
  };

  return (
    <main className="teasers-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="teasers-hero">

        <video
          ref={heroVideoRef}
          className="teasers-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/MarriageTeaserThumb.jpg"
        >
          <source
            src="/videos/MarriageTeaser1-web.mp4"
            type="video/mp4"
          />
        </video>

        <div className="teasers-hero-overlay"></div>

        <div className="teasers-hero-glow"></div>

        <div className="teasers-hero-content">

          <p className="teasers-eyebrow">
            TEASER PORTFOLIO
          </p>

          <h1>
            TEASERS
          </h1>

          <p className="teasers-hero-description">
            Stories shaped into moments that
            <br />
            make people stop and feel.
          </p>

          <a
            href="#teaser-work"
            className="teasers-scroll-button"
          >
            <span>Explore work</span>

            <span className="teasers-arrow">
              ↓
            </span>
          </a>

        </div>

        <div className="teasers-hero-number">
          02
        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="teasers-intro">

        <div className="teasers-intro-label">
          <span></span>
          THE ART OF THE TEASER
        </div>

        <div className="teasers-intro-content">

          <h2>
            A moment
            <br />
            before the <em>story.</em>
          </h2>

          <p>
            A good teaser doesn't reveal everything.
            It creates curiosity, builds emotion and
            leaves something worth waiting for.
          </p>

        </div>

      </section>


      {/* =========================================
          SELECTED WORK
      ========================================= */}

      <section
        id="teaser-work"
        className="teasers-work"
      >

        <div className="teasers-section-heading">

          <div>

            <p className="teasers-eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Stories made
              <br />
              to <em>linger.</em>
            </h2>

          </div>

          <span className="teasers-work-count">
            04 PROJECTS
          </span>

        </div>


        {/* =========================================
            PROJECT 01 — MARRIAGE
            LOCAL — UNCHANGED
        ========================================= */}

        <TeaserProject
          number="01"
          title={
            <>
              Marriage
              <br />
              Teaser
            </>
          }
          category="WEDDING"
          year="2026"
          description="A cinematic marriage teaser built around emotion, movement and intimate moments."
          tags={["EDITING", "COLOR", "SFX"]}
          video="/videos/MarriageTeaser1-web.mp4"
          poster="/images/MarriageTeaserThumb.jpg"
          type="local"
        />


        {/* =========================================
            PROJECT 02 — KOVIL
            YOUTUBE
        ========================================= */}

        <TeaserProject
          number="02"
          title={
            <>
              Kovil Function
              <br />
              Teaser
            </>
          }
          category="EVENT"
          year="2026"
          description="A vibrant event teaser shaped through rhythm, atmosphere and cinematic pacing."
          tags={["EDITING", "SFX", "COLOR"]}
          video="https://www.youtube.com/embed/ResqNlVlHW8"
          poster="/images/KovilfnThumb.jpg"
          type="youtube"
        />


        {/* =========================================
            PROJECT 03 — THEATRE
            YOUTUBE
        ========================================= */}

        <TeaserProject
          number="03"
          title={
            <>
              Theatre
              <br />
              Ad
            </>
          }
          category="PROMOTIONAL"
          year="2026"
          description="A promotional teaser designed to create impact and anticipation before the show."
          tags={["EDITING", "MOTION", "SFX"]}
          video="https://www.youtube.com/embed/zDszUl77mWw"
          poster="/images/TheatreThumb.jpg"
          type="youtube"
        />


        {/* =========================================
            PROJECT 04 — WONE8
            LOCAL
        ========================================= */}

        <TeaserProject
          number="04"
          title={
            <>
              Wone8 Real Estate
              <br />
              Shop Opening
            </>
          }
          category="COMMERCIAL"
          year="2026"
          description="A commercial opening teaser focused on energy, presentation and visual impact."
          tags={["EDITING", "COLOR", "MOTION"]}
          video="/videos/Wone8realestateTeaser-web.mp4"
          poster="/images/wone8Thumb.jpg"
          type="local"
        />

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="teasers-process">

        <div className="teasers-process-heading">

          <p className="teasers-eyebrow">
            BEHIND THE TEASER
          </p>

          <h2>
            Build the
            <br />
            <em>anticipation.</em>
          </h2>

        </div>


        <div className="teasers-process-list">

          <div className="teasers-process-item">

            <span>01</span>

            <div>
              <h3>Story</h3>

              <p>
                Finding the moments that give the
                teaser its emotional identity.
              </p>
            </div>

          </div>


          <div className="teasers-process-item">

            <span>02</span>

            <div>
              <h3>Rhythm</h3>

              <p>
                Building tension through music,
                movement and carefully timed cuts.
              </p>
            </div>

          </div>


          <div className="teasers-process-item">

            <span>03</span>

            <div>
              <h3>Impact</h3>

              <p>
                Finishing with visuals and sound
                that leave the viewer wanting more.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="teasers-closing">

        <p className="teasers-eyebrow">
          THE NEXT STORY
        </p>

        <h2>
          Leave them
          <br />
          wanting <em>more.</em>
        </h2>

        <p className="teasers-closing-text">
          Every teaser is a beginning.
        </p>

      </section>

    </main>
  );
}


/* =========================================
   REUSABLE PROJECT COMPONENT
========================================= */

function TeaserProject({
  number,
  title,
  category,
  year,
  description,
  tags,
  video,
  poster,
  type = "local",
}) {
  const videoRef = useRef(null);

  const openVideo = async () => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    try {
      await videoElement.play();

      if (videoElement.requestFullscreen) {
        await videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      }
    } catch (error) {
      console.log(
        "Fullscreen video could not be opened:",
        error
      );
    }
  };

  return (
    <article className="teaser-project">

      <div className="teaser-project-visual">

        {type === "youtube" ? (

          <iframe
            className="teaser-project-video"
            src={video}
            title={`${category} teaser`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

        ) : (

          <video
            ref={videoRef}
            className="teaser-project-video"
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source
              src={video}
              type="video/mp4"
            />
          </video>

        )}

        <div className="teaser-project-shade"></div>


        {/* TOP INFO */}

        <div className="teaser-project-top">

          <span>
            {category}
          </span>

          <span>
            {number}
          </span>

        </div>


        {/* VIEW BUTTON */}

        {type === "local" && (

          <div className="teaser-project-center">

            <button
              type="button"
              className="teaser-view-circle"
              onClick={openVideo}
              aria-label={`Play ${category} teaser fullscreen`}
            >
              VIEW
            </button>

          </div>

        )}


        {/* BOTTOM INFO */}

        <div className="teaser-project-bottom">

          <span>
            TEASER
          </span>

          <span>
            {year}
          </span>

        </div>

      </div>


      {/* PROJECT DETAILS */}

      <div className="teaser-project-details">

        <div className="teaser-project-title">

          <p>
            PROJECT {number}
          </p>

          <h3>
            {title}
          </h3>

        </div>


        <div className="teaser-project-description">

          <p>
            {description}
          </p>

          <div className="teaser-tags">

            {tags.map((tag) => (
              <span key={tag}>
                {tag}
              </span>
            ))}

          </div>

        </div>

      </div>

    </article>
  );
}

export default Teasers;