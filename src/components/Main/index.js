import React from "react";
import * as S from "./styled";
import FirstSection from "./firstsection";
import SecondSection from "./secondsection";
import ThirdSection from "./thirdsection";

import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

const data = useStaticQuery(graphql`
  query {
    alldata {
        mains {
            our
            taxi
            ballone
            carone
            balltwo
            cartwo
            carthree
            ballthree
            paragraphcar
            imgthreecars {
              id
              url
            }
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

    const { our, Taxi,ballone, carone, balltwo ,cartwo ,ballthree , carthree,paragraphcar ,imgthreecars} = data.alldata.mains[0];


  return (

 
    <S.ContainerMain>
      <S.Divide></S.Divide>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <S.Divide></S.Divide>
    </S.ContainerMain>
  );
}

