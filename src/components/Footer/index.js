import React from "react";
import * as S from "./styled";
import { useStaticQuery, graphql } from "gatsby"

export function Footer() {

  const data = useStaticQuery(graphql`  
  query {
    alldata{
   footers {
    address
    links
    paragraph
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
    fc
    tw
    lk
    yu
    ins
    limarcador{
      url
    }
    paragraphfooter
  }
}
 
    }
  
  `  )


  const { address, links, paragraph, home, about, taxi, booking, contact, follow, facebook, twitter, linkedin, youtube, instagram, newsletter, email, buttom, ins, fc, tw, lk, yu, limarcador, paragraphfooter } = data.alldata.footers[0]

  return (

    <S.Container>

      <S.BoxSectionOneF>

        <S.Everything>
          <S.BoxAddress>
            <h1> {address} </h1>
            <p>{paragraph}</p>
          </S.BoxAddress>


          <S.BoxLinks>
            <h1>{links} </h1>
            <ul>


              <li> <span> <img src={limarcador.url} /> </span> {home} </li>
              <li> <span> <img src={limarcador.url} /> </span> {about}</li>
              <li> <span> <img src={limarcador.url} /> </span> {taxi} </li>
              <li> <span> <img src={limarcador.url} /> </span> {booking} </li>
              <li> <span> <img src={limarcador.url} /> </span> {contact} </li>
            </ul>
          </S.BoxLinks>


          <S.BoxFollow>

          <div><h1> {follow} </h1></div>
            <ul>
              <li> <span> <img src={facebook.url} /> </span> {fc} </li>
              <li> <span> <img src={twitter.url} /> </span> {tw} </li>
              <li> <span> <img src={linkedin.url} /> </span> {lk} </li>
              <li> <span> <img src={youtube.url} /> </span> {yu} </li>
              <li> <span> <img src={instagram.url} /> </span> {ins} </li>
            </ul>

          </S.BoxFollow>


          <S.BoxNewsletter>
            <h1>{newsletter}</h1>
            <S.InputButton>
              <input refs="email" type="text" size="20" placeholder={email} />

              <button> {buttom} </button>
            </S.InputButton>

          </S.BoxNewsletter>

        </S.Everything>
      </S.BoxSectionOneF>

      <S.BoxParagraphFooter>
        <h2> {paragraphfooter} </h2>


      </S.BoxParagraphFooter>

    </S.Container>
  );
}