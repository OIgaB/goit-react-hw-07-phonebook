// Форма додавання контактів. Це статична форма - не змінна (при відправці викликає ф-цію зміни state)
import { addContact } from "redux/operations";
import { useSelector, useDispatch } from "react-redux";          
import { Form, Input, Button } from "./styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const ContactForm = () => {       

    const contacts = useSelector(state => state.contacts.items); // отримуємо масив об'єктів зі стору
    
    const dispatch = useDispatch();

    const checkNameClone = (name, phone, email, birthdate) => { 
        const nameClone = contacts.find((contact) => ( // вертає об'єкт з ім'ям, що повторюється (якщо є)
          contact.name.toLowerCase() === name.toLowerCase()
        ));
    
        if(nameClone) {
          Notify.failure(`${name} is already in contacts`); 
          return;
        } 
        const newContact = {name, phone, email, birthdate};
        
        dispatch(addContact(newContact));  //відправка даних в contactsSlice -> operation -> contacts-api -> на бекенд
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const inputName = event.target.elements.name.value.trim();
        const inputNumber = event.target.elements.number.value.trim();
        let inputEmail = event.target.elements.email.value.trim();
        let inputBirthdate = event.target.birthdate.value;

        if(inputEmail === '') {
            inputEmail = 'N/A';
        } 
        if(inputBirthdate === '') {
            inputBirthdate = 'N/A';
        } 
        
        checkNameClone(inputName, inputNumber, inputEmail, inputBirthdate);
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
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    // pattern="[\+]\d{2}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" 
                    // title="+38 (050) 222-22-22" 
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="459-12-56"
                    required
                />
            </label>
            <label>
                Email
                <Input
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    title="characters@characters.tt (at least 2 letters 'a-z' in the end)" 
                    placeholder="oles.honchar@gmail.com"
                />
            </label>
            <label>
                Birthdate
                <Input
                    type="date"
                    name="birthdate"
                    pattern="\d{1,2}/\d{1,2}/\d{4}" 
                    title="dd.mm.yyyy" 
                    // placeholder="01.01.1980"
                    min="1923-01-01" 
                />
            </label>
            <Button>Add contact</Button>
        </Form>
    );
}