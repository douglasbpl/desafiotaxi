import React from "react"; 
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'

export default function ThirdSection() {

  const data = useStaticQuery(graphql`
  query {
    alldata {
        mains {
            titledownload
            paragraphourapp
            imgmobile {
              id
              url
            }
            background {
              id
              url
            }
          }
      
    }
  }
    `)

    const { titledownload, paragraphourapp, imgmobile, background  } = data.alldata.mains[0];

  
  return (
    <S.ContainerThirdSection id="ThirdSection" background = {background.url}>   
    
    <S.TextAPP>
      <h2>{titledownload}</h2>
      <p>{paragraphourapp}</p>          
    </S.TextAPP> 
      <S.BoxTelTxt>
      <div></div>
    <S.Telephone>
      <img src={imgmobile.url} alt="mobile telephone"/>
    
    </S.Telephone>              
    </S.BoxTelTxt>   
    </S.ContainerThirdSection>
    );
}   