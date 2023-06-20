import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from './operations';

const initialState = {   
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
    // state.error = '';
}

const handleFulfilledContacts = (state, { payload }) => {  // payload - масив об'єктів
    state.isLoading = false;
    state.items = payload;
    // console.log(state.items);
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
            .addCase(fetchContacts.fulfilled, handleFulfilledContacts)
            .addMatcher(action => action.type.endsWith('/pending'), handlePending)
            .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    }
});

export const contactsReducer = contactsSlice.reducer;
   
        // addContact: {
        //     reducer(state, action) {
        //         state.items.push(action.payload);
        //     },
        //     prepare(name, number) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 name,
        //                 number,
        //             }
        //         };
        //     },
        // },
        // deleteContact(state, action){
        //     const index = state.items.findIndex(contact => contact.id === action.payload);
        //     state.items.splice(index, 1); // 1й аргумент - індекс першого елемента для видалення; 2й - к-ть елементів, що видаляються
        // }