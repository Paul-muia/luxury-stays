import { useState } from 'react';
import { useLocation } from 'wouter';
import { GUEST_OPTIONS, LOCATIONS } from '@/lib/constants';

const SearchSection = () => {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    location: '',
    checkin: '',
    checkout: '',
    guests: '2'
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query string for filtering
    const params = new URLSearchParams();
    if (formData.location) params.append('location', formData.location);
    if (formData.checkin) params.append('checkin', formData.checkin);
    if (formData.checkout) params.append('checkout', formData.checkout);
    if (formData.guests) params.append('guests', formData.guests);
    
    const queryString = params.toString();
    setLocation(`/properties${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 -mt-16 relative z-20">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-dark mb-1">
                Location
              </label>
              <select 
                id="location" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
              >
                {LOCATIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="checkin" className="block text-sm font-medium text-neutral-dark mb-1">
                Check In
              </label>
              <input 
                type="date" 
                id="checkin" 
                name="checkin"
                value={formData.checkin}
                onChange={handleChange}
                className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <label htmlFor="checkout" className="block text-sm font-medium text-neutral-dark mb-1">
                Check Out
              </label>
              <input 
                type="date" 
                id="checkout" 
                name="checkout"
                value={formData.checkout}
                onChange={handleChange}
                className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-neutral-dark mb-1">
                Guests
              </label>
              <select 
                id="guests" 
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-3 border border-neutral rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary"
              >
                {GUEST_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-4 text-center mt-4">
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-md font-medium transition"
              >
                Search Available Properties
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
