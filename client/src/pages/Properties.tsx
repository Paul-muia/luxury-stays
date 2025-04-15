import PropertyGrid from "@/components/properties/PropertyGrid";
import { Helmet } from "react-helmet";

const Properties = () => {
  return (
    <>
      <Helmet>
        <title>Browse Properties | Perfect Luxury Stays</title>
        <meta name="description" content="Explore our collection of luxury properties in Nairobi. Find the perfect accommodation for your stay." />
      </Helmet>
      <section className="py-16 bg-neutral-50" id="properties">
        <PropertyGrid />
      </section>
    </>
  );
};

export default Properties;
