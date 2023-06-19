import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {   //об'єкт вимагає бібліотека redux-persist, тому змушені створити ключ array
    array: [
        {id: 'id-1', name: 'Mykhailo Kotsiubynsky', number: '459-12-56'},
        {id: 'id-2', name: 'Hryhorii Skovoroda', number: '443-89-12'},
        {id: 'id-3', name: 'Pavlo Tychyna ', number: '645-17-79'},
        {id: 'id-4', name: 'Saint Nicholas', number: '227-91-26'},
    ]
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.array.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    }
                };
            },
        },
        deleteContact(state, action){
            const index = state.array.findIndex(contact => contact.id === action.payload);
            state.array.splice(index, 1); // 1й аргумент - індекс першого елемента для видалення; 2й - к-ть елементів, що видаляються
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
}

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);