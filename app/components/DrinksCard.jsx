"use client";
export default function DrinksCard({ drink }) {
  return (
    <li className="w-full border-dotted border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 text-black">
      <p className="flex justify-between items-center">
        <span className="capitalize font-semibold">{drink.name}</span>
        <span className="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-secondary-600 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-white">
          {drink.price}€
        </span>
      </p>
      <p className="text-xs text-white">{drink.ingredients}</p>
    </li>
  );
}
