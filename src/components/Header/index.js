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
        contactusbt        
      }
      }
    }
    `)

  const { logoheader, homebt, taxibt, bookingbt, contactusbt } = data.alldata.headers[0];

  return (
    <S.ContainerHeader>

      <S.BoxTopHeader>
        <figure>
          <S.Logo src={logoheader.url} />
        </figure>
        <S.Menu>
          <ul>
            <a href="#"><li>{homebt}</li></a>
            <a href="#"><li>{taxibt}</li></a>
            <a href="#"><li>{bookingbt}</li></a>
            <a href="#"><li>{contactusbt}</li></a>
          </ul>
        </S.Menu>
      </S.BoxTopHeader>
      <S.ContainerSlider>
        <SimpleSlider />
      </S.ContainerSlider>

        <h1>Estou na Header</h1>
        <h2>OI</h2>

    </S.ContainerHeader>
  );
}