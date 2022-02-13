import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_QUERY = gql`query {
  products(first: 50) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        sku
        price
        regularPrice
        id
        attributes {
          nodes {
            options
          }
        }
      }
      ... on VariableProduct {
        sku
        price
        id
        regularPrice
      }
      ... on ExternalProduct {
        sku
        price
        id
        externalUrl
        regularPrice
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              sku
              id
              price
              regularPrice
            }
          }
        }
      }
    }
  }
}
`;

export default PRODUCTS_QUERY;
