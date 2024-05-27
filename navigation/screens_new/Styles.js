//login css
// import { blue, darkBlue } from "./Constants";

// export const Styles = {
//     container: {
//       alignItems: "center",
//       width: 360,
//     },
//     title: {
//       color: "white",
//       fontSize: 50,
//       fontWeight: "bold",
//       marginVertical: 40,
//       marginBottom: 15,
//     },
//     formContainer: {
//       backgroundColor: "white",
//       height: 750,
//       width: 470,
//       borderTopLeftRadius: 170,
//       paddingTop: 40,
//       alignItems: "center",
//       marginTop: 20,
//     },
//     welcomeText: {
//       fontSize: 30,
//       color: blue,
//       fontWeight: "bold",
//     },
//     descriptionText: {
//       color: "#a9a9a9",
//       fontSize: 17,
//       fontWeight: "bold",
//       marginBottom: 20,
//     },
//     fieldContainer: {
//       // Add your Field component styles here
//     },
//     forgotPasswordContainer: {
//       alignItems: "flex-end",
//       width: '78%',
//       paddingRight: 35,
//       marginBottom: 315,
//     },
//     buttonContainer: {
//       // Add your Button component styles here
//     },
//     signUpContainer: {
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'center',
//     },
//     signUpText: {
//       fontSize: 15,
//     },
//     signUpLink: {
//       color: darkBlue,
//       fontWeight: 'bold',
//       fontSize: 15,
//     },
//   };


//signup css
// import { blue, darkBlue } from "./Constants";

// export const signupStyles = {
//   container: {
//     alignItems: "center",
//     width: 360,
//   },
//   title: {
//     color: "white",
//     fontSize: 50,
//     fontWeight: "bold",
//     marginVertical: 40,
//     marginTop: 50,
//     marginBottom: 5,
//   },
//   subtitle: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   formContainer: {
//     backgroundColor: "white",
//     height: 750,
//     width: 470,
//     borderTopLeftRadius: 150,
//     paddingTop: 40,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   fieldContainer: {
//     // Add your Field component styles here
//   },
//   forgotPasswordContainer: {
//     alignItems: "flex-end",
//     width: '78%',
//     paddingRight: 35,
//     marginBottom: 181,
//   },
//   buttonContainer: {
//     // Add your Button component styles here
//   },
//   loginContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   loginText: {
//     fontSize: 15,
//   },
//   loginLink: {
//     color: darkBlue,
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
// };



import { blue, darkBlue } from "./Constants";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Styles = {
  container: {
    alignItems: "center",
    width: 360,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 40,
    marginBottom: 15,
  },
  ieldLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  formContainer: {
    backgroundColor: "white",
    height: 750,
    width: 470,
    borderTopLeftRadius: 170,
    paddingTop: 40,
    alignItems: "center",
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 30,
    color: blue,
    fontWeight: "bold",
  },
  descriptionText: {
    color: "#a9a9a9",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
  },
  fieldContainer: {
    // Add your Field component styles here
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    width: '78%',
    paddingRight: 35,
    marginBottom: (width >= 320 && width <= 480) ? 200 : 315,
  },
  buttonContainer: {
    // Add your Button component styles here
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 15,
  },
  signUpLink: {
    color: darkBlue,
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    alignItems: "center",
    width: 360,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 40,
    marginTop: 50,
    marginBottom: 5,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formContainer: {
    backgroundColor: "white",
    height: 750,
    width: 470,
    borderTopLeftRadius: 150,
    paddingTop: 40,
    alignItems: "center",
    marginTop: 20,
  },
  fieldContainer: {
    // Add your Field component styles here
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    width: '78%',
    paddingRight: 35,
    marginBottom: (width >= 320 && width <= 480) ? 200 : 181,
  },
  buttonContainer: {
    // Add your Button component styles here
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 15,
  },
  loginLink: {
    color: darkBlue,
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  formContainer: {
    width: "80%",
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  fieldContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginVertical: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    color: darkBlue,
    fontWeight: "bold",
    fontSize: 14,
  },
};


