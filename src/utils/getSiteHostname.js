/**
 * Extracts the hostname from a given URL, removing 'www.' if present.
 *
 * @param {string} siteUrl - The URL from which to extract the hostname.
 * @returns {string} The extracted hostname.
 */

const getSiteHostname = (siteUrl) => {
  try {
    if (siteUrl) {
      // Add protocol if missing
      if (!siteUrl.includes("//")) {
        siteUrl = `http://${siteUrl}`;
      }

      // Extract hostname using the URL constructor
      const hostname = new URL(siteUrl).hostname;

      // Remove 'www.' if present
      return hostname.replace(/^www\./, "");
    }

    return "";
  } catch (error) {
    console.error("Invalid URL:", error);
    return "";
  }
};

export default getSiteHostname;
