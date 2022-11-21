import { gql } from "@apollo/client";

export const QUERY_DININGPACKAGES = gql`
query DiningPackages {
  diningPackages {
    _id
    package
    description
    cost
    href
    imageSrc
    imageAlt
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

export const QUERY_ACTIVITY = gql`
query OnBoardActivities {
  onBoardActivities {
    _id
    on_board_activity
    description
    cost
    href
    imageSrc
    imageAlt
  }
}`

export const QUERY_ME = gql`
query me {
  me {
    _id
    first_name
    last_name
    email
    password
    street_address_1
    street_address_2
    city
    state
    zip
    country
    phone_number
    reservation {
      _id
    }
    
  }
}
`;