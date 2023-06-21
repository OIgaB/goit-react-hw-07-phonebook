import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, postContact, excludeContact } from '../services/contacts-api';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue}) => { 
        try {
            const data = await getContacts();
            
            const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name)); // inAlphabeticalOrder            
            return sortedByName; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, { rejectWithValue}) => { 
        try {
            const data = await postContact(newContact);
            // console.log(newContact);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue}) => { 
        try {
            const data = await excludeContact(contactId);
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);