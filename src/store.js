import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction, firebaseAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        food_provider:[],  // переменные , данные , состояние 
        teachers:[],
        menu:[],
        user:null
    },
    mutations: {
        ...vuexfireMutations,  // мутации изменяют state если происходят action
        SET_USER(state, user) {
            state.user = user
          }
    },
    actions: {
        bindFP: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('food_provider', db.collection('foodprovider'))
        }), // 
        bindMenu: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('menu', db.collection('menu'))
        }), // 
        bindTeachers: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('teachers', db.collection('teachers'))
        }), // 

        addFP: firestoreAction((context, payload) => {
            return db.collection('foodprovider').add(payload)
        }),
        addMenu: firestoreAction((context, payload) => {
            return db.collection('menu').add(payload)
        }),
        saveR: firestoreAction((context, payload) => {
            return db.collection('rezult_zagadki').add(payload)
        }),
        delMenu: firestoreAction((context, payload) => {
            return db.collection('menu').doc(payload).delete()
        }),
        updateZag: firestoreAction((context, {id, doc}) => {
            db.collection('zagadki')
                .doc(id)
                .update(doc)
        }),
        setUserRef: firebaseAction(({ bindFirebaseRef }, ref) => {
            bindFirebaseRef('user', ref)
          }),
          getLoginStatus({commit}){
            let vm = this
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                vm.user = user
                commit('getUserInfo',user)
                console.log("// User is signed in by Phone Number : ", user.phoneNumber)
              } else {
                vm.user = null
                console.log("// No user is signed in.")
              }
            });
       },
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
store.dispatch('bindMenu')