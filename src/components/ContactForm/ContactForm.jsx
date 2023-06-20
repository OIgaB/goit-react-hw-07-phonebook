// Форма додавання контактів. Це статична форма - не змінна (при відправці викликає ф-цію зміни state)
import { addContact } from "redux/operations";
import { useSelector, useDispatch } from "react-redux";          
import { Form, Input, Button } from "./styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const ContactForm = () => {       

    const contacts = useSelector(state => state.contacts.items); // отримуємо масив об'єктів зі стору
    
    const dispatch = useDispatch();

    const checkNameClone = (inputName, inputNumber) => { 
        const nameClone = contacts.find((contact) => ( // вертає об'єкт з ім'ям, що повторюється (якщо є)
          contact.name.toLowerCase() === inputName.toLowerCase()
        ));
    
        if(nameClone) {
          Notify.failure(`${inputName} is already in contacts`); 
          return;
        } 
        
        dispatch(addContact(inputName, inputNumber));  //відправка даних в contactsSlice -> operation -> contacts-api -> на бекенд
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const inputName = event.target.elements.name.value.trim();
        const inputNumber = event.target.elements.number.value.trim();

        checkNameClone(inputName, inputNumber);
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