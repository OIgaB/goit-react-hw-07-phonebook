import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from '../services/contacts-api';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue}) => { 
        try {
            const data = await getContacts();
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// addContact - додавання контакту (метод POST). Базовий тип екшену "contacts/addContact".
// deleteContact - видалення контакту (метод DELETE). Базовий тип екшену "contacts/deleteContact".