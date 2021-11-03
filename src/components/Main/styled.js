import styled from 'styled-components';
export const ContainerMain = styled.div`
`
export const Divide = styled.div`
width:100%;
height:10vh;
background-color:white;`

export const ContainerFiSection = styled.section`
background-color: #161c1e;
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
height: 80vh;
`
export const TitleOur = styled.h2`
text-align:center;
font-size:50px;
color:white;
`
export const Taxi = styled.span`
color:#f4db31;
`

export const ContainerBoxCard = styled.div`
background-color: #161c1e;
display:flex;
justify-content:space-around;
align-items:center;


div{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:white;
text-align:center;
width:30%;       
}

    
h3{
color:black;
text-transform:uppercase;
font-size:20px;        
}


p{
color:black;
font-size:20px;
width:60%;
}

img{
    width:100%;
}

div > div {
    background-color: #f8ca11;
    width: 21.5%;
    height: 70px;
    border-radius: 100%;
    position: relative;
    bottom: 35px;    
}
div > div > p {
    color: white;
}
`


export const ContainerSecoSection = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
`

export const TittleSecoSection = styled.h2`
text-align:center;
font-size:50px;
`
export const SpUloax = styled.span`
color:#f4db31;
&::after{
    content:'';
    width:100%;
    height:2px;
    background-color:black;
    display:block;
    margin-top:10px;
}
`
export const IntoSectionleft = styled.div`
display:flex;
width:50%;
justify-content:center;
&:hover{
transform: scale(1.3);
transition: all 0.1s ease 0s;
} 
@media (min-width: 768px) {
    width:80%;
}

div {
display:flex;
flex-direction:column;
justify-content:space-evenly;
width:40%;
text-align:left;
height:33vh;
        
}


div > h2 {
    color: #2b3436;
    font-size:30px;
}
div > p {
    color: #2b3436;
    font-size:16px;
}
div > button {
    background-color:#f4db31;
    color:white;
    font-size:16px;
    border:none;
    padding:10px;
    border-radius:5px;
    width:120px;
    height:6vh;
    align-self:start;
    cursor:pointer;
}

div > button:hover {
    background-color: black;    
}
`
export const IntoSectionRight = styled.div`
display:flex;
width:50%;
justify-content:center;
@media (min-width: 768px) {
    width:80%;
}
&:hover{
    transform: scale(1.3);
transition: all 0.1s ease 0s;
}

div {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-color:white;
    width:40%;
    text-align:right;
    height:33vh;    
}
div > h2 {
    color: #2b3436;
    font-size:30px;
}
div > p {
    color: #2b3436;
    font-size:16px;
}
div > button {
    background-color:#f4db31;
    color:white;
    font-size:16px;
    border:none;
    padding:10px;
    border-radius:5px;
    width:120px;
    height:6vh;
    align-self:flex-end;
    cursor:pointer;
   
}

div > button:hover {
    background-color: black;
    
}
`

export const ContainerThirdSection = styled.div`
background-image: url(${props => props.background});
background-size:cover;
background-repeat:no-repeat;
height:100vh;
width:100%;
display:flex;
justify-content:flex-end;
align-items:center;
@media (max-width: 1920px) {
    height: 91vh;
    width: 100%;    
    display: flex;    
    justify-content: flex-end;
    align-items: center;
}
@media (max-width: 1366px) {
    height: 91vh;
    width: 100%;    
    display: flex;    
    justify-content: flex-end;
    align-items: center;
}
`

export const BoxTelTxt = styled.div`
display:flex;
width:50vw;
align-items:top;
justify-content:space-evenly;
@media (max-width: 1920px) {
    display: flex;
    width: 37%; 
    justify-content: space-evenly;
}
@media (max-width: 1366px) {
    display: flex;
    width: 25vw; 
    justify-content: space-evenly;
}
`

export const TextAPP = styled.div`
align-self:flex-top;
height:90%;
@media (max-width: 1920px) {
    height:83%;
}
@media (max-width: 1366px){
    height: 58%;

}



h2 {
    color: #2b3436;
    font-size:50px;
}
p {
    color: white;
    font-size:50px;
}
`

export const Telephone = styled.div`
border-radius:40px;
    @media (max-width: 1366px){
        height: 67vh;
    }
    img{
        height:100%;
    }
}
`


