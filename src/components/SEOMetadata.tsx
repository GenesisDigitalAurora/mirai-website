import Head from 'next/head';

interface SEOMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  siteName?: string;
  locale?: string;
  noIndex?: boolean;
}

export default function SEOMetadata({
  title = "MIRAI - Firma de Abogados en México | Asesoría Legal Especializada",
  description = "MIRAI es una firma de abogados líder en México, especializada en derecho corporativo, comercio exterior, propiedad intelectual y más. Asesoría legal personalizada para empresas e individuos.",
  keywords = "abogados México, firma legal, derecho corporativo, comercio exterior, propiedad intelectual, asesoría legal, bufete abogados, legal México, MIRAI abogados",
  url = "https://mirai.legal",
  image = "https://mirai.legal/MiraiShareImage.jpg",
  type = "website",
  author = "MIRAI - Asesores Legales Mirai, S.C.",
  publishedTime,
  modifiedTime,
  siteName = "MIRAI - Firma de Abogados",
  locale = "es_MX",
  noIndex = false
}: SEOMetadataProps) {
  
  const fullTitle = title.includes("MIRAI") ? title : `${title} | MIRAI`;
  const canonicalUrl = url.endsWith('/') ? url.slice(0, -1) : url;

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* URL Canónica */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} - MIRAI Abogados`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} - MIRAI Abogados`} />
      <meta name="twitter:site" content="@MiraiAbogados" />
      <meta name="twitter:creator" content="@MiraiAbogados" />
      
      {/* LinkedIn */}
      <meta property="linkedin:title" content={fullTitle} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
      
      {/* WhatsApp */}
      <meta property="whatsapp:title" content={fullTitle} />
      <meta property="whatsapp:description" content={description} />
      <meta property="whatsapp:image" content={image} />
      
      {/* Metadatos adicionales para artículos */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Legal" />
          <meta property="article:tag" content="Abogados" />
          <meta property="article:tag" content="México" />
          <meta property="article:tag" content="Asesoría Legal" />
        </>
      )}
      
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "MIRAI - Asesores Legales Mirai, S.C.",
            "alternateName": "MIRAI Abogados",
            "description": description,
            "url": canonicalUrl,
            "logo": "https://mirai.legal/MIRAI_MainLogo.svg",
            "image": image,
            "telephone": "+52-55-5555-5555", // Actualizar con el teléfono real
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dirección de MIRAI", // Actualizar con dirección real
              "addressLocality": "Ciudad de México",
              "addressRegion": "CDMX",
              "addressCountry": "MX"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "19.4326", // Actualizar con coordenadas reales
              "longitude": "-99.1332"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "México"
              }
            ],
            "serviceType": [
              "Derecho Corporativo",
              "Comercio Exterior", 
              "Propiedad Intelectual",
              "Derecho Laboral",
              "Derecho Fiscal",
              "Derecho Inmobiliario"
            ],
            "sameAs": [
              "https://www.linkedin.com/company/miraiabogados/",
              "https://www.facebook.com/profile.php?id=61575805150590"
            ],
            "foundingDate": "2024", // Actualizar con fecha real
            "founder": {
              "@type": "Person",
              "name": "Fundador MIRAI" // Actualizar con nombre real
            }
          })
        }}
      />
    </Head>
  );
}
