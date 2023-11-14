import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        food_provider:[],  // переменные , данные , состояние 
        teachers:[]
    },
    mutations: {
        ...vuexfireMutations,  // мутации изменяют state если происходят action
    },
    actions: {
        bindFP: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('food_provider', db.collection('foodprovider'))
        }), // 
        bindTeachers: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('teachers', db.collection('teachers'))
        }), // 

        addUser: firestoreAction((context, payload) => {
            return db.collection('users').add(payload)
        }),
        saveR: firestoreAction((context, payload) => {
            return db.collection('rezult_zagadki').add(payload)
        }),
        delUser: firestoreAction((context, payload) => {
            return db.collection('users').doc(payload).delete()
        }),
        updateZag: firestoreAction((context, {id, doc}) => {
            db.collection('zagadki')
                .doc(id)
                .update(doc)
        }),

       
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyCIEFmPlF4vIrtJ901tA0SxfWVzkiyQDxI",
  authDomain: "hackaton-4f772.firebaseapp.com",
  projectId: "hackaton-4f772",
  storageBucket: "hackaton-4f772.appspot.com",
  messagingSenderId: "12414139549",
  appId: "1:12414139549:web:255d0a1e8e4063c9fda874",
  measurementId: "G-TCZZQXYEB8"
          });
        },
    }
})


store.dispatch('bindFP')
store.dispatch('bindTeachers')