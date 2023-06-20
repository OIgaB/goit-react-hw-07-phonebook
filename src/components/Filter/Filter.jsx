// Фільтр пошуку у списку контактів

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { Input } from '../ContactForm/styled';
import { Container } from "./styled";


export const Filter = () => { 
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const handleChange = ({ target: {value}}) => {
        dispatch(setFilter(value.trim()));  //відправка даних в filterSlice для записування в стор 
    };
    console.log(filter);

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