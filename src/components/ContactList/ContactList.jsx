//Рендер списку контактів <ul> та його 1го елемента <li>

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from "react-redux"; 
import { ListContainer, Contact, Wrapper, Name, Details, Image, Button } from "./styled";


export const ContactList = ({ contacts }) => {    // contacts - масив об'єктів 

    const { loading, error } = useSelector(state => state.contacts); // дістаємо дані зі стейта

    const dispatch = useDispatch();
    
    return (
        <>
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}                                  
            {contacts.length > 0 && (
                <ListContainer>  
                    {contacts.map(({ id, name, phone, email, birthdate, avatar }) => (
                        <Contact key={id}>                         
                            <Wrapper>
                                <Name>{name}</Name>
                                <Details>tel: <a href='tel:phone'>{phone}</a></Details>
                                <Details>email: <br/><a href='mailto:email'>{email}</a></Details>
                                <Details>birthdate: {birthdate.slice(0, 10)}</Details> {/* //прийшло: 1997-10-29T09:04:16.334Z  стало: 1997-10-29 */}
                                <Image src={avatar} alt="avatar"/>
                            </Wrapper>
                            <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                        </Contact>      
                    ))} 
                </ListContainer>   
            )}
        </>
    );
}

// work: "Dickens - Beatty"
// family: false
// colleagues: false
// friends: false
// other: false


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape ({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        birthdate: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })),
};