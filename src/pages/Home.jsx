import earth from "../assets/images/earth.png";
import planets from "../assets/images/saturn.jpg";
import stars from "../assets/images/sun.jpg";
import galaxy from "../assets/images/milkyway.jpg";
import mission from "../assets/images/voyager1.jpg";

import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="shooting-star"></div>
<div className="shooting-star star2"></div>
<div className="shooting-star star3"></div>

        <div className="hero-text">
          <h1>EXPLORE THE UNIVERSE</h1>

          <p>
            Journey through planets, stars,
            galaxies and legendary space missions.
          </p>

          <button>Start Exploring</button>
        </div>

      <div className="hero-image">
    <div className="earth-container">
      <img
        src={earth}
        alt="Earth"
        className="earth"
      />
    </div>
  </div>

      </section>

      <section className="categories">

        <CategoryCard
          image={planets}
          title="Planets"
          description="Explore our solar system."
        />

        <CategoryCard
          image={stars}
          title="Stars"
          description="Discover stellar giants."
        />

        <CategoryCard
          image={galaxy}
          title="Galaxies"
          description="Travel through deep space."
        />

        <CategoryCard
          image={mission}
          title="Missions"
          description="Legendary space journeys."
        />

      </section>

      <section className="fact-card">
        <h2>🌠 Did You Know?</h2>

        <p>
          A day on Venus is longer than a year on Venus.
        </p>
      </section>

      <section className="stats">

        <div className="stat">
          <h2>8</h2>
          <p>Planets</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Known Moons</p>
        </div>

        <div className="stat">
          <h2>200B+</h2>
          <p>Stars</p>
        </div>

        <div className="stat">
          <h2>13.8B</h2>
          <p>Years</p>
        </div>

      </section>
    </>
  );
}

export default Home;