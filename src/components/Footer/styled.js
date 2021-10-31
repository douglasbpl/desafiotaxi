import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
heigth: 100vh;
display: flex;
justify-content: space-evenly;

background-color: #292828;
color: #FFFF;
`

export const BoxAddress = styled.div`
width: 20%;

h1{
    font-size: 5vh;
}
p{
    color: #FFFFF;
    font-size: 3vh;
}

`

export const BoxLinks = styled.div `

h1{
    font-size: 5vh;
}


ul {
  list-style-type: circle;
}

li{
    font-size: 3vh;
    cursor: pointer;
}
    li:hover{
        color: yellow;
}

`

export const BoxFollow = styled.div `
width: 15%;
display: flex;
flex-direction: column;

h1{
   
    font-size: 5vh;
}


p:hover{
    color: yellow;
   
}
img{
    margin: 1rem;
}
`

export const BoxImg = styled.div`
heigth: 20vh;
display:flex;
flex-direction: column;
cursor: pointer;
`

export const Facebook = styled.div `
display:flex;
justify-content: space-evenly;
`

export const Twitter = styled.div `
display:flex;
justify-content: space-evenly;


`
export const Linkedin = styled.div `
display:flex;
justify-content: space-evenly;
`
export const Youtube = styled.div `
display:flex;
justify-content: space-evenly;
`

export const Instagram = styled.div `
display:flex;
justify-content: space-evenly;
`

export const BoxNewsletter = styled.div `



display: flex;
flex-direction: column;

h1{
   
    font-size: 5vh;
}
`


export const InputButton = styled.div `
display: flex;
flex-direction: column;

h1{
   color: #FFFFF;
    font-size: 5vh;
}

input{
    width: 15vw;
    height: 5vh;
    
}

button{
width: 10vw;
    height: 7vh;
    background-color: gold;
    cursor: pointer;
    color: #FFFAFA;
font-size: 3vh;
font-weight: bold;
`

export const Everything = styled.div`
heigth: 60vh;
display: flex;
justify-content: space-around;


`