import { useState, useEffect } from 'react';
import { Image } from '@/lib/types';

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle keyboard events for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => 
          (prev - 1 + images.length) % images.length
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => 
          (prev + 1) % images.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, images.length]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative mb-12" id="property-gallery">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-2 lg:col-span-2 h-[400px] rounded-lg overflow-hidden">
            <img 
              src={images[0]?.url} 
              alt={images[0]?.caption} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openLightbox(0)}
            />
          </div>
          <div className="hidden md:grid md:grid-rows-2 gap-4">
            {images.slice(1, 3).map((image, index) => (
              <div key={image.id} className="h-[190px] rounded-lg overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openLightbox(index + 1)}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="absolute bottom-4 right-4 bg-white hover:bg-neutral-light text-primary px-4 py-2 rounded-md font-medium transition shadow-md"
          onClick={() => openLightbox(0)}
        >
          <i className="fas fa-images mr-2"></i> View All Photos
        </button>
      </div>

      {/* Lightbox */}
      <div className={`gallery-lightbox ${lightboxOpen ? 'active' : ''}`} id="galleryLightbox">
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-2xl z-10" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div className="flex items-center justify-between w-full px-4 absolute z-10">
            <button 
              className="text-white text-4xl" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="text-white text-4xl" 
              onClick={nextImage}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={images[currentImageIndex]?.url} 
              alt={images[currentImageIndex]?.caption} 
              className="max-w-[80%] max-h-[80vh] object-contain"
            />
          </div>
          
          <div className="absolute bottom-8 text-white text-center">
            <p className="text-lg mb-2">{images[currentImageIndex]?.caption}</p>
            <p className="text-sm">Image {currentImageIndex + 1} of {images.length}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
