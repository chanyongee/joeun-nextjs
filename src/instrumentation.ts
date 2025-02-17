// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

export function register() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDw9-2QvRUrjZZR0VYP-mxXMghJQBUpZGE',
    authDomain: 'joeun-nextjs.firebaseapp.com',
    projectId: 'joeun-nextjs',
    storageBucket: 'joeun-nextjs.firebasestorage.app',
    messagingSenderId: '826497380',
    appId: '1:826497380:web:190cbace32d5d51cfe0271',
    measurementId: 'G-1KQHLHGNXS',
  }

  // Initialize Firebase
  initializeApp(firebaseConfig)
}
