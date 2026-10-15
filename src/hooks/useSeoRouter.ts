import { useState, useEffect, useCallback } from 'react';
import { SEO_CONTENT_MAP, SeoPageDefinition } from '../data/seoContentMap';

export function useSeoRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    // Normalize path to have trailing slash if not root
    if (path === '/' || path === '') return '/';
    return path.endsWith('/') ? path : `${path}/`;
  });

  const navigate = useCallback((targetUrl: string, replace = false) => {
    const normalized = targetUrl === '/' ? '/' : (targetUrl.endsWith('/') ? targetUrl : `${targetUrl}/`);
    if (normalized === currentPath) return;

    if (replace) {
      window.history.replaceState({}, '', normalized);
    } else {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const normalized = path === '/' ? '/' : (path.endsWith('/') ? path : `${path}/`);
      setCurrentPath(normalized);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Find SEO config for current path
  const currentPageSeo = SEO_CONTENT_MAP.find((p) => p.url === currentPath) || null;

  // Sync document head metadata and JSON-LD schema
  useEffect(() => {
    if (!currentPageSeo) {
      // 404 / Unmatched page
      document.title = "Page Not Found | Beyond The Patch";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "The requested page on Beyond The Patch could not be found. Explore our educational guides on vitiligo.");
      }
      return;
    }

    // 1. Title tag
    document.title = currentPageSeo.seoTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentPageSeo.metaDescription);

    // 3. Robots meta tag (index vs noindex)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', currentPageSeo.isIndexable ? 'index, follow' : 'noindex, nofollow');

    // 4. Canonical link
    const canonicalHref = `${window.location.origin}${currentPageSeo.url}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalHref);

    // 5. OpenGraph tags
    const updateOg = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOg('og:title', currentPageSeo.seoTitle);
    updateOg('og:description', currentPageSeo.metaDescription);
    updateOg('og:url', canonicalHref);
    updateOg('og:site_name', 'Beyond The Patch');
    updateOg('og:type', currentPageSeo.url === '/' ? 'website' : 'article');

    // 6. Schema.org JSON-LD injection
    let jsonLdScript = document.getElementById('seo-structured-data');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-structured-data';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }

    const breadcrumbItems = currentPageSeo.breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": b.label,
      "item": `${window.location.origin}${b.url}`
    }));

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${window.location.origin}/#organization`,
          "name": "Beyond The Patch",
          "url": window.location.origin,
          "logo": `${window.location.origin}/images/hero-vitiligo-hands-natural-pattern.jpg`,
          "description": "An evidence-based educational initiative and digital publication dedicated to vitiligo science and living."
        },
        {
          "@type": "WebSite",
          "@id": `${window.location.origin}/#website`,
          "url": window.location.origin,
          "name": "Beyond The Patch",
          "publisher": { "@id": `${window.location.origin}/#organization` }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalHref}#breadcrumb`,
          "itemListElement": breadcrumbItems
        },
        {
          "@type": currentPageSeo.url === '/' ? "WebPage" : "MedicalWebPage",
          "@id": `${canonicalHref}#webpage`,
          "url": canonicalHref,
          "name": currentPageSeo.h1,
          "description": currentPageSeo.metaDescription,
          "isPartOf": { "@id": `${window.location.origin}/#website` },
          "breadcrumb": { "@id": `${canonicalHref}#breadcrumb` },
          "datePublished": "2026-10-01",
          "dateModified": "2026-10-14",
          "citation": currentPageSeo.citationSources
        }
      ]
    };

    jsonLdScript.textContent = JSON.stringify(structuredData);
  }, [currentPageSeo, currentPath]);

  return {
    currentPath,
    navigate,
    currentPageSeo,
    is404: !currentPageSeo
  };
}
