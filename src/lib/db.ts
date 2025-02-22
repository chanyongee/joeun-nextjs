import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'joeun-nextjs.firebaseapp.com',
  projectId: 'joeun-nextjs',
  storageBucket: 'joeun-nextjs.firebasestorage.app',
  messagingSenderId: '826497380',
  appId: '1:826497380:web:190cbace32d5d51cfe0271',
  measurementId: 'G-1KQHLHGNXS',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const readData = async () => {
  console.log('Reading data...')
  const docRef = doc(db, 'story', 'OsUi59uVtc0z7I5BIV54')
  console.log('docRef:', docRef)
  try {
    const docSnap = await getDoc(docRef)
    console.log('settled')
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
      return docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!')
    }
  } catch (e) {
    console.error('Error getting document:', e)
  }
}
