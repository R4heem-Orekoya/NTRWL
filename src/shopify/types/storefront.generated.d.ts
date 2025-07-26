/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type CartCreateMutationVariables = StorefrontTypes.Exact<{
  input: StorefrontTypes.CartInput;
}>;


export type CartCreateMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Cart, 'id' | 'checkoutUrl'>>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>> }> };

export type ProductSlugQueryVariables = StorefrontTypes.Exact<{
  handle: StorefrontTypes.Scalars['String']['input'];
}>;


export type ProductSlugQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'id' | 'title' | 'descriptionHtml'>
    & { images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText'> }> }, variants: { edges: Array<{ node: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'quantityAvailable' | 'availableForSale'>
          & { price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
        ) }> } }
  )> };

export type GetProductsQueryVariables = StorefrontTypes.Exact<{
  first: StorefrontTypes.Scalars['Int']['input'];
}>;


export type GetProductsQuery = { products: { edges: Array<{ node: (
        Pick<StorefrontTypes.Product, 'id' | 'title' | 'handle'>
        & { images: { edges: Array<{ node: Pick<StorefrontTypes.Image, 'url' | 'altText'> }> }, variants: { edges: Array<{ node: { price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> } }> } }
      ) }> } };

interface GeneratedQueryTypes {
  "\n   #graphql\n   query productSlug($handle: String!) {\n      product(handle: $handle) {\n         id\n         title\n         descriptionHtml\n         images(first: 5) {\n            edges {\n               node {\n                  url\n                  altText\n               }\n            }\n         }\n         variants(first: 10) {\n            edges {\n               node {\n                  id\n                  title\n                  quantityAvailable \n                  price {\n                     amount\n                     currencyCode\n                  }\n                  availableForSale\n                  selectedOptions {\n                     name\n                     value\n                  }\n               }\n            }\n         }\n      }\n   }\n": {return: ProductSlugQuery, variables: ProductSlugQueryVariables},
  "\n   #graphql\n   query GetProducts($first: Int!) {\n      products(first: $first) {\n         edges {\n            node {\n               id\n               title\n               handle\n               images(first: 1) {\n                  edges {\n                     node {\n                        url\n                        altText\n                     }\n                  }\n               }\n               variants(first: 10) {\n                  edges {\n                     node {\n                        price {\n                           amount\n                           currencyCode\n                        }\n                     }\n                  }\n               }\n            }\n         }\n      }\n   }\n": {return: GetProductsQuery, variables: GetProductsQueryVariables},
}

interface GeneratedMutationTypes {
  "\n   #graphql\n   mutation cartCreate($input: CartInput!) {\n      cartCreate(input: $input) {\n         cart {\n            id\n            checkoutUrl\n         }\n         userErrors {\n            field\n            message\n         }\n      }\n    }\n": {return: CartCreateMutation, variables: CartCreateMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
