import CategoryCard from "../components/CategoryCard";

import mercury from "../assets/images/mercury.jpg";
import venus from "../assets/images/venus.jpg";
import earth from "../assets/images/earth.png";
import mars from "../assets/images/mars.jpg";
import jupiter from "../assets/images/jupiter.jpg";
import saturn from "../assets/images/saturn.jpg";
import uranus from "../assets/images/uranus.jpg";
import neptune from "../assets/images/neptune.jpg";

function Planets() {
  return (
    <div className="page-container">
      <h1 className="page-title">🪐 Planets</h1>

      <div className="card-grid">
        <CategoryCard image={mercury} title="Mercury" description="Closest planet to the Sun" fact="No atmosphere" />

        <CategoryCard image={venus} title="Venus" description="Hottest planet" fact="Thick toxic atmosphere" />

        <CategoryCard image={earth} title="Earth" description="Only known planet with life" fact="71% covered by water" />

        <CategoryCard image={mars} title="Mars" description="The Red Planet" fact="Home to Olympus Mons" />

        <CategoryCard image={jupiter} title="Jupiter" description="Largest planet" fact="Great Red Spot storm" />

        <CategoryCard image={saturn} title="Saturn" description="Famous ring system" fact="Gas giant" />

        <CategoryCard image={uranus} title="Uranus" description="Rotates on its side" fact="Ice giant" />

        <CategoryCard image={neptune} title="Neptune" description="Strongest winds" fact="Farthest planet" />
      </div>
    </div>
  );
}

export default Planets;