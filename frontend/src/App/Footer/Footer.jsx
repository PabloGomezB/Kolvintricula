import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CookieConsent from "react-cookie-consent";

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Kolvintrícula
              </Typography>
            </Toolbar>
            {/* <CookieBanner
              message="Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si quieres continuar utilizando este sitio entendemos que estás de acuerdo."
              onAccept={() => {}}
              buttonText="De acuerdo"
              cookie="user-has-accepted-cookies" /> */}
            <CookieConsent
              debug={true}
              location="bottom"
              buttonText="Entiendo"
              style={{ background: "black" }}
              buttonStyle={{ color: "#fff", fontSize: "12px", background: "#006dcc", textShadow: "0 1px 1px rgb(255 255 255 / 75%)", borderRadius: "3px" }}
            >
              Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si quieres continuar utilizando este sitio entendemos que estás de acuerdo.{" "}
              <a href="http://www.institutpedralbes.cat/cookies/" style={{color: "#fff", fontSize: "12px", background: "#006dcc", textShadow: "0 1px 1px rgb(255 255 255 / 75%)", borderRadius: "3px", padding: "2px 10px", textDecoration: "none" }}>Política de privacidad</a>
            </CookieConsent>
          </Container>
        </AppBar>
    )
}