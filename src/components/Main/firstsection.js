import React from "react";
import * as S from "./styled";

export default function FirstSection() {
    return (
        <S.ContainerFiSection>
            <S.TitleOur>Our <S.Taxi>Taxi</S.Taxi></S.TitleOur>
            <S.ContainerBoxCard>
                <div>
                    <h3>CAR 1</h3>
                    <p>act that a reader will be distracted</p>
                    <figure>
                        <img src="https://uloax-template.netlify.app/images/img-2.png" alt="car image"/>
                    </figure>
                </div>

                <div>
                    <h3>CAR 2</h3>
                    <p>act that a reader will be distracted</p>
                    <figure>
                        <img src="https://uloax-template.netlify.app/images/img-2.png" alt="car image"/>
                    </figure>
                </div>

                <div>
                    <h3>CAR 3</h3>
                    <p>act that a reader will be distracted</p>
                    <figure>
                        <img src="https://uloax-template.netlify.app/images/img-2.png" alt="car image"/>
                    </figure>
                </div>
            </S.ContainerBoxCard>
        </S.ContainerFiSection>
    );
}