import axios from 'axios';

axios.defaults.baseURL = 'https://649088271e6aa71680cb6b00.mockapi.io/';

export const getContacts = async () => {
    const { data } = await axios.get('/contacts'); // data - масив об'єктів
    return data;
}

export const postContact = async (newContact) => {
    const { data } = await axios.post('/contacts', newContact); 
    return data;
}

export const excludeContact = async (contactId) => {    // = delete
    const { data } = await axios.delete(`/contacts/${contactId}`); 
    return data;
}