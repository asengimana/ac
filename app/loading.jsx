export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-between p-20">
      <p className="text-white loader-text">Chargement en cours...</p>
      <div class="lds-facebook">
        <div className="bg-success"></div>
        <div className="bg-warning"></div>
        <div className="bg-danger"></div>
      </div>
    </main>
  );
}
