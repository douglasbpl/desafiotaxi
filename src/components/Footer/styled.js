import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
display: flex;
justify-content: space-evenly;
background-color: yellow;

`

export const BoxAddress = styled.div`
width: 20%;

`

export const BoxLinks = styled.div `
width: 20%;
`

export const BoxFollow = styled.div `
width: 20%;
display:flex;
flex-direction: column;
`

export const BoxNewsletter = styled.div `
width: 20%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

input{
    width: 80%;
    height: 5vh;
    border-radius: 20%;

}

button{
    width: 60%;
    height: 5vh;
    border-radius: 10%;
}
`


