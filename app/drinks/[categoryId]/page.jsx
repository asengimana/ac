import DrinksCard from "@/app/components/DrinksCard";
import SectionTitle from "@/app/components/SectionTitle";
import categories from "../../data/categories.json";
import drinks from "../../data/drinks.json";
export default function CategoryDrinks({ params }) {
  const categoryId = params.categoryId;

  const drinksArray = drinks.filter((drink) => {
    return drink.category_id === categoryId;
  });

  const categoriesArray = categories.filter((category) => {
    return category._id.$oid === categoryId;
  });
  return (
    <div className="md:container my-5 mx-auto md:px-2 p-1">
      <section className="mb-32" id="drinks">
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
