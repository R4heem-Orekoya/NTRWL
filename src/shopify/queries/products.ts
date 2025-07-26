export const productsQuery = `
   #graphql
   query GetProducts($first: Int!) {
      products(first: $first) {
         edges {
            node {
               id
               title
               handle
               images(first: 1) {
                  edges {
                     node {
                        url
                        altText
                     }
                  }
               }
               variants(first: 10) {
                  edges {
                     node {
                        price {
                           amount
                           currencyCode
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;
