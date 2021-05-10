import { configureStore } from '@reduxjs/toolkit'
import reducer from 'store/works'


export default function () {
    return configureStore({
        reducer,
    }) 
}