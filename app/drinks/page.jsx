import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
export default async function DrinksCategories() {
  const res = await fetch("http://localhost:3000/api/categories");
  const categories = await res.json();

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <SectionTitle title="La carte" />

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard category={category} key={category._id.$oid} />
          ))}
        </div>
      </section>
    </div>
  );
}
