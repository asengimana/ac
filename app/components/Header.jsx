"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function Header({ bg }) {
  useEffect(() => {
    const init = async () => {
      const { Collapse, Ripple, initTE } = await import("tw-elements");
      initTE({ Collapse, Ripple });
    };
    init();
  }, []);
  return (
    <header>
      {/* Navbar */}
      <nav
        className="sticky top-0 z-10 flex w-full items-center  bg-white py-2 text-black shadow-lg focus:text-neutral-700 dark:bg-black dark:text-white md:flex-wrap justify-center uppercase"
        data-te-navbar-ref
      >
        <div className="px-0">
          {/* Hamburger menu button */}
          <button
            className="border-0 bg-transparent px-2 py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white md:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentE"
            aria-controls="navbarSupportedContentE"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger menu icon */}
            <span className="[&>svg]:w-7 text-danger-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>

          {/* Navigation links */}
          <div
            className="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
            id="navbarSupportedContentE"
            data-te-collapse-item
          >
            <ul
              className="mr-auto flex flex-col md:flex-row"
              data-te-navbar-nav-ref
            >
              <li data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out md:p-2 hover:text-success-900"
                  href="/"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Accueil
                </Link>
              </li>
              <li data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out md:p-2 hover:text-warning-900"
                  href="/drinks"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  La carte
                </Link>
              </li>
              <li data-te-nav-item-ref>
                <Link
                  className="block transition duration-150 ease-in-out hover:text-danger-900 md:p-2"
                  href="#footer"
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/AfricanChildrenBar"
            target="_blank"
            className="mr-6 text-success dark:text-success hover:text-danger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/africanchildren.bar/"
            target="_blank"
            className="mr-6 text-warning dark:text-warning hover:text-success-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero section with background image, heading, subheading and button */}
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url("/images/${bg}")`,
          height: "400px",
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <Link href="/">
                <h2 className="mb-4 text-4xl uppercase brand-name drop-shadow-2xl">
                  <span className="text-danger-600">African</span>
                  <span className="text-success-700"> Children</span>
                </h2>
              </Link>
              <h4 className="mb-6 text-xl font-semibold uppercase drop-shadow-2xl">
                <span className="text-danger-600">Rhumerie</span>{" "}
                <span className="text-yellow-500">-</span>{" "}
                <span className="text-success-700">Cocktails</span>
              </h4>
              <h5 className="mb-6 text-sm drop-shadow-2xl font-bold">
                Plongez au cœur de l’Afrique et dégustez nos cocktails maison
                sur des rythmes Afrobeat, Reggae...
              </h5>
              <Link href="/">
                <button
                  type="button"
                  className="rounded border-2 bg-danger-600 border-danger-600 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-success-700 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Accueil
                </button>
              </Link>{" "}
              <Link href="/drinks">
                <button
                  type="button"
                  className="rounded border-2 bg-success-700 border-success-700 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  La Carte
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
