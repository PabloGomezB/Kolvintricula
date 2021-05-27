import PropTypes from "prop-types";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import FormikControl from "../../FormFields/FormikControl";
import { SignatureField } from "../../FormFields/SignatureField";
import { Paper, TableContainer } from "@material-ui/core";

/**
 * Componente que cosntruye el paso de consentimiento
 * @param {*} param0
 * @returns
 */
const Consent = () => {
  return (
    //Muestra la información con respecto al consentimiento y la firma
    <div>
      <h4>DECLARACIÓN RESPONSABLES</h4>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan="2">
                Informació bàsica sobre protecció de dades en compliment del
                Reglament General de Protecció de Dades (Reglament UE 2016/679
                del Parlament Europeu i del Consell, de 27 d'abril de 2016)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Finalitat, legitimació i destinataris</TableCell>
              <TableCell>
                S'indica més avall en cada clàusula de consentiment
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Responsable</TableCell>
              <TableCell>Institut Pedralbes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Drets</TableCell>
              <TableCell>
                Accedir a les dades, rectificar-les, suprimir-les, oposar-se al
                tractament i sol·licitar-ne la limitació.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Període de validesa</TableCell>
              <TableCell>
                Curs acadèmic per al qual es formalitza la matrícula
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Informació addicional</TableCell>
              <TableCell>
                Podeu consultar la informació addicional i detallada sobre
                protecció de dades a les pàgines:
                <ul>
                  <li>
                    http://ensenyament.gencat.cat/ca/departament/proteccio-dades/informacio-addicional-
                    tractaments/alumnes-centres-departament.html
                  </li>
                  <li>www.institutpedralbes.cat (Secció Avisos legals )</li>
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <ol>
        <li>
          He estat informat que, pel fet de formalitzar la matrícula en aquest
          centre, estic donant el meu consentiment:
          <ul>
            <li>
              per al tractament de les meves dades (en el cas d'alumnes majors
              d'edat) o del meu/va fill/a (en el cas d'alumnes menors d'edat)
              per part del centre per a l'exercici de la seva funció educativa i
              orientadora.
            </li>
            <li>
              per al tractament de les meves dades (en el cas d'alumnes majors
              d'edat) o del meu/va fill/a (en el cas d'alumnes menors d'edat)
              per part del centre per raons d'interès públic o en exercici de
              poders públics, atès que el centre compta amb un circuit de
              videovigilància.
            </li>
            <li>
              perquè el centre pugui assignar-me (en el cas d'alumnes majors
              d'edat) o assignar al meu/va fill/a (en el cas d'alumnes menors
              d'edat) una adreça de correu electrònic, en el marc de la seva
              activitat docent i amb un ús limitat a aquesta finalitat, amb el
              benentès que això no inclou l'ús d'aquestes adreces de correu en
              plataformes digitals que no depenen del centre.
            </li>
            <li>
              perquè el centre pugui utilitzar la meva adreça de correu
              electrònic per informar-me sobre activitats extraescolars
              organitzades pel centre o per l'AFA (Associació de famílies
              d'alumnes)
            </li>
          </ul>
        </li>
        <li>
          Autorització de sortides del recinte escolar (només en el cas
          d'alumnes menors d'edat). Autoritzo el meu/va fill/a a participar en
          totes aquelles activitats del centre aprovades pel Consell Escolar,
          que impliquin sortir de l'institut i utilitzar, si cal, transport
          públic. Període de validesa de l'autorització: curs
          <FormikControl
            control="radio"
            name="consent.c2"
            options={[
              { key: "Sí", value: "yes" },
              { key: "No", value: "no" },
            ]}
          />
        </li>
        <li>
          Autorització per a l’ús de la pròpia imatge. Dono el meu consentiment
          explícit per al tractament de la meva imatge (en el cas d'alumnes
          majors d'edat) o del meu/va fill/a (en el cas d'alumnes menors d'edat)
          (fotografia i/o filmacions) per al seu ús en el web, intranet, xarxes
          socials, revistes i altres publicacions del propi centre,
          corresponents a activitats escolars lectives i complementaries
          organitzades pel centre, amb el benentès que sense el meu consentiment
          el centre només podrà fer servir la imatge difuminada per tal que no
          sigui identificable.
          <FormikControl
            control="radio"
            name="consent.c3"
            options={[
              { key: "Sí", value: "yes" },
              { key: "No", value: "no" },
            ]}
          />
        </li>
        <li>
          Autorització per a l’ús del material propi. Dono el meu consentiment
          explícit perquè el material elaborat per mi (en el cas d'alumnes
          majors d'edat) o pel el meu fill/a (en el cas d'alumnes menors d'edat)
          pugui ser publicat en els espais de comunicació (blogs, espais web,
          xarxes socials i revistes) del mateix centre amb la finalitat de
          desenvolupar l'activitat educativa.
          <FormikControl
            control="radio"
            name="consent.c4"
            options={[
              { key: "Sí", value: "yes" },
              { key: "No", value: "no" },
            ]}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Finalitat</TableCell>
                  <TableCell>
                    Gestió de l'acció educativa i orientadora.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Legitimació</TableCell>
                  <TableCell>
                    Consentiment de l’interessat o de la persona que ostenta la
                    tutoria legal en cas de menors d’edat.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Destinataris</TableCell>
                  <TableCell>
                    Les dades no es comunicaran a tercers, excepte en els casos
                    previstos per llei, o si ho heu consentit prèviament.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </li>
        <li>
          Autorització per a informar pare, mare o tutor/a legal (només en el
          cas d'alumnes majors d'edat). Dono la meva autorització perquè el
          centre es pugui posar en contacte amb el meu pare, mare o tutor/a
          legal, i els informi sobre el meu rendiment acadèmic, qualificacions
          obtingudes, faltes d’assistència, retards o qualsevol altra informació
          o incidència que els pugui resultar d’interès en relació amb el meu
          procés formatiu.
          <FormikControl
            control="radio"
            name="consent.c5"
            options={[
              { key: "Sí", value: "yes" },
              { key: "No", value: "no" },
            ]}
          />
        </li>
        <li>
          Autorització per a la tramesa del CV a empreses de pràctiques. Dono el
          meu consentiment explícit perquè el meu currículum vitae (en el cas
          d'alumnes majors d'edat) o del meu fill/a (en el cas d'alumnes menors
          d'edat) pugui ser tramès per part del centre a les empreses on
          s'haurien de dur a terme les pràctiques lectives.
          <FormikControl
            control="radio"
            name="consent.c6"
            options={[
              { key: "Sí", value: "yes" },
              { key: "No", value: "no" },
            ]}
          />
          <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
              <TableBody>
                <TableRow>
                  <TableCell>Finalitat</TableCell>
                  <TableCell>
                    Gestió de l'acció educativa i orientadora.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Legitimació</TableCell>
                  <TableCell>
                    Consentiment de l’interessat o de la persona que ostenta la
                    tutoria legal en cas de menors d’edat.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Destinataris</TableCell>
                  <TableCell>
                    Les dades no es comunicaran a tercers, excepte en els casos
                    previstos per llei, o si ho heu consentit prèviament.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </li>
        <li>
          Autorització per al tractament de dades mèdiques de l'alumne/a. Dono
          el meu consentiment explícit perquè el centre pugui tractar les
          següents dades mèdiques en l'exercici de la seva funció educativa i
          orientadora.
          <FormikControl
            control="radio"
            name="consent.c7"
            options={[
              { key: "Sí", value: "yes" },
              { key: "No", value: "no" },
            ]}
          />
          <p>
            Indiqueu tota informació mèdica del futur alumne/a que considereu
            rellevant conèixer en el context educatiu:
          </p>
          <FormikControl
            control="input"
            type="text"
            label="Enfermades"
            name="consent.enfermedades"
            fullWidth
          />
          <FormikControl
            control="input"
            type="text"
            label="Alergias"
            name="consent.alergias"
            fullWidth
          />
          <FormikControl
            control="input"
            type="text"
            label="Medicamentos"
            name="consent.medicamentos"
            fullWidth
          />
          <FormikControl
            control="input"
            type="text"
            label="Otros"
            name="consent.otros"
            fullWidth
          />
          <TableContainer component={Paper}>
            <Table aria-label="custom pagination table">
              <TableBody>
                <TableRow>
                  <TableCell>Finalitat</TableCell>
                  <TableCell>
                    Gestió de l'acció educativa i orientadora.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Legitimació</TableCell>
                  <TableCell>
                    Consentiment de l’interessat o de la persona que ostenta la
                    tutoria legal en cas de menors d’edat.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Destinataris</TableCell>
                  <TableCell>
                    Les dades no es comunicaran a tercers, excepte en els casos
                    previstos per llei, o si ho heu consentit prèviament.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </li>
      </ol>
      <SignatureField />
    </div>
  );
};

Consent.propTypes = {
  /** Errores */
  errors: PropTypes.any,
  /** Funcion para guarda en values de formik */
  setFieldValue: PropTypes.func,
};

export default Consent;
