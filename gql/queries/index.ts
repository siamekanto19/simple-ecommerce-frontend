import { graphql } from '../generated';

export const PRODUCTS_QUERY = graphql(`
  query Products {
    products {
      data {
        id
        attributes {
          name
          price
          slug
          in_stock
          description
          image {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
                createdAt
                updatedAt
              }
            }
          }
        }
      }
    }
  }
`);
