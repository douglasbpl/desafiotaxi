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

    <S.Container id="Contact Us">

      <S.BoxSectionOneF>

        <S.Everything>
          <S.BoxAddress>
            <h1> {address} </h1>
            <p>{paragraph}</p>
          </S.BoxAddress>


          <S.BoxLinks>
            <h1>{links} </h1>
            <ul>


            <a href="#home"><li> <span> <img src={limarcador.url} /></span> {home} </li></a>
            <a href="#"><li> <span> <img src={limarcador.url} /> </span> {about}</li></a>
            <a href="#FirstSection"><li> <span> <img src={limarcador.url} /> </span> {taxi} </li></a>
              <a href="#SecondSection"><li> <span> <img src={limarcador.url} /> </span> {booking} </li></a>
              <a href="#Contact Us"><li> <span> <img src={limarcador.url} /> </span> {contact} </li></a>
            </ul>
          </S.BoxLinks>


          <S.BoxFollow>

          <div><h1> {follow} </h1></div>
          <ul>

<li> <span> <img src={facebook.url} /> </span> <a href="https://www.facebook.com/" target="_blank"> {fc} </a> </li>
<li> <span> <img src={twitter.url} /> </span> <a href="https://twitter.com/" target="_blank"> {tw} </a> </li>
<li> <span> <img src={linkedin.url} /> </span> <a href="https://www.linkedin.com/feed/" target="_blank"> {lk} </a> </li>
<li> <span> <img src={youtube.url} /> </span> <a href="https://www.youtube.com/" target="_blank"> {yu} </a> </li>
<li> <span> <img src={instagram.url} /> </span> <a href="https://www.instagram.com/" target="_blank"> {ins} </a> </li>

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