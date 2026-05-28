import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { apiRequest } from '../lib/api';

const SEO = ({ pageType = 'static', customSlug = null, dynamicData = null }) => {
  const location = useLocation();
  const { slug: routeSlug } = useParams();
  const [metaData, setMetaData] = useState(null);

  useEffect(() => {
    // If we have full dynamic data passed directly (like from BlogDetail/DestinationDetail), no need to fetch
    if (dynamicData) {
      setMetaData({
        metaTitle: dynamicData.title ? `${dynamicData.title} | Indeora` : '',
        metaDescription: dynamicData.description || '',
        metaKeywords: dynamicData.keywords || '',
        canonicalUrl: dynamicData.canonicalUrl || `https://indeoravoyages.com${location.pathname}`,
        robotsTag: 'index, follow',
        ogTitle: dynamicData.title || '',
        ogDescription: dynamicData.description || '',
        ogImage: dynamicData.image || '',
        ogUrl: `https://indeoravoyages.com${location.pathname}`,
        twitterTitle: dynamicData.title || '',
        twitterDescription: dynamicData.description || '',
        twitterImage: dynamicData.image || '',
        twitterCardType: 'summary_large_image'
      });
      return;
    }

    const fetchMeta = async () => {
      let endpoint = '';
      
      if (pageType === 'blog-detail') {
        endpoint = `/meta/slug/${customSlug || routeSlug}`;
      } else if (pageType === 'destination-detail') {
        endpoint = `/meta/slug/${customSlug || routeSlug}`;
      } else {
        const pageUrl = location.pathname;
        endpoint = `/meta/page/${encodeURIComponent(pageUrl)}`;
      }

      try {
        const response = await apiRequest(endpoint);
        if (response && response.success && response.data) {
          setMetaData(response.data);
        } else {
          setMetaData(null);
        }
      } catch (error) {
        setMetaData(null);
      }
    };

    fetchMeta();
  }, [location.pathname, pageType, customSlug, routeSlug, dynamicData]);

  const defaultMeta = {
    metaTitle: "Voyage sur mesure en Inde | Indeora",
    metaDescription: "Découvrez des voyages sur mesure en Inde avec Indeora. Agence de voyage locale experte.",
    metaKeywords: "voyage sur mesure en inde, agence locale inde",
    robotsTag: "index, follow",
    twitterCardType: "summary_large_image"
  };

  const seo = metaData || defaultMeta;

  return (
    <Helmet>
      {/* Tab Title - Client requested ONLY 'Indeora Voyages' to appear here */}
      <title>Indeora Voyages</title>
      
      {/* Meta Title for SEO hidden in the source code */}
      {seo.metaTitle && <meta name="title" content={seo.metaTitle} />}
      
      {seo.metaDescription && <meta name="description" content={seo.metaDescription} />}
      {seo.metaKeywords && <meta name="keywords" content={seo.metaKeywords} />}
      {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
      {seo.robotsTag && <meta name="robots" content={seo.robotsTag} />}

      {/* Open Graph */}
      {seo.ogTitle && <meta property="og:title" content={seo.ogTitle} />}
      {seo.ogDescription && <meta property="og:description" content={seo.ogDescription} />}
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
      {seo.ogUrl && <meta property="og:url" content={seo.ogUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Indeora Voyages" />
      <meta name="application-name" content="Indeora Voyages" />

      {/* Twitter */}
      {seo.twitterTitle && <meta name="twitter:title" content={seo.twitterTitle} />}
      {seo.twitterDescription && <meta name="twitter:description" content={seo.twitterDescription} />}
      {seo.twitterImage && <meta name="twitter:image" content={seo.twitterImage} />}
      {seo.twitterCardType && <meta name="twitter:card" content={seo.twitterCardType} />}

      {/* Schema */}
      {seo.schemaMarkup && (
        <script type="application/ld+json">
          {seo.schemaMarkup}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
