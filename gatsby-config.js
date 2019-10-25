module.exports = {
  pathPrefix: "/slovenska-piratska-strana",
  siteMetadata: {
    title: "Slovenská pirátka strana",
    author: "DMA | upstarter s.r.o.",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/sps_logo_noname.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
