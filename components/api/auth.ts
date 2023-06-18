import { app } from '../firebaseConfig'
import { getAuth, GoogleAuthProvider, EmailAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, User, } from "firebase/auth";
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore'

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const db = getFirestore(app)


// Check if user exists in the app already
function checkUser(userID:string): boolean {
  return true;
}

// stores the User in the sessionStorage for each access to cached information
function storeUser(user: User): void {
  const user_obj = {
    meta: {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    }
  }

  sessionStorage.setItem("user", JSON.stringify(user_obj))
}

// Creates the user profile
async function createUserProfile(user: User) {
  const user_obj = {
    meta: {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      timeCreated: Timestamp.now()
    }
  }
  storeUser(user)
  await setDoc(doc(db, 'users', user.uid), user_obj)
}

/** Signs in the user through the Google Auth and creates a user in the firestore database */
export async function googleSignUp() {
  signInWithPopup(auth, googleProvider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken
      const user = result.user
      /* 
        Check if the user already exists. 
        If yes, notify the user already has an account and should go through the login portal.
        If no, create the user profile.
      */
      await createUserProfile(user)
    })
    .then(() => {
      window.location.assign('/company_dashboard')
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function googleLogin() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken

      const user = result.user
      storeUser(user)
    })
    .then(() => {
      window.location.assign('/dashboard')
    })
    .catch((error) => {
      console.log(error)
    })
}