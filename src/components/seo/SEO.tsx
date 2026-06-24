import { Helmet } from "react-helmet-async";
import { METADATA, SCHEMA_RESTAURANT } from "@/config/metadata";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export const SEO = ({
  title = METADATA.title,
  description = METADATA.description,
  canonical = METADATA.siteUrl,
  noindex = false,
}: SEOProps) => {
  const ogUrl = canonical;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={METADATA.keywords} />
      <meta name="author" content={METADATA.author} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={METADATA.type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={`${METADATA.siteUrl}${METADATA.ogImage}`} />
      <meta property="og:image:alt" content={METADATA.ogImageAlt} />
      <meta property="og:locale" content={METADATA.locale} />
      <meta property="og:site_name" content={METADATA.titleShort} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${METADATA.siteUrl}${METADATA.ogImage}`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(SCHEMA_RESTAURANT)}
      </script>
    </Helmet>
  );
};
