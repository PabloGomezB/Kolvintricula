import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CookieConsent from "react-cookie-consent";

export default function Footer() {
    return (
        <AppBar position="static" style={{backgroundColor: '#333'}}>
          <Container maxWidth="md">
            <Toolbar style={{height: '350px'}}>
              <Typography variant="body1" color="inherit" style={{width: '350px', height: '200px', marginTop: '-70px', marginRight: '50px'}}>
                <div style={{display: 'flex'}}>
                  <p style={{borderLeft: '5px solid white', marginRight: '10px'}}></p>
                  <p>El centro</p>
                </div>
                <div>Instituto público (08076391) del distrito de Les Corts, con oferta de ESO, Bachillerato, CF de Informática, y de Imagen y sonido, y PFI (Programas de formación e inserción).</div>
              </Typography>
              <Typography variant="body1" color="inherit" style={{width: '250px', height: '200px', marginTop: '-70px', marginRight: '50px'}}>
                <div style={{display: 'flex'}}>
                  <p style={{borderLeft: '5px solid white', marginRight: '10px'}}></p>
                  <p>Legal</p>
                </div>
                <div>
                  <a href="http://www.institutpedralbes.cat/cookies/" style={{textDecoration: 'none', color: 'white'}}>Cookies</a>
                </div>
                <div>
                  <a href="http://web.gencat.cat/ca/menu-ajuda/ajuda/avis_legal/" style={{textDecoration: 'none', color: 'white'}}>Aviso legal</a>
                </div>
                <div>
                  <a href="http://ensenyament.gencat.cat/ca/departament/proteccio-dades/dpd/" style={{textDecoration: 'none', color: 'white'}}>Protección de datos</a>
                </div>
              </Typography>
              <Typography variant="body1" color="inherit" style={{width: '250px', height: '200px', marginTop: '-70px', marginRight: '50px'}}>
                <div style={{display: 'flex'}}>
                  <p style={{borderLeft: '5px solid white', marginRight: '10px'}}></p>
                  <p>Contacto</p>
                </div>
                <div>93 203 33 32</div>
                <div>93 203 36 42</div>
                <div>93 203 83 86</div>
                <div>inspedralbes@xtec.cat</div>
                <a href="https://afapedralbes.wordpress.com/" style={{textDecoration: 'none', color: 'white'}}>Web AFA</a>
              </Typography>
              <Typography variant="body1" color="inherit" style={{width: '250px', height: '200px', marginTop: '-70px', marginRight: '50px'}}>
                <div style={{display: 'flex'}}>
                  <p style={{borderLeft: '5px solid white', marginRight: '10px'}}></p>
                  <p>Dirección</p>
                </div>
                <div>Av. Esplugues, 36-42. 08034. Barcelona</div>
              </Typography>
              {/* <Typography variant="body1" color="inherit" style={{backgroundColor: 'red'}}>
                <p>© 2021 Kolvintrícula</p>
              </Typography> */}
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