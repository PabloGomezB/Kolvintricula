import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";

import backgroundImageCourses from "../img/backgroundImageCourses.png";

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#231F20",
    },
    secondary: {
      main: "#00AEEF",
    },
  },
});
theme = responsiveFontSizes(theme);
const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    margin: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),
      width: theme.breakpoints.values.md,
    },
  },
  mainContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    // backgroundImage:
    //   'linear-gradient(black, black), url("https://myfin.by/source/thumb_440_880/1/1458643080site.jpg")',
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // borderRadius: "10px",
    // backgroundBlendMode: "saturation",
  },
  footerContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  //Enrolment list
  divEnrolList: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
  },
  //Botones
  btnEnrolList: {
    width: "70%",
  },
  btnEnrolmentBack: {
    float: "left",
  },

  addCustodian: {
    marginTop: theme.spacing(4),
  },

  //Canvas firma
  canvasFirma: {
    border: "1px solid #000000",
    width: 240,
    height: 200,
    [theme.breakpoints.up("sm")]: {
      width: 500,
    },
  },

  //Otros
  alignRight: {
    textAlign: "right",
  },
  alignCenter: {
    textAlign: "center",
  },
  marginTop: {
    marginTop: theme.spacing(8),
  },
  dblock: {
    display: "block",
  },
  dflex: {
    display: "flex",
  },
  flexend: {
    justifyContent: "flex-end",
  },
  paddingTop: {
    paddingTop: theme.spacing(1),
  },

  containerHeader: {
    padding: theme.spacing(3),
  },
  floatLeft: {
    float: "left",
  },
  floatRight: {
    float: "right",
  },

  a: {
    textDecoration: "none",
    color: "white",
  },
  pp: {
    color: "#fff",
    fontSize: "12px",
    background: "#006dcc",
    textShadow: "0 1px 1px rgb(255 255 255 / 75%)",
    borderRadius: "3px",
    padding: "5px",
    textDecoration: "none",
  },
  textFieldNIF: {
    marginBottom: "20px",
  },

  error: {
    color: "red",
    textAlign: "center",
    fontWeight: "400",
  },
  photoPosition: {
    textAlign: "center",
  },

  studentData: {
    textAlign: "center",
  },
  academicData: {
    marginBottom: "1.5%",
  },
  loading: {
    textAlign: "center",
  },

  //Dialogs
  dialogTitleSuccess: {
    border: "3px solid green",
    borderBottom: "0",
  },
  dialogContentSuccess: {
    border: "3px solid green",
    borderTop: "0",
  },
  dialogTitleError: {
    border: "3px solid red",
    borderBottom: "0",
  },
  dialogContentError: {
    border: "3px solid red",
    borderTop: "0",
  },
  dialogButtonSuccess: {
    position: "absolute",
    top: "15px",
    left: "83%",
    backgroundColor: "#BDFFCB",
  },
  imageStudent: {
    borderRadius: '50px'
  }
}));

export { theme, useStyle };
