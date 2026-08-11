import { useRef } from "react";
import "../styles/reels.css";

function Reels() {
  const heroVideoRef = useRef(null);

  const openFullscreen = async (videoRef) => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();

      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        await video.webkitRequestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen error:", error);
    }
  };

  return (
    <main className="reels-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="reels-hero">

        <video
          ref={heroVideoRef}
          className="reels-hero-video"
          src="/videos/My cinematic edit.mp4"
          muted
          loop
          playsInline
          autoPlay
          onClick={() => openFullscreen(heroVideoRef)}
        />

        <div className="reels-hero-overlay"></div>

        <div className="reels-hero-glow"></div>

        <div className="reels-hero-content">

          <p className="reels-eyebrow">
            Selected Reels
          </p>

          <h1>
            Motion
            <span>in every frame.</span>
          </h1>

          <p className="reels-hero-description">
            Cinematic edits built around rhythm, emotion,
            atmosphere, and visual storytelling.
          </p>

          <a
            href="#reels-work"
            className="reels-scroll-button"
          >
            Explore Work

            <span className="reels-arrow">
              ↓
            </span>
          </a>

        </div>

        <div className="reels-hero-number">
          01 / 04
        </div>

        <div className="reels-hero-project-name">
          <span>Hero Reel</span>
          <strong>My Cinematic Edit</strong>
        </div>

      </section>


      {/* ========================================
          INTRO
      ======================================== */}

      <section className="reels-intro">

        <div className="reels-intro-label">
          <span></span>
          THE COLLECTION
        </div>

        <div className="reels-intro-content">

          <h2>
            Short form.
            <br />
            <em>Big feeling.</em>
          </h2>

          <p>
            A selection of edits created to capture a
            moment, build an atmosphere, and leave an
            impression long after the frame ends.
          </p>

        </div>

      </section>


      {/* ========================================
          WORK
      ======================================== */}

      <section
        id="reels-work"
        className="reels-work"
      >

        <div className="reels-section-heading">

          <h2>
            Selected <em>Work</em>
          </h2>

          <span className="reels-work-count">
            04 PROJECTS
          </span>

        </div>


        {/* PROJECT 01 */}

        <ReelProject
          index="01"
          title="My Cinematic Edit"
          type="Cinematic Edit"
          src="/videos/My cinematic edit.mp4"
          description="A cinematic visual piece built around atmosphere, rhythm, emotion, and carefully crafted visual moments."
          tags={["CINEMATIC", "STORY", "MOTION"]}
        />


        {/* PROJECT 02 */}

        <ReelProject
          index="02"
          title="Achilles Edit"
          type="Cinematic Edit"
          src="/videos/Achilles Edit.mp4"
          description="A dramatic character edit built around intensity, rhythm, and cinematic atmosphere."
          tags={["CINEMATIC", "CHARACTER", "EDIT"]}
        />


        {/* PROJECT 03 */}

        <ReelProject
          index="03"
          title="Captain America Edit"
          type="Character Edit"
          src="/videos/Captain America Edit.mp4"
          description="A heroic edit shaped through powerful moments, pacing, and cinematic impact."
          tags={["MARVEL", "CINEMATIC", "CHARACTER"]}
        />


        {/* PROJECT 04 */}

        <ReelProject
          index="04"
          title="Clg Protest Edit"
          type="Event Edit"
          src="/videos/Clg Protest Edit.mp4"
          description="A raw visual piece capturing energy, movement, and the atmosphere of a real moment."
          tags={["EVENT", "STORY", "MOTION"]}
        />

      </section>


      {/* ========================================
          CLOSING
      ======================================== */}

      <section className="reels-closing">

        <p className="reels-closing-label">
          END OF COLLECTION
        </p>

        <h2>
          Every frame
          <br />
          <em>has a story.</em>
        </h2>

        <p className="reels-closing-text">
          More stories are always being edited.
        </p>

      </section>

    </main>
  );
}


/* =========================================
   REEL PROJECT COMPONENT
========================================= */

function ReelProject({
  index,
  title,
  type,
  src,
  description,
  tags
}) {

  const videoRef = useRef(null);

  const openFullscreen = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      await video.play();

      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        await video.webkitRequestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen error:", error);
    }
  };

  return (
    <article className="reel-project">

      <div className="reel-project-media">

        <video
          ref={videoRef}
          className="reel-project-video"
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="reel-project-shade"></div>


        {/* TOP INFO */}

        <div className="reel-project-top">

          <span>
            REEL / {index}
          </span>

          <span>
            {type}
          </span>

        </div>


        {/* VIEW BUTTON */}

        <button
          className="reel-project-view"
          onClick={openFullscreen}
          aria-label={`View ${title} fullscreen`}
        >
          VIEW
        </button>


        {/* BOTTOM INFO */}

        <div className="reel-project-bottom">

          <span>
            16 : 9
          </span>

          <span>
            FULLSCREEN ↗
          </span>

        </div>

      </div>


      {/* DETAILS */}

      <div className="reel-project-details">

        <div className="reel-project-title">

          <p>
            {index} / SELECTED REEL
          </p>

          <h3>
            {title}
          </h3>

        </div>


        <div className="reel-project-description">

          <p>
            {description}
          </p>

          <div className="reel-tags">

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

export default Reels;