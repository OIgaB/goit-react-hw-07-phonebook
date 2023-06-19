// Фільтр пошуку у списку контактів

import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { Input } from '../ContactForm/styled';
import { Container } from "./styled";


export const Filter = () => { 
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter(event.target.value));  //відправка даних в filterSlice для записування в стор 
    };

    return (
        <Container>
            <label>
                Find contacts by name
                <Input 
                    type="name"
                    name="filter"
                    // value={filter} - ролі не грає
                    placeholder="Oles"
                    onChange={handleChange}
                    required
                />
            </label>
        </Container>
    );
}