import CategoryCard from "../components/CategoryCard";
import SectionTitle from "../components/SectionTitle";
import categories from "../data/categories.json";
export default function DrinksCategories() {
  return (
    <div className="md:container my-5 mx-auto md:px-6 p-1 lg:p-0">
      <section className="mb-30">
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
