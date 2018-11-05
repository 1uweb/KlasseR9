import NextHead from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const HeadTag = (props) => (
    <NextHead>
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>
        <meta charSet="UTF-8" />
        <title>Klasse R9 | Uwe Barthel</title>
        <meta name="description" content="Projekt Website vom Chemnitz Projekt der Klasse R9 des Terra Nova Campus für den Wettwerb der BpB!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://cdn.uwe-barthel.net/landing/images/favicons/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="https://cdn.uwe-barthel.net/landing/images/favicons/favicon-128.png" sizes="128x128" />
        <meta name="msapplication-TileColor" content="#D6D6D6" />
        <meta name="msapplication-TileImage" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="https://cdn.uwe-barthel.net/landing/images/favicons/mstile-310x310.png" />
    </NextHead>
)

export default HeadTag