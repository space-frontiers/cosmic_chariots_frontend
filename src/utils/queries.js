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
    excursion
    description
    cost
    href
    imageSrc
    imageAlt
  }
}`

export const QUERY_MISSIONS = gql`
query MissionDates {
  missionDates {
    _id
    date
    description
    destination
    
  }
}
`