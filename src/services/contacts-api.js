import axios from 'axios';

// axios.defaults.baseURL = 'https://649088271e6aa71680cb6b00.mockapi.io/';

export const getContacts = async () => {
    const { data } = await axios.get('https://649088271e6aa71680cb6b00.mockapi.io/contacts'); // масив об'єктів
    return data;
}