import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage
}

const reducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer
})

export default store