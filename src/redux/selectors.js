import { createSelector } from '@reduxjs/toolkit';

export const getFriends = state => state.friends.items;
export const getFilter = state => state.filter.value;

export const getFilteredFriends = createSelector(
  [getFriends, getFilter],

  (friends, filter) => {
    return friends.filter(friend =>
      friend.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getContacts = state => state.contacts.items;

export const getIsloading = state => state.friends.isLoading;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
