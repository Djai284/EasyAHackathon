import app from '../firebaseConfig'
import { getAuth, GoogleAuthProvider, EmailAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup,  } from "firebase/auth";
import {} from 'firebase/firestore'

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)

async function createUserProfile() {

}

export async function googleSignUp() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const user = result.user
    })
    .then(() => {
      window.location.assign('/onboarding')
    })
}

export default async function googleLogin() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user
    })
    .then(() => {
      window.location.assign('dashboard')
    })
    .catch((error) => {
      console.log(error)
    })
}