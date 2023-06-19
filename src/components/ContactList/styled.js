import styled from 'styled-components';


export const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
    grid-column-gap: 8px;
    margin: 30px auto;
    padding: 25px;
    text-align: center;
    background-color: #f9a504;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.60) 0px -23px 70px 0px inset, rgba(0, 0, 0, 0.30) 0px -36px 70px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`; 

export const Contact = styled.li`
    padding: 20px 10px;
    background-color: #4e5b317e;
    border-radius: 4px;
    margin-bottom: 8px;
    font-family: 'Playfair Display', serif;
`;

export const Wrapper = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.p`
    color: #1c2916;
    font-size: 23px;
    margin: 0;
    margin-bottom: 5px;
`;

export const Number = styled.span`
    font-size: 20px;
    font-style: italic;
    color: rgb(240,220,130);
`;

export const Button = styled.button`
    margin-top: 10px;
    background-color: rgb(155,135,12);
    font-family: inherit;
    border: none;
    width: 100%;
    color: rgb(243,229,171);
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    &:hover,
    &:focus {
        background-color: #f9a504;  
    }
`;