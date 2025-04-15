import { useParams } from "wouter";
import PropertyDetail from "@/components/properties/PropertyDetail";
import { useQuery } from "@tanstack/react-query";
import { Property } from "@/lib/types";
import { Helmet } from "react-helmet";

const PropertyDetails = () => {
  const { id } = useParams();
  
  const { data: property } = useQuery<Property>({
    queryKey: [`/api/properties/${id}`],
  });

  return (
    <>
      <Helmet>
        <title>{property ? `${property.title} | Perfect Luxury Stays` : 'Property Details | Perfect Luxury Stays'}</title>
        <meta 
          name="description" 
          content={property 
            ? `Experience luxury at ${property.title} in ${property.location.area}, ${property.location.city}. Book your perfect stay today.` 
            : 'Discover luxury accommodations with Perfect Luxury Stays.'
          } 
        />
      </Helmet>
      <PropertyDetail propertyId={id} />
    </>
  );
};

export default PropertyDetails;
