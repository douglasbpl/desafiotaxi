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
    <S.ContainerHeader id="home">

      <S.BoxTopHeader>
        <S.Logo >
          <img src={logoheader.url} />
        </S.Logo>
        <S.Menu>
          <ul>
            <a href="#home"><li>{homebt}</li></a>
            <a href="#FirstSection"><li>{taxibt}</li></a>
            <a href="#SecondSection"><li>{bookingbt}</li></a>
            <a href="#Contact Us"><li>{contactubt}</li></a>
          </ul>
        </S.Menu>
      </S.BoxTopHeader>
      <S.ContainerSlider>
        <SimpleSlider />
      </S.ContainerSlider>        
    </S.ContainerHeader>
  );
}