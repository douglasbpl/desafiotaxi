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
width:60%;
justify-content:space-around;
align-items:center;
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-color:white;
        width:30%;
        text-align:center;
        height:45vh;        
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
`

export const ContainerSecoSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`

export const TittleSecoSection = styled.h2`
text-align:center;
font-size:50px;

`
export const SpUloax = styled.span`
color:#f4db31;
`
export const IntoSectionleft = styled.div`
display:flex;
width:50%;
&:hover{
    transform: scale(1.3);
transition: all 0.1s ease 0s;
} 
div {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-color:white;
    width:70%;
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
    width:25%;
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
&:hover{
    transform: scale(1.3);
transition: all 0.1s ease 0s;
}
div {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    background-color:white;
    width:70%;
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
    width:25%;
    height:6vh;
    align-self:flex-end;
    cursor:pointer;
   
}
div > button:hover {
    background-color: black;
    
}
`

export const ContainerThirdSection = styled.div`
background-image: url(https://media.graphcms.com/output=format:jpg/resize=,height:800,fit:max/3yE0Qst4TCetmwoxfDAj);
background-size:cover;
background-repeat:no-repeat;
height:100vh;
weight:100%;
display:flex;
justify-content:space-evenly;
`
export const TextAPP = styled.div`
width:15%;
    position:relative;
    left:12vw;
    top:8vh;   
}
h2 {
    color: #2b3436;
    font-size:40px;
}
p {
    color: white;
    font-size:40px;
}
`

export const Telephone = styled.div`
width:15%;
position:relative;
left:14vw;
top:165px;
display:flex;
height:80%;
border-bottom:solid 2px gold;
   
}


img > {
    width:100%; 

    
}


`


