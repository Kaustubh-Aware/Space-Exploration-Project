import CategoryCard from "../components/CategoryCard";

import milkyway from "../assets/images/milkyway.jpg";
import andromeda from "../assets/images/andromeda.jpg";
import whirlpool from "../assets/images/whirlpool.jpg";
import sombrero from "../assets/images/sombrero.jpg";

function Galaxies() {
  return (
    <div className="page-container">
      <h1 className="page-title">🌌 Galaxies</h1>

      <div className="card-grid">
        <CategoryCard image={milkyway} title="Milky Way" description="Our home galaxy" />

        <CategoryCard image={andromeda} title="Andromeda" description="Closest major galaxy" />

        <CategoryCard image={whirlpool} title="Whirlpool Galaxy" description="Spiral galaxy" />

        <CategoryCard image={sombrero} title="Sombrero Galaxy" description="Bright central bulge" />
      </div>
    </div>
  );
}

export default Galaxies;