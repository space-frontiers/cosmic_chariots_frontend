import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        first_name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
    addUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password) {
      token
      user {
        _id
        first_name
        last_name
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $first_name: String, $last_name: String, $phone_number: String, $street_address_1: String, $street_address_2: String, $city: String, $state: String, $zip: String, $country: String){
    updateUser(email: $email, first_name: $first_name, last_name: $last_name, phone_number: $phone_number, street_address_1: $street_address_1, street_address_2: $street_address_2, city: $city, state: $state, zip: $zip, country: $country) {
      user {
        email
        last_name
        phone_number
        street_address_1
        street_address_2
        city
        state
        zip
        country
      }
    }
  }
`
export const CREATE_RESERVATION = gql`
  mutation createReservation {
    createReservation {
      _id
    }
  }
`
export const UPDATE_RESERVATION_MISSIONDATE = gql`
  mutation UpdateReservationMissionDate($reservationId: ID!, $input: MissionDateInput) {
    updateReservationMissionDate(reservationId: $reservationId, input: $input) {
      _id
      mission {
        _id
        destination
        date
      }
    }
  }
`

export const UPDATE_RESERVATION_ROOM_TYPE = gql`
  mutation UpdateReservationRoomType($reservationId: ID!, $input: RoomTypeInput) {
    updateReservationRoomType(reservationId: $reservationId, input: $input) {
      _id
      room_type {
        _id
        suite
      }
    }
  }
`

export const DELETE_RESERVATION = gql `
  mutation deleteReservation($reservationId: ID!) {
    deleteReservation(reservationId: $reservationId) {
        _id
    }
  }
`