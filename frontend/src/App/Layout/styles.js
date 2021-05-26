import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";

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
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(12),
      width: theme.breakpoints.values.md,
    },
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mainContainer: {
    backgroundImage:
      'linear-gradient(black, black), url("https://myfin.by/source/thumb_440_880/1/1458643080site.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    backgroundBlendMode: "saturation",
  },
  footerContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  //Enrolment list
  titleEnrolList: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  //Botones
  btn: {
    margin: theme.spacing(2),
    borderRadius: "20px",
    border: "5px solid #231F20",
  },
  buttonDisabled: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    width: "50%",
    borderRadius: "15px",
    border: "4px solid #231F20",
    backgroundColor: "#dddddd",
  },
  buttonEnabled: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    width: "50%",
    borderRadius: "15px",
    border: "4px solid #231F20",
  },
  loadingButton: {
    marginLeft: theme.spacing(50),
  },
  addCustodian: {
    marginTop: "5%",
    border: "5px solid #231F20",
    borderRadius: "20px",
  },
  removeCustodian: {
    border: "5px solid #231F20",
    borderRadius: "20px",
  },
  photoButton: {
    borderRadius: "20px",
  },
  loadData: {
    margin: theme.spacing(2),
    borderRadius: "15px",
    border: "4px solid #231F20",
  },

  //Canvas firma
  canvasFirma: {
    border: "1px solid #000000",
    width: 500,
    height: 200,
  },

  //Otros
  alignRight: {
    textAlign: "right",
  },
  alignCenter: {
    textAlign: "center",
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

  errorPhoto: {
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
    float: "right",
    marginTop: "-30px",
    marginRight: "-20px",
    padding: "-20px",
  },
}));

export { theme, useStyle };
