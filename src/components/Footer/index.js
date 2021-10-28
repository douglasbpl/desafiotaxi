import React from "react";
import * as S from "./styled";
import { useStaticQuery, graphql } from "gatsby"


export function Footer() {

  const data = useStaticQuery(graphql`  
  query {
alldata{
footers {
    address
    paragraph
    links
    home
    about
    taxi
    booking
    contact
    follow
    facebook {
      url
    }
    twitter {
      url
    }
    linkedin {
      url
    }
    youtube {
      url
    }
    instagram {
      url
    }
    newsletter
    email
    buttom
   ins
    fc
    lk
    yu
    tw
  }
}
}

  
  `  )


  const { ins, fc, lk, yu, tw, address, paragraph, links, home, about, taxi, booking, contact, follow, facebook, twitter, linkedin, youtube, instagram, newsletter, email, buttom } = data.alldata.footers[0]


  return (


    <S.Container>

      <S.BoxAddress>
        <h1> {address} </h1>
        <p>{paragraph}</p>
      </S.BoxAddress>


      <S.BoxLinks>
        <h1> {links} </h1>
        <ul>
          <li>{home} </li>
          <li> {about}</li>
          <li> {taxi} </li>
          <li> {booking} </li>
          <li> {contact} </li>
        </ul>
      </S.BoxLinks>


      <S.BoxFollow>
        <h1> {follow} </h1>
        <S.BoxImg>
          <img src={facebook.url} alt="instagran" />
          <img src={twitter.url} alt="Twitter" />
          <img src={linkedin.url} alt="Linkedin" />
          <img src={youtube.url} alt="Youtube" />
          <img src={instagram.url} alt="Instagram" />
        </S.BoxImg>


        <S.BoxParagraphs>

          <p> {fc} </p>
          <p>{tw} </p>
          <p> {lk} </p>
          <p> {yu} </p>
          <p> {ins} </p>

        </S.BoxParagraphs>

      </S.BoxFollow>


      <S.BoxNewsletter>
        <h1> {newsletter} </h1>

        <input refs="email" type="text" size="20" placeholder="Enter Your Email" />
        <p> {email} </p>
        <button> {buttom} </button>
      </S.BoxNewsletter>


    </S.Container>
  );
}