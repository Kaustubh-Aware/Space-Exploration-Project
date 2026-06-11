import CategoryCard from "../components/CategoryCard";

import apollo11 from "../assets/images/apollo11.jpg";
import voyager1 from "../assets/images/voyager1.jpg";
import hubble from "../assets/images/hubble.jpg";
import chandrayaan3 from "../assets/images/chandrayaan3.jpg";
import webb from "../assets/images/webb.jpg";

function Missions() {
  return (
    <div className="page-container">
      <h1 className="page-title">🚀 Space Missions</h1>

      <div className="card-grid">
        <CategoryCard image={apollo11} title="Apollo 11" description="First Moon landing mission." />

        <CategoryCard image={voyager1} title="Voyager 1" description="Farthest human-made object." />

        <CategoryCard image={hubble} title="Hubble Space Telescope" description="Changed our understanding of space." />

        <CategoryCard image={chandrayaan3} title="Chandrayaan-3" description="Successful Indian Moon landing." />

        <CategoryCard image={webb} title="James Webb Space Telescope" description="Most powerful space telescope." />
      </div>
    </div>
  );
}

export default Missions;