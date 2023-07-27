import DrinksCard from "@/app/components/DrinksCard";
import SectionTitle from "@/app/components/SectionTitle";

export default async function CategoryDrinks({ params }) {
  const res = await fetch("http://localhost:3000/api/drinks");
  const drinks = await res.json();
  const categoryId = params.categoryId;

  const drinksArray = drinks.filter((drink) => {
    return drink.category_id === categoryId;
  });
  const catRes = await fetch("http://localhost:3000/api/categories");
  const categories = await catRes.json();
  const categoriesArray = categories.filter((category) => {
    return category._id.$oid === categoryId;
  });
  return (
    <div className="container my-20 mx-auto md:px-6">
      <section className="mb-32">
        <SectionTitle title={categoriesArray[0].name} />
        <ul className="">
          {drinksArray.map((drink) => (
            <DrinksCard drink={drink} key={drink._id.$oid} />
          ))}
        </ul>
      </section>
    </div>
  );
}
