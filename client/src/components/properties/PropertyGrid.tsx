import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PropertyCard from './PropertyCard';
import PropertyFilter from './PropertyFilter';
import { Property } from '@/lib/types';
import { filterProperties } from '@/lib/utils';
import { Pagination } from '@/components/ui/pagination';

const PropertyGrid = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });
  
  const { data: properties, isLoading } = useQuery<Property[]>({
    queryKey: ['/api/properties'],
  });

  // Apply filters to properties
  const filteredProperties = properties ? filterProperties(properties, filters) : [];
  
  // Pagination
  const propertiesPerPage = 12;
  const totalPages = Math.ceil((filteredProperties?.length || 0) / propertiesPerPage);
  const currentProperties = filteredProperties.slice(
    (page - 1) * propertiesPerPage,
    page * propertiesPerPage
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">Browse Our Properties</h2>
            <p className="text-lg text-neutral-dark max-w-2xl">Find your perfect luxury stay from our extensive collection of premium properties.</p>
          </div>
          <div className="mt-6 md:mt-0 animate-pulse flex space-x-4">
            <div className="h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-10 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white h-80 animate-pulse">
              <div className="h-56 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4 font-display">Browse Our Properties</h2>
          <p className="text-lg text-neutral-dark max-w-2xl">Find your perfect luxury stay from our extensive collection of premium properties.</p>
        </div>
        
        <PropertyFilter filters={filters} setFilters={setFilters} />
      </div>
      
      {currentProperties.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold mb-4">No properties found</h3>
          <p className="text-neutral-dark mb-6">Try adjusting your filters to find more properties.</p>
          <button 
            onClick={() => setFilters({ location: '', propertyType: '', priceRange: '', bedrooms: '' })}
            className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-md transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <Pagination pageCount={totalPages} page={page} onPageChange={setPage} /> 
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyGrid;
