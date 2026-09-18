import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaMarkup?: object | object[];
}

const SEO = ({ 
  title = "Sri Laxmi Ganapathi Enterprises - Premier Manpower & Facility Management Services | Hyderabad, Telangana",
  description = "Leading manpower supply and facility management services in Hyderabad since 2015. 500+ trained professionals, comprehensive solutions for manufacturing, healthcare, technology sectors. Get expert staffing solutions today.",
  keywords = "manpower supply Hyderabad, facility management services, housekeeping services, security services, landscaping services, office support staff, operational teams, staffing solutions, HR outsourcing, professional cleaning services, corporate security, garden maintenance, administrative support, manufacturing manpower, healthcare staffing, technology sector staffing, Telangana manpower services, South India facility management",
  image = "https://slg-enterprises.com/images/og-image.jpg",
  url,
  type = "website",
  schemaMarkup
}: SEOProps) => {
  const location = useLocation();
  const baseDomain = "https://slg-enterprises.com";
  const canonicalUrl = url || `${baseDomain}${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sri Laxmi Ganapathi Enterprises" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
