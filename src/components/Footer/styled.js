import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
background-color: #292828;
color: #FFFF;
`
export const BoxSectionOneF = styled.div`
width:60%;
padding-bottom:5vh;`

export const BoxAddress = styled.div`
width: 20%;

h1{
    font-size: 5vh;
}
p{
    color: #FFFFF;
    font-size: 2vh;
}

`

export const BoxLinks = styled.div `
width: 20%;
display: flex;
flex-direction: column;
align-items: center;


h1{
    font-size: 5vh;
    text-align: center;
}


ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    }

li{

    font-size: 3vh;    
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
    li:hover{
        color: yellow;
}

ul >  a {
    text-decoration:none;
    color: #fefefe;

span{
    width: 1.3vw;    
}

`

export const BoxFollow = styled.div `
width: 20%;
display: flex;
flex-direction: column;
align-items: center;


h1{
    font-size: 5vh;
    text-align: center;
}


ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-right: 4vw;
    }

li{

    font-size: 3vh;    
    display: flex;
    flex-direction: row;
    cursor: pointer;
}


li > a {
    color:white;
  text-decoration:none;
}

 li > a:hover {
    color: yellow;
}



span{
    width: 1.3vw;    
}

`

export const BoxImg = styled.div`

display:flex;
flex-direction: column;
cursor: pointer;
`


export const BoxNewsletter = styled.div `
width: 20%;
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
height: 7vh;
width: 10vw;
background-color: gold;
cursor: pointer;
color: #FFFAFA;
font-size: 3vh;
font-weight: bold;
text-transform: uppercase;
margin-top: 1rem;
border-radius: 8px;
}
`

export const Everything = styled.div`
display: flex;
justify-content: space-around;

margin-top: 1rem;
`

export const BoxParagraphFooter = styled.div `
width: 100%;
display: flex;
justify-content: center;
color: black; 
background-color: white;
`