import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient
({
  projectId: '0y7ol6ox',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk4sKFMrnHInuZBSwmM4PUZDJd8JT78q6TeDr8ay5xZXA1K5gwrbd6zrTwTz9kaqr4ZndEAIwGNsLY4Z1iPeG20pbES1Tc9j4g5dEci8TJwssPHHiFsBohYcOO0AeVFCOTx4gHSpTnxqyQewNeIM3uXroLppMtlGzbVke4sxBjEIWAt5IAV1',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);