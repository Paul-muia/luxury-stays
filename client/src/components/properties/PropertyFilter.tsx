import { BEDROOM_OPTIONS, LOCATIONS, PRICE_RANGES, PROPERTY_TYPES } from '@/lib/constants';
import { FilterOptions } from '@/lib/types';

interface PropertyFilterProps {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
}

const PropertyFilter = ({ filters, setFilters }: PropertyFilterProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="mt-6 md:mt-0 flex flex-wrap gap-4">
      <select
        name="propertyType"
        value={filters.propertyType}
        onChange={handleFilterChange}
        className="border border-neutral rounded-md p-2 focus:ring-2 focus:ring-secondary focus:border-secondary"
      >
        {PROPERTY_TYPES.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <select
        name="priceRange"
        value={filters.priceRange}
        onChange={handleFilterChange}
        className="border border-neutral rounded-md p-2 focus:ring-2 focus:ring-secondary focus:border-secondary"
      >
        {PRICE_RANGES.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <select
        name="bedrooms"
        value={filters.bedrooms}
        onChange={handleFilterChange}
        className="border border-neutral rounded-md p-2 focus:ring-2 focus:ring-secondary focus:border-secondary"
      >
        {BEDROOM_OPTIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <select
        name="location"
        value={filters.location}
        onChange={handleFilterChange}
        className="border border-neutral rounded-md p-2 focus:ring-2 focus:ring-secondary focus:border-secondary"
      >
        {LOCATIONS.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PropertyFilter;
