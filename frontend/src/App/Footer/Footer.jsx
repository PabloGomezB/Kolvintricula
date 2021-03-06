import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CookieConsent from "react-cookie-consent";
import { useStyle } from "../Layout/styles";
import Iframe from "react-iframe";
import { Grid } from "@material-ui/core";
/**
 * Componente que construye el Footer
 * @param {*} param0
 * @returns
 */
export default function Footer() {
  //Declaración de los estilos
  const classes = useStyle();

  return (
    //Muestra los elementos del Footer
    <AppBar position="static" component="footer">
      <Container className={classes.footerContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <div>
              <div>
                <p>El centro</p>
              </div>
              <div>
                <p>
                  Instituto público (08076391) del distrito de Les Corts, con
                  oferta de ESO, Bachillerato, CF de Informática, y de Imagen y
                  sonido, y PFI (Programas de formación e inserción).
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div>
              <div>
                <p>Legal</p>
              </div>
              <div>
                <a
                  href="http://www.institutpedralbes.cat/cookies/"
                  className={classes.a}
                >
                  Cookies
                </a>
              </div>
              <div>
                <a
                  href="http://web.gencat.cat/ca/menu-ajuda/ajuda/avis_legal/"
                  className={classes.a}
                >
                  Aviso legal
                </a>
              </div>
              <div>
                <a
                  href="http://ensenyament.gencat.cat/ca/departament/proteccio-dades/dpd/"
                  className={classes.a}
                >
                  Protección de datos
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div>
              <div>
                <p>Contacto</p>
              </div>
              <div>93 203 33 32</div>
              <div>93 203 36 42</div>
              <div>93 203 83 86</div>
              <div>inspedralbes@xtec.cat</div>
              <a
                href="https://afapedralbes.wordpress.com/"
                className={classes.a}
              >
                Web AFA
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div>
              <div className={classes.div}>
                <p className={classes.p}></p>
                <p>Dirección</p>
              </div>
              <div>Av. Esplugues, 36-42. 08034. Barcelona</div>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4326609789214!2d2.1035558157269683!3d41.38640940401817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49854b2af7bcb%3A0x4e993d78d0267a9f!2sAv.%20d&#39;Esplugues%2C%2036%2C%2042%2C%2008034%20Barcelona!5e0!3m2!1ses!2ses!4v1620892802065!5m2!1ses!2ses"
                width="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </div>
          </Grid>
        </Grid>
        {/* Barra de cookies a aceptar por el alumno */}
        <CookieConsent
          location="bottom"
          cookieName="KolvintriculaCookie"
          buttonText="Entiendo"
          style={{ background: "black" }}
          buttonStyle={{
            color: "#fff",
            fontSize: "12px",
            background: "#006dcc",
            textShadow: "0 1px 1px rgb(255 255 255 / 75%)",
            borderRadius: "3px",
          }}
        >
          Utilizamos cookies para asegurar que damos la mejor experiencia al
          usuario en nuestra web. Si quieres continuar utilizando este sitio
          entendemos que estás de acuerdo.{" "}
          <a
            href="http://www.institutpedralbes.cat/cookies/"
            className={classes.pp}
          >
            Política de privacidad
          </a>
        </CookieConsent>
      </Container>
    </AppBar>
  );
}
