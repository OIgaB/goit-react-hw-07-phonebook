import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, SubTitle, AlertMessage } from "./styled";
import { fetchContacts } from "../redux/operations";


export const App = () => {
  // const contacts = useSelector(state => state.contacts.items); // отримуємо масив об'єктів зі стору
  //const filter = useSelector(state => state.filter); // отримуємо рядок зі стору

  const dispatch = useDispatch();
  
  useEffect(() => {dispatch(fetchContacts())
  }, [dispatch]);

  // Функція, яка шукає співпадіння введеного в фільтр імені з іменами об'єктів масиву, який в state
  // повертає новий масив знайдених об'єктів (якщо фільтр в state пустий, то новий масив контактів не створиться, 
  // а з ф-ції повернеться масив контактів, що в state)

  // const getVisibleContacts = () => {
  //     return contacts.filter(({ name }) => 
  //     name.toLowerCase().includes(filter.toLowerCase()) 
  //   );
  // }

  

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm /> 

      <SubTitle>Contacts</SubTitle>
      {/* <Filter /> */}
      <ContactList />
      {/* {contacts.length !== 0 && <ContactList contacts={contacts} />} */}
      {/* {getVisibleContacts().length !== 0 && <ContactList contacts={getVisibleContacts()} />} */}
      {/* {getVisibleContacts().length === 0 && <AlertMessage>There is no contact matching your request.</AlertMessage>}  */}
          
    </Container>
  );
}