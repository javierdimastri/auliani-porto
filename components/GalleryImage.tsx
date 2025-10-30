interface GalleryImageProps {
  image: {
    id: number;
    src: string;
    alt: string;
    category: string;
  };
  onClick: () => void;
}

export default function GalleryImage({ image, onClick }: GalleryImageProps) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square overflow-hidden cursor-pointer bg-accent"
    >
      {image.src ? (
        <>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-pink-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-sm uppercase tracking-wider">
              {image.category}
            </p>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-pink-primary/40">
          <div className="text-center p-8">
            <div className="text-4xl mb-2">□</div>
            <div className="text-xs">Add image to /public/gallery/</div>
          </div>
        </div>
      )}
    </div>
  );
}
