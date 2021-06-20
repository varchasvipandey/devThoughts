import { Helmet } from "react-helmet";

const Layout = ({
  children = <></>,
  title = "devThoughts",
  desc = "Share concise thoughts, tricks or tips on your favourite programming languages, frameworks or librarys.",
  keywords = "",
  url = "https://dev-thoughts.netlify.app",
  image,
}) => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>{title}</title>

        {/* Main */}
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content={`${keywords}, programming, tips, tricks, dev thoughts, tech blogs`}
        />

        {/* Open graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="blog" />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={desc} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
