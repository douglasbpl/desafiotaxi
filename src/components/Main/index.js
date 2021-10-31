import React from "react";
import * as S from "./styled";
import FirstSection from "./firstsection";
import SecondSection from "./secondsection";
import ThirdSection from "./thirdsection";

export function Main() {
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