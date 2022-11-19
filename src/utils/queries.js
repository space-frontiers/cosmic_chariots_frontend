import { gql } from "@apollo/client";

export const QUERY_DININGPACKAGES = gql`
  query diningPackages {
    diningPackages {
      _id
      package
      description
      cost
    }
  }
`;

export const QUERY_EXCURSIONS = gql`
query excursions {
  excursions {
    _id
    cost
    description
    excursion
  }
}`