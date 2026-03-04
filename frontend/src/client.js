import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  // Make sure this is your correct Project ID from sanity.json
  projectId: 'spyj1bcp', // This was in your error log
  dataset: 'production',
  // IMPORTANT: Use the current date
  apiVersion: '2025-10-21',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

