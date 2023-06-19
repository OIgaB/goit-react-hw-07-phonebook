import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'; 
 // redux-persist - бібліотека, яка гарантує, що ініціалізація додатку буде відкладена до тих пір, поки localStorage не буде прочитаний


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware){  //middleware - прослойка, яка стоїть між відправкою action-а і його доставкою в reducer, і дозволяє щось змінити в цей проміжок
        return getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //щоб не видавало помилку заігноримо декілька action-ів - функцій, щоб Redux на них не реагував
            }, // action - серіалізована сутність, тобто коли можна зробити JSON.stringify - там не повинно бути ф-цій
        });
    },
});

export const persistor = persistStore(store); // імпортується в index.js