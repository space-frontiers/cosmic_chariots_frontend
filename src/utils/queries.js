import { useApolloClient, gql } from "@apollo/client";

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
`

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

export const GET_ME = gql`
  {
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
`

export const QUERY_USER = gql`
  query user($email: String!) {
    user( email: $email) {
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
`

export const QUERY_DINING = gql`
  query DiningPackage($id: ID!) {
    diningPackage(_id: $id){
      _id
      cost
      description
    }
  }
`

export const QUERY_RESERVATION = gql`
  query Reservation($reservationId: ID!) {
    reservation(reservationId: $reservationId){
      _id
      mission {
        date
        destination
      }
      room_type {
        suite
      }
      excursion {
        excursion
      }
      dining_package {
        dining_package
      }
      on_board_activity {
        on_board_activity
      }
    }
  }
`

export const QUERY_ROOMTYPES = gql `
query RoomTypes {
  roomTypes {
    _id
    suite
    amenities_1
    amenities_2
    amenities_3
    amenities_4
    cost
  }
}
`
// export const QUERY_MISSIONDATE = gql `
// query MissionDate {
//   missionDates {
//     _id
//     destination
//     date
//     description
//   }
// }
// `