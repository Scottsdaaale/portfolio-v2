
import getBlogPost from "./getBlogPost";

const cheerio = require('cheerio');

function stripHtml(body) {
  let strippedText = '';

  for (const block of body) {
    const { children } = block;
    const blockText = children.map(child => child.text).join('');
    strippedText += blockText;
  }

  return strippedText;
}

// Function to shorten the metaDescription to 155 characters
function shortenMetaDescription(description) {
  const maxLength = 155;
  if (description.length > maxLength) {
    return description.slice(0, maxLength).trim() + '...';
  }
  return description;
}

const fallbackDescription = shortenMetaDescription(
  ""
);

const metadata = async (params) => {
  const { slug } = params;
  const blogPostData = await getBlogPost(slug);

  if (blogPostData) {
    const { title, mainImage, body } = blogPostData;
    const pageTitle = title || 'Item Not Found';

    // Convert HTML description to plain text using cheerio
    let metaDescription = stripHtml(body);

    // Shorten metaDescription to 155 characters
    metaDescription = shortenMetaDescription(metaDescription) || fallbackDescription;

    const metaImage = mainImage ? mainImage.asset.url : '/fallback-image.jpg';

    return {
      title: pageTitle,
      openGraph: {
        title: pageTitle,
        description: metaDescription,
        images: [metaImage],
      },
    };
  } else {
    return {
      title: 'Item Not Found',
      openGraph: {
        title: 'Item Not Found',
        description: 'No item found',
        images: ['/fallback-image.jpg'],
      },
    };
  }
};

export default metadata;