import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {   
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleFulfilledGot = (state, { payload }) => {  // payload - масив об'єктів
    state.isLoading = false;
    state.items = payload;
}

const handleFulfilledAdded = (state, { payload }) => {  
    state.isLoading = false;
    state.items.push(payload);
}

const handleFulfilledDeleted = (state, { payload }) => {  
    state.isLoading = false;
    const index = state.items.findIndex(
        contact => contact.id === payload.id  // знаходимо серед контактів з api той, індекс якого = індексу одного переданого контакту
    );
    state.items.splice(index, 1); // 1й аргумент - індекс першого елемента для видалення; 2й - к-ть елементів, що видаляються
}

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, handleFulfilledGot)
            .addCase(addContact.fulfilled, handleFulfilledAdded)
            .addCase(deleteContact.fulfilled, handleFulfilledDeleted)
            //спільні ф-ції обробки стану pending/rejected:
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const contactsReducer = contactsSlice.reducer;