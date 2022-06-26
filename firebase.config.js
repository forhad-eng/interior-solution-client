import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCVFDDTjLU7cKxs5PQVJs-fx3ZNwF3Ydn8',
    authDomain: 'interior-solution1.firebaseapp.com',
    projectId: 'interior-solution1',
    storageBucket: 'interior-solution1.appspot.com',
    messagingSenderId: '736260868149',
    appId: '1:736260868149:web:e5806ad7397d797b9c897c'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
