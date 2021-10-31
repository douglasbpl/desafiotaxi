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
    tw
    lk
    yu
    paragraphfooter
  }
}
  }
  
  `  )


  const { address, paragraph, links, home, about, taxi, booking, contact, follow, facebook, twitter, linkedin, youtube, instagram, newsletter, email, buttom, ins, fc, tw, lk, yu, paragraphfooter } = data.alldata.footers[0]

  return (

    <S.Container>



<S.Everything> 
      <S.BoxAddress>
        <h1> {address} </h1>
        <p>{paragraph}</p>
      </S.BoxAddress>


      <S.BoxLinks>
        <h1>{links} </h1>

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

          <S.Facebook>
            <img src={facebook.url} alt="instagran" />
            <p> {fc} </p>
          </S.Facebook>

          <S.Twitter>
            <img src={twitter.url} alt="Twitter" />
            <p> {tw} </p>
          </S.Twitter>

          <S.Linkedin>
            <img src={linkedin.url} alt="Linkedin" />
            <p> {lk} </p>
          </S.Linkedin>

          <S.Youtube>
            <img src={youtube.url} alt="Youtube" />
            <p> {yu} </p>
          </S.Youtube>

          <S.Instagram>
            <img src={instagram.url} alt="Instagram" />
            <p> {ins} </p>
          </S.Instagram>


        </S.BoxImg>

      </S.BoxFollow>


      <S.BoxNewsletter>
        <h1>{newsletter}</h1>
<S.InputButton>
        <input refs="email" type="text" size="20" placeholder="Enter Your Email" />
       
      <button> {buttom} </button>
        </S.InputButton>

      </S.BoxNewsletter>

      </S.Everything>

    </S.Container>
  );
}