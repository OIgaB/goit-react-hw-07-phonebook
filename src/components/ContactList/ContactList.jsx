// Рендер списку контактів <ul> та його 1го елемента <li>

import PropTypes from 'prop-types';
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux"; 
import { ListContainer, Contact, Name, Number, Wrapper, Button } from "./styled";


export const ContactList = ({ contacts }) => {    // contacts - масив об'єктів 
    const dispatch = useDispatch();

    
    const onDeleteContact = (contactID) => {      // функція видалення 1го контакта по id 
         dispatch(deleteContact(contactID));
    };

    return (
        <ListContainer>                                    {/* <ul> */} 
            {contacts.map(({ id, name, number }) => (
                <Contact key={id}>                         {/* <li> */} 
                    <Wrapper>
                        <Name>{name}</Name>
                        <Number>{number}</Number>
                    </Wrapper>
                    <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
                </Contact>      
            ))}
        </ListContainer>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};