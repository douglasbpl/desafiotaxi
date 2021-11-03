module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "DesafioTaxi",
  },
  plugins: ["gatsby-plugin-styled-components"],
  plugins: [`gatsby-plugin-react-helmet`],
  plugins: [   
    {
      resolve: "gatsby-source-graphql",
      options: {
                typeName: "alldata",
                fieldName: "alldata",
                url: "https://api-us-east-1.graphcms.com/v2/ckvgu3guf3giu01z05fc68ium/master",
      },
    },
  ]
  }


