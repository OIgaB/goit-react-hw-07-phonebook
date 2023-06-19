// Форма додавання контактів. Це статична форма - не змінна (при відправці викликає ф-цію зміни state)

import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";            
import { Form, Input, Button } from "./styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const ContactForm = () => {       

    const contacts = useSelector(state => state.contacts.array); // отримуємо масив об'єктів зі стору

    const dispatch = useDispatch();

    const checkNameClone = (newName, newNumber) => { 
        const nameClone = contacts.find((contact) => ( // вертає об'єкт з ім'ям, що повторюється (якщо є)
          contact.name.toLowerCase() === newName.toLowerCase()
        ));
    
        if(nameClone) {
          Notify.failure(`${newName} is already in contacts`); 
          return;
        } 
        
        dispatch(addContact(newName, newNumber));  //відправка даних в contactsSlice для записування в стор
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const number = event.target.elements.number.value;

        checkNameClone(name, number);
        event.target.reset();
    }


    return (
        <Form onSubmit={handleFormSubmit} autoComplete="off">
            <label>
                Name
                    <Input
                        type="text"
                        name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        placeholder="Oles Honchar"
                        required
                    />
            </label>
            <label>
                Number
                <Input
                    type="tel"
                    name="number"
                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="459-12-56"
                    required
                />
            </label>
            <Button>Add contact</Button>
        </Form>
    );
}