import styled from 'styled-components';


export const ContainerHeader = styled.div`

width: 100%;
background-color: #1a1a1a;
display: flex;
flex-direction: column;
align-items: center;
`

export const BoxTopHeader = styled.div`
width:45vw;
display:flex;
background-color: #1a1a1a;
justify-content: space-between;
`

export const Logo = styled.img`
`

export const Menu = styled.menu`
display:flex;
width: 57%;
justify-content:space-around;
align-items:center;
ul {
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:100%; 
      list-style:none;
}
ul > a {
    text-decoration:none;
    color: #fefefe;
}
ul > a > li {
    font-size: 1.2rem;
   }
ul > a > li:hover {
    color:#f8ca11;
}       
`	


export const ContainerSlider = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:80%;
background-color: #1a1a1a;
cursor: move; /* fallback if grab cursor is unsupported */
cursor: grab;
cursor: -moz-grab;
cursor: -webkit-grab;
:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;

}`

export const ContainerCar = styled.div`
flex-direction:column;
background-color: #1a1a1a;
height:100%;
width:100%;
`

export const BoxTxtCar = styled.div`
background-color:#f8ca11;
width:85%;
height:50px;
display:flex;
height:20vh;
float:right;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const NameCarHeader = styled.h2`
font-size:40px;
width:100%;
color: #fbfaf6;
text-align: center;
`

export const ParaCarHeader = styled.p`
font-size:30px;
width:100%;
color: #1a1a1a;
text-align: center;
`


export const TtlCarHeader = styled.h2``

export const ImgCar = styled.img`
`

export const ContainerSearch = styled.div`
display:flex;
width:100%;
height:100%;
flex-direction:column;
justify-content:center;
align-items:center;
background-color: #1a1a1a;
margin-left:2rem;
text-align:center;
h2{
    font-size: 26px;
    color: #fbfaf6;
}
`

export const BoxSearch = styled.div`
display:flex;
flex-direction:column;
justify-content:top;
align-items:center;
width: 100%;
height:30vh;
padding-bottom: 30px;
background-color: #fefefe;
margin-top: 20px;
input{
    display:flex;
    background: #e1e1e1;
    width:80%;
    border-radius: 5px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 10px;
    padding-left: 10px;
    border: none;
    outline: none;
    }
 p {
    font-size: 30px;
    color: #000;
    }
button {
    width: 20%;
    background-color: #353433;
    color: #fefefe;
    text-align: center;
    padding: 12px;
    font-size: 18px;
    border-radius: 10px;
    align-self:flex-end;
    margin-right: 4.5vw;
    cursor:pointer   
    } 
 button:hover {
    background-color:#f8ca11;
    color: #000;   
 }   
`
