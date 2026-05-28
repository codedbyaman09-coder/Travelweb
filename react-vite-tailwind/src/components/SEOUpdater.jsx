import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { apiRequest } from '../lib/api';

const SEOUpdater = () => {
  const location = useLocation();
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    const fetchSeo = async () => {
      // Clean path to get slug
      let slug = location.pathname.substring(1).split('/')[0];
      if (!slug) slug = 'accueil'; // Default to home

      try {
        const response = await apiRequest(`/seo/slug/${slug}`);
        if (response && response.success && response.data) {
          setSeoData(response.data);
        } else {
          setSeoData(null);
        }
      } catch (err) {
        setSeoData(null);
      }
    };
    fetchSeo();
  }, [location.pathname]);

  if (!seoData) return null;

  return (
    <Helmet>
      {seoData.metaTitle && <title>{seoData.metaTitle}</title>}
      {seoData.metaDescription && <meta name="description" content={seoData.metaDescription} />}
      {seoData.metaKeywords && <meta name="keywords" content={seoData.metaKeywords} />}

      {seoData.canonicalUrl && <link rel="canonical" href={seoData.canonicalUrl} />}

      {seoData.ogTitle && <meta property="og:title" content={seoData.ogTitle} />}
      {seoData.ogDescription && <meta property="og:description" content={seoData.ogDescription} />}
      {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />

      {seoData.twitterTitle && <meta name="twitter:title" content={seoData.twitterTitle} />}
      {seoData.twitterDescription && <meta name="twitter:description" content={seoData.twitterDescription} />}
      {seoData.twitterImage && <meta name="twitter:image" content={seoData.twitterImage} />}
      <meta name="twitter:card" content="summary_large_image" />

      {seoData.robots && <meta name="robots" content={seoData.robots} />}

      {seoData.schemaMarkup && (
        <script type="application/ld+json">
          {seoData.schemaMarkup}
        </script>
      )}
    </Helmet>
  );
};

export default SEOUpdater;
