//Рендер списку контактів <ul> та його 1го елемента <li>

// import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from "react-redux"; 
import { ListContainer, Contact, Name, Number, Wrapper, Button } from "./styled";


export const ContactList = () => {    // contacts - масив об'єктів 

    const { items: contacts, loading, error } = useSelector(state => state.contacts); // дістаємо дані зі стейта

    const dispatch = useDispatch();


    console.log('ContactList:', contacts);
    return (
        <>
            {error && <h2>{error}</h2>}
            {loading && <h2>Loading...</h2>}                                  
            {contacts.length > 0 && (
                <ListContainer>  
                    {contacts.map(({ id, name, phone }) => (
                        <Contact key={id}>                         
                            <Wrapper>
                                <Name>{name}</Name>
                                <Number>{phone}</Number>
                            </Wrapper>
                            <Button type='button' onClick={() => dispatch(deleteContact(id))}>Delete</Button>
                        </Contact>      
                    ))} 
                </ListContainer>   
            )}
        </>
    );
}

// friends: false
// avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/832.jpg"
// birthdate: "1978-04-11T04:54:07.680Z"
// colleagues: false
// createdAt: "2023-06-19T03:43:53.369Z"
// email: "Van29@yahoo.com"
// family: false
// id: "1"
// name: "Mrs. Shari Johns Jr."
// other: false
// phone: "1-244-354-4204 x6315"
// work: "Dickens - Beatty"


// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape ({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
// };