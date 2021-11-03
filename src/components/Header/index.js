import React from "react";
import * as S from "./styled";
import SimpleSlider from "./slider.js";
import { graphql, useStaticQuery } from 'gatsby'


export function Header() {

  const data = useStaticQuery(graphql`
  query {
    alldata {
      headers {
        logoheader {
          id
          url          
        }
        homebt
        taxibt
        bookingbt
        contactubt        
      }
    }
  }
    `)

  const { logoheader, homebt, taxibt, bookingbt, contactubt } = data.alldata.headers[0];

  return (
    <S.ContainerHeader>

      <S.BoxTopHeader>
        <S.Logo >
          <img src={logoheader.url} />
        </S.Logo>
        <S.Menu>
          <ul>
            <a href="#"><li>{homebt}</li></a>
            <a href="#"><li>{taxibt}</li></a>
            <a href="#"><li>{bookingbt}</li></a>
            <a href="#"><li>{contactubt}</li></a>
          </ul>
        </S.Menu>
      </S.BoxTopHeader>
      <S.ContainerSlider>
        <SimpleSlider />
      </S.ContainerSlider>        
    </S.ContainerHeader>
  );
}