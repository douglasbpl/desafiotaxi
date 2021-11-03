import React from "react";
import * as S from "./styled";

import { graphql, useStaticQuery } from 'gatsby'

export default function FirstSection() {

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

    const { our, taxi, ballone, carone, balltwo ,cartwo ,ballthree , carthree,paragraphcar ,imgthreecars} = data.alldata.mains[0];



    return (
        <S.ContainerFiSection id="FirstSection">
            <S.TitleOur> {our} <S.Taxi>{taxi}</S.Taxi></S.TitleOur>
            <S.ContainerBoxCard>
                <div>
                  <div><p>{ballone}</p></div>
                    <h3>{carone}</h3>
                    <p>{paragraphcar}</p>
                    <figure>
                        <img src={imgthreecars.url} alt="car image"/>
                    </figure>
                </div>

                <div>
                <div><p>{balltwo}</p></div>
                    <h3>{cartwo}</h3>
                    <p>{paragraphcar}</p>
                    <figure>
                        <img src={imgthreecars.url} alt="car image"/>
                    </figure>
                </div>

                <div>
                <div><p>{ballthree}</p></div>
                    <h3>{carthree}</h3>
                    <p>{paragraphcar}</p>
                    <figure>
                        <img src={imgthreecars.url} alt="car image"/>
                    </figure>
                </div>

                
            </S.ContainerBoxCard>
        </S.ContainerFiSection>
    );
}