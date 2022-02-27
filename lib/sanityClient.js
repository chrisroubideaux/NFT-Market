import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '',
  dataset: 'nft',
  apiVersion: '2021-03-25',
  token: '',
  useCdn: false,
});
