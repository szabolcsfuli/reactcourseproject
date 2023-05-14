import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCwTPPOKMGei2baW6Pm8L1YhAGIGemKSp0',
  authDomain: 'reactcourse-b4f01.firebaseapp.com',
  projectId: 'reactcourse-b4f01',
  storageBucket: 'reactcourse-b4f01.appspot.com',
  messagingSenderId: '740594062183',
  appId: '1:740594062183:web:0dcd40014d32139d2715c2'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export async function loginFB (email, password) {
  const auth = getAuth()
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    throw console.log(e)
  }
}

export async function logOutFB () {
  try {
    await signOut(auth)
  } catch (e) {
    throw console.log(e)
  }
}
