import {createUserWithEmailAndPassword , getAuth , Auth} from 'firebase/auth'
import {app} from '../lib/firebase'

const auth : Auth = getAuth(app)
export { auth , createUserWithEmailAndPassword}