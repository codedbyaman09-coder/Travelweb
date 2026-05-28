import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { apiUrl } from '../lib/api';

const SEOHead = ({ slug = 'home', defaultTitle = 'Indeora Voyages' }) => {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await fetch(apiUrl(`/seo/page/${slug}`));
        const data = await res.json();
        if (data.success && data.data) {
          setSeo(data.data);
        }
      } catch (err) {
        console.error('SEO fetch error:', err);
      }
    };
    fetchSeo();
  }, [slug]);

  const title = seo?.metaTitle || defaultTitle;
  const description = seo?.metaDescription || 'Indeora Voyages - Votre spécialiste du voyage sur mesure en Inde.';
  const keywords = seo?.metaKeywords || 'voyage inde, sur mesure, rajasthan, kerala, agence locale';
  const url = seo?.canonicalUrl || `https://indeoravoyages.com/${slug === 'home' ? '' : slug}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seo?.ogTitle || title} />
      <meta property="og:description" content={seo?.ogDescription || description} />
      {seo?.ogImage && <meta property="og:image" content={seo.ogImage} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={seo?.twitterTitle || title} />
      <meta property="twitter:description" content={seo?.twitterDescription || description} />
      {seo?.twitterImage && <meta property="twitter:image" content={seo.twitterImage} />}

      {/* Advanced */}
      {seo?.robots && <meta name="robots" content={seo.robots} />}
      {seo?.schemaMarkup && (
        <script type="application/ld+json">
          {seo.schemaMarkup}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
