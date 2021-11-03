import React from "react";
import * as S from "./styled";
import { graphql, useStaticQuery } from 'gatsby'


export default function SecondSection() {

  const data = useStaticQuery(graphql`
  query {
    alldata {
        mains {
            whyride
            withuloax
            btnbooknow
            paragraphboxmain
            titleboxoneandthree
            titleboxtwoandfour
            imgboxonewallet {
              id
              url
            }
            imgboxtwogirl {
              id
              url
            }
            imgboxthereeandfourtaxi {
              id
              url
            }            
          }
      
    }
  }
    `)

    const { whyride, withuloax, btnbooknow, paragraphboxmain, titleboxoneandthree
       ,titleboxtwoandfour ,imgboxonewallet , imgboxtwogirl,imgboxthereeandfourtaxi} = data.alldata.mains[0];


  return (
    <div id="SecondSection">
    <S.ContainerSecoSection >
      <S.TittleSecoSection >{whyride} <S.SpUloax>{withuloax}</S.SpUloax> </S.TittleSecoSection>
             <S.IntoSectionleft>
        <figure><img src={imgboxonewallet.url} alt="Wallet image"/></figure>
        <div>
          <h2>{titleboxoneandthree}</h2>
          <p>{paragraphboxmain}</p>
          <button>{btnbooknow}</button>
        </div>        
      </S.IntoSectionleft>

      <S.IntoSectionRight>
        <div>
          <h2>{titleboxtwoandfour}</h2>
          <p>{paragraphboxmain}</p>
          <button>{btnbooknow}</button>
        </div>
        <figure><img src={imgboxtwogirl.url} alt="Secure and Safer Rides image"/></figure>                
      </S.IntoSectionRight>

      <S.IntoSectionleft>
        <figure><img src={imgboxthereeandfourtaxi.url}alt="Wallet image"/></figure>
        <div>
        <h2>{titleboxoneandthree}</h2>
          <p>{paragraphboxmain}</p>
          <button>{btnbooknow}</button>
        </div>        
      </S.IntoSectionleft>

      <S.IntoSectionRight>
        <div>
        <h2>{titleboxtwoandfour}</h2>
          <p>{paragraphboxmain}</p>
          <button>{btnbooknow}</button>
        </div>
        <figure><img src={imgboxthereeandfourtaxi.url} alt="Secure and Safer Rides image"/></figure>                
      </S.IntoSectionRight>
                  
    </S.ContainerSecoSection>
    </div>
  );
}