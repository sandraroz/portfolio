import { initializeApp } from 'firebase/app';
import { getFirestore, collection, enableIndexedDbPersistence } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

// enable offline persistance
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.error('Cannot support persistance');
  } else if (err.code === 'unimplemented') {
    console.error('browser not supported');
  }
});

const programmingSkills = collection(db, 'programming');
const techSkill = collection(db, 'tech');
const miscSkill = collection(db, 'misc');

export { programmingSkills, techSkill, miscSkill };
