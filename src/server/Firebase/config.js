const prodConfig = {
  apiKey: "AIzaSyAtV9jzhijXpcVBKxvlEtt_KT9uaIcOlgo",
  authDomain: "senior-project-se-195.firebaseapp.com",
  databaseURL: "https://senior-project-se-195.firebaseio.com",
  projectId: "senior-project-se-195",
  storageBucket: "senior-project-se-195.appspot.com",
  messagingSenderId: "379525132915",
 url: "https://senior-project-se-195.firebaseapp.com",
};

const devConfig = {
 apiKey: "AIzaSyAtV9jzhijXpcVBKxvlEtt_KT9uaIcOlgo",
 authDomain: "senior-project-se-195.firebaseapp.com",
 databaseURL: "https://senior-project-se-195.firebaseio.com",
 projectId: "senior-project-se-195",
 storageBucket: "senior-project-se-195.appspot.com",
 messagingSenderId: "379525132915",
 url: "http://localhost:3000",
};


const config =
process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
