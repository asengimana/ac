"use client";

export default function Gallery({ photos }) {
  return (
    <div className="container mx-auto  lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {photos.map((photo) => (
          <div className="flex w-1/3 lg:w-1/6 flex-wrap" key={photo.id}>
            <div className="w-full p-1 md:p-2">
              <img
                alt={photo.name}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={`/gallery/${photo.URL}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
