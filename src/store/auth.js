// import Vue from 'vue'
import firebase from 'firebase'
// import 'firebase/auth'

export default {
    actions:{
        async logout({commit}){
            
                firebase.auth().signOut();

                commit('SET_USER', { user:null, token:null})
            
        },
        async login({ commit }, { email, password }) {
            try {
              // Вход пользователя с помощью Firebase
              const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
              
              // Получение токена доступа для пользователя
              const { user } = userCredential
              const token = await user.getIdToken()
              console.log(token)
              // Сохранение пользователя и его токена в хранилище
              commit('SET_USER', { user, token })
            //   commit('SET_USER', { user, token })
            } catch (error) {
              // Обработка ошибки входа
            //   console.log(error.code)
            //   console.log(error)
              
              commit('set_error', error.code)
            //   Vue.$toast.error("Неправильный пароль")
            //   throw error
            }
          },
          async register({ commit }, { email, password }) {
            try {
              // Регистрация пользователя с помощью Firebase
              const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
              
              // Получение токена доступа для пользователя
              const { user } = userCredential
              const token = await user.getIdToken()
              
              // Сохранение пользователя и его токена в хранилище
              commit('SET_USER', { user, token })
            } catch (error) {
              // Обработка ошибки регистрации
              console.error(error)
              throw error
            }
          }
    }
  
}