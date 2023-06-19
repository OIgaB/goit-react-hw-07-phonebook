import styled from 'styled-components';

export const Form = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 4px;
    color: rgb(243,229,171);
    padding: 25px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    text-align: left;
`;

export const Input = styled.input`
    display: block;
    margin-top: 5px;
    color: rgb(240,220,130);
    padding: 7px 10px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    border-radius: 4px;
    background-color: #4e5b314b;
    letter-spacing: 1.3px;
    border-color: #f9a504;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    
    box-shadow: #f9a504 0px 30px 60px -70px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset;
        &:hover,
        &:focus {
            border: 2px solid #f9a504;
        }
        &::placeholder {
            color: rgb(240,220,130);
            font-style: italic;
        }
        &:valid:not(:placeholder-shown) {
            background-color: rgba(153, 205, 50, 0.315);
        }
        &:not(:valid):not(:placeholder-shown) {
            background-color: rgba(184, 59, 59, 0.24);
        }
`;

export const Button = styled.button`
    background-color: #f9a504;
    font-family: inherit;
    border: none;
    color: rgb(243,229,171);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    &:hover,
    &:focus {
        background-color: #beac04;  
    }
`;