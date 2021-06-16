import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApQ7V4ySpAx8SPcilRf76s8fIlpDeJCOo',
  authDomain: 'awesomeproject-6ef69.firebaseapp.com',
  databaseURL: 'https://awesomeproject-6ef69-default-rtdb.firebaseio.com',
  projectId: 'awesomeproject-6ef69',
  storageBucket: 'awesomeproject-6ef69.appspot.com',
  messagingSenderId: '885601945726',
  appId: '1:885601945726:web:002e3e609fd23f6c6c302f',
  measurementId: 'G-P379FEY21K',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth();
