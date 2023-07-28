"use client";
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-between p-20">
      <h1 className="section-title">Erreur 404</h1>
      <h1 className="section-title-error text-danger">
        {
          "Oups! La page que vous demandez n'existe pas ou n'est plus disponible."
        }
      </h1>
    </main>
  );
}
