// Import cheerio library
const cheerio = require('cheerio');

// Function to strip HTML tags using cheerio
function stripHtml(html) {
  // Load the HTML string into a cheerio instance
  const $ = cheerio.load(html);

  // Get the text content of the HTML without tags
  return $('body').text();
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
  "Since 2010, we've been transforming the learning experience in the human services sector, combining expert knowledge with real-world applications. Our interactive, content-rich programs are designed to maximize knowledge retention, making professional development accessible and effective."
);

const metadata = async (endpoint, slugParam, params) => {
  const res = await fetch(endpoint, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const slug = params.slug || slugParam;

  const matchingData = data.find((item) => item.slug === slug);

  if (matchingData) {
    const {
      name,
      description,
      image,
      text,
      title: fetchedTitle,
    } = matchingData;

    const pageTitle = name || fetchedTitle || 'Item Not Found';
    // Convert HTML description to plain text using cheerio
    let metaDescription = description
      ? stripHtml(description)
      : text
      ? stripHtml(text)
      : fallbackDescription;
    // Shorten metaDescription to 155 characters
    metaDescription = shortenMetaDescription(metaDescription);
    const metaImage = image || '/fallback-image.jpg';

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

//may want to pass an integer or something as a prop so that we can get x amount of description chars

//this might be bad if one of the piece of data doesnt work
