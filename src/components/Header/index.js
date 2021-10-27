import React, { Component } from "react";
import * as S from "./styled";
import SimpleSlider from "./slider.js";


import { graphql, useStaticQuery } from 'gatsby'


export function Header () {

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
          namecarheader
          numbercarheader
          ttlcar
          paragraphcar
          btsearch
        }
      }
    }
    `)
    
  const { logoheader, homebt, taxibt, bookingbt, contactusbt,
     namecarheader,numbercarheader,ttlcar,paragraphcar,btsearch} = data.alldata.headers[0] ;
  
  return (
    <S.ContainerHeader>
        <div>
          <div>
            <img src={logoheader.url}/>
            <S.Menu>
              <ul>
                <a href="#"><li>{homebt}</li></a>
                <a href="#"><li>{taxibt}</li></a>
                <a href="#"><li>{bookingbt}</li></a>
                <a href="#"><li>{contactusbt}</li></a>
              </ul>
            </S.Menu>
          </div>
          <div>
            <SimpleSlider/>
            <div>
              <h2>{ttlcar}</h2>
              <div>
                <p>{paragraphcar}</p>
                <input placeholder="PICKUP"/>
                <input placeholder="DROP" />
                <input placeholder="WHEN"/>
                <button>{btsearch}</button>
              </div>
            </div>
          </div>
        </div>                 
    </S.ContainerHeader>
  );
}   