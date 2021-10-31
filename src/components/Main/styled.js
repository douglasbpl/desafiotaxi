import styled from 'styled-components';

export const ContainerMain = styled.section`
width: 100%;

h2{

text-align: center;
    font-size: 3rem;
    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, black 48%, yellow 49%);
    

}
`
export const ContainerBoxOne= styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Imag = styled.div ` 
width: 30%;
heigth: 50vh;
margin-left: 3rem;
img{
    width: 100%;
}

`

export const Texts = styled.div ` 
width: 60%;
margin-right: 3rem;

h1{
    font-size: 4vh;
}

p{
    font-size: 3vh;
}

button{
    width: 12vw;
        height: 8vh;
        font-size: 3vh;
        background-color: gold;
        color: #FFFAFA;
        cursor: pointer;
         &:hover {
            
                background-color: #000000;
                        }
    }
`


export const ContainerBoxTwo = styled. div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

