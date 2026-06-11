function CategoryCard({ image, title, description, fact }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        {fact && (
          <p className="fact">
            <strong>Fun Fact:</strong> {fact}
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryCard;