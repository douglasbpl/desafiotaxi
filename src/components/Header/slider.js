import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./styled";


export default function SimpleSlider() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    focusOnSelect: false,
  };

  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {         
          namecarheader
          numbercarheader
          ttlcar
          paragraphcar
          btsearch
          xadrezcar {
            url
            id
          }
          americataxicar {
            id
            url
          }
        }
        }
      }
      `)

  const { xadrezcar, americataxicar, namecarheader, numbercarheader, ttlcar, paragraphcar, btsearch } = data.alldata.headers[0]



  return (
    <Slider {...settings}>
      <S.ContainerCar>
        <S.BoxTxtCar>
          <S.NameCarHeader>{namecarheader}</S.NameCarHeader>
          <S.ParaCarHeader>{numbercarheader}</S.ParaCarHeader>
        </S.BoxTxtCar>
        <S.ImgCar src={xadrezcar.url} alt="carro america taxi" />
      </S.ContainerCar>
      <S.ContainerSearch>
        <S.TtlCarHeader>{ttlcar}</S.TtlCarHeader>
        <S.BoxSearch>
          <p>{paragraphcar}</p>
          <input placeholder="PICKUP" />
          <input placeholder="DROP" />
          <input placeholder="WHEN" />
          <button>{btsearch}</button>
        </S.BoxSearch>
      </S.ContainerSearch>

      <S.ContainerCar>
        <S.BoxTxtCar>
          <S.NameCarHeader>{namecarheader}</S.NameCarHeader>
          <S.ParaCarHeader>{numbercarheader}</S.ParaCarHeader>
        </S.BoxTxtCar>
        <S.ImgCar src={xadrezcar.url} alt="carro america taxi" />
      </S.ContainerCar>
      <S.ContainerSearch>
        <S.TtlCarHeader>{ttlcar}</S.TtlCarHeader>
        <S.BoxSearch>
          <p>{paragraphcar}</p>
          <input placeholder="PICKUP" />
          <input placeholder="DROP" />
          <input placeholder="WHEN" />
          <button>{btsearch}</button>
        </S.BoxSearch>
      </S.ContainerSearch>

      <S.ContainerCar>
        <S.BoxTxtCar>
          <S.NameCarHeader>{namecarheader}</S.NameCarHeader>
          <S.ParaCarHeader>{numbercarheader}</S.ParaCarHeader>
        </S.BoxTxtCar>
        <S.ImgCar src={americataxicar.url} alt="carro america taxi" />
      </S.ContainerCar>
      <S.ContainerSearch>
        <S.TtlCarHeader>{ttlcar}</S.TtlCarHeader>
        <S.BoxSearch>
          <p>{paragraphcar}</p>
          <input placeholder="PICKUP" />
          <input placeholder="DROP" />
          <input placeholder="WHEN" />
          <button>{btsearch}</button>
        </S.BoxSearch>
      </S.ContainerSearch>
      
    </Slider>
  );
}
