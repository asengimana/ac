"use client";

import Link from "next/link";
export default function CategoryCard({ category }) {
  return (
    <div
      className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
      data-te-ripple-init
      data-te-ripple-color="light"
      key={category._id.$oid}
    >
      <img
        src={`/images/${category.categoryImage}`}
        className="w-full align-middle transition duration-300 ease-linear"
        alt={category.name}
      />
      <Link href={`/drinks/${category._id.$oid}`} key={category._id.$oid}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
          <div className="flex h-full items-end justify-start">
            <div className="m-6 text-white">
              <h5 className="mb-3 text-lg font-bold">{category.name}</h5>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
      </Link>
    </div>
  );
}
