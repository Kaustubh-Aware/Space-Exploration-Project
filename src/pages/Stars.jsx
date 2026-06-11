import CategoryCard from "../components/CategoryCard";

import sun from "../assets/images/sun.jpg";
import redgiant from "../assets/images/redgiant.jpg";
import whitedwarf from "../assets/images/whitedwarf.jpg";
import neutronstar from "../assets/images/neutronstar.jpg";
import supernova from "../assets/images/supernova.jpg";

function Stars() {
  return (
    <div className="page-container">
      <h1 className="page-title">⭐ Stars</h1>

      <div className="card-grid">
        <CategoryCard image={sun} title="Sun" description="Center of our Solar System" />

        <CategoryCard image={redgiant} title="Red Giant" description="Large aging star" />

        <CategoryCard image={whitedwarf} title="White Dwarf" description="Remnant of a dead star" />

        <CategoryCard image={neutronstar} title="Neutron Star" description="Extremely dense" />

        <CategoryCard image={supernova} title="Supernova" description="Explosive stellar death" />
      </div>
    </div>
  );
}

export default Stars;