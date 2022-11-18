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
