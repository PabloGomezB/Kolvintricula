import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CookieConsent from "react-cookie-consent";
import { useStyle } from "../Layout/styles";
import Iframe from 'react-iframe';
// import { useCookies } from "react-cookie";

export default function Footer() {
  const classes = useStyle();
  let aceptar = false;
  //const [cookies, setCookie] = useCookies(["cookie"]);

  return (
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolBar}>
            <Typography variant="body1" color="inherit" className={classes.typography}>
              <div className={classes.div}>
                <p className={classes.p}></p>
                <p>El centro</p>
              </div>
              <div>Instituto público (08076391) del distrito de Les Corts, con oferta de ESO, Bachillerato, CF de Informática, y de Imagen y sonido, y PFI (Programas de formación e inserción).</div>
            </Typography>
            <Typography variant="body1" color="inherit" className={classes.typography}>
              <div className={classes.div}>
                <p className={classes.p}></p>
                <p>Legal</p>
              </div>
              <div>
                <a href="http://www.institutpedralbes.cat/cookies/" className={classes.a}>Cookies</a>
              </div>
              <div>
                <a href="http://web.gencat.cat/ca/menu-ajuda/ajuda/avis_legal/" className={classes.a}>Aviso legal</a>
              </div>
              <div>
                <a href="http://ensenyament.gencat.cat/ca/departament/proteccio-dades/dpd/" className={classes.a}>Protección de datos</a>
              </div>
            </Typography>
            <Typography variant="body1" color="inherit" className={classes.typography}>
              <div className={classes.div}>
                <p className={classes.p}></p>
                <p>Contacto</p>
              </div>
              <div>93 203 33 32</div>
              <div>93 203 36 42</div>
              <div>93 203 83 86</div>
              <div>inspedralbes@xtec.cat</div>
              <a href="https://afapedralbes.wordpress.com/" className={classes.a}>Web AFA</a>
            </Typography>
            <Typography variant="body1" color="inherit" className={classes.typography}>
              <div className={classes.div}>
                <p className={classes.p}></p>
                <p>Dirección</p>
              </div>
              <div>Av. Esplugues, 36-42. 08034. Barcelona</div>
              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4326609789214!2d2.1035558157269683!3d41.38640940401817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49854b2af7bcb%3A0x4e993d78d0267a9f!2sAv.%20d&#39;Esplugues%2C%2036%2C%2042%2C%2008034%20Barcelona!5e0!3m2!1ses!2ses!4v1620892802065!5m2!1ses!2ses"
                      width="250px"
                      height="200px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"/>
            </Typography>
            {/* <Typography variant="body1" color="inherit" style={{backgroundColor: 'red'}}>
              <p>© 2021 Kolvintrícula</p>
            </Typography> */}
          </Toolbar>
          
          <CookieConsent
            cookieValue={true}
            location="bottom"
            buttonText="De acuerdo"
            cookieName="KolvintriculaCookie"
            hideOnAccept={true}
            style={{ background: "black" }}
            buttonStyle={{ color: "#fff", fontSize: "12px", background: "#006dcc", textShadow: "0 1px 1px rgb(255 255 255 / 75%)", borderRadius: "3px" }}
          >
            Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si quieres continuar utilizando este sitio entendemos que estás de acuerdo.{" "}
            <a href="http://www.institutpedralbes.cat/cookies/" className={classes.pp}>Política de privacidad</a>
          </CookieConsent>
        </Container>
      </AppBar>
  )
}