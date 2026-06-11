import CategoryCard from "../components/CategoryCard";

import neil from "../assets/images/neil.jpg";
import yuri from "../assets/images/yuri.jpg";
import kalpana from "../assets/images/kalpana.jpg";
import sunita from "../assets/images/sunita.jpg";

function Astronauts() {
  return (
    <div className="page-container">
      <h1 className="page-title">👨‍🚀 Astronauts</h1>

      <div className="card-grid">
        <CategoryCard
          image={neil}
          title="Neil Armstrong"
          description="First person on the Moon."
        />

        <CategoryCard
          image={yuri}
          title="Yuri Gagarin"
          description="First human in space."
        />

        <CategoryCard
          image={kalpana}
          title="Kalpana Chawla"
          description="First woman of Indian origin in space."
        />

        <CategoryCard
          image={sunita}
          title="Sunita Williams"
          description="Record-setting space missions."
        />
      </div>
    </div>
  );
}

export default Astronauts;