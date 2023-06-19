import styled from 'styled-components';


export const Container = styled.div`
    margin: 30px auto;
    padding: 50px;
    text-align: center;
    background: radial-gradient(ellipse at center, #443501 0%,#000000 100%);
`; 

export const Title = styled.h1`
    background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #fff;
    font-family: 'Playfair Display', serif;
    position: relative;
    text-transform: uppercase;	
    font-size: 80px;
    margin: 0 0 40px 0;
    font-weight: 400;
    &:after {
        background: none;
        content: attr(data-heading);
        left: 0;
        top: 0;
        z-index: -1;
        position: absolute;
        text-shadow: 
            -1px 0 1px #c6bb9f, 
            0 1px 1px #c6bb9f, 
            5px 5px 10px rgba(0, 0, 0, 0.4),
            -5px -5px 10px rgba(0, 0, 0, 0.4);
    }
`; 

export const SubTitle = styled.h2`
    color: rgb(243,229,171);
    font-family: 'Playfair Display', serif;
    font-size: 40px;
`; 

export const AlertMessage = styled.p`
    color: rgb(243,229,171);
    font-family: 'Playfair Display', serif;
    font-size: 30px;
    font-style: italic;
`; 