import App from './App';
import configureStore from 'store/configureStore';
import * as actions from "store/api"
import { WORKS_ENDPOINT } from 'const/const';

const store = configureStore()

console.log(store)

store.dispatch(actions.apiCallBegan({
        url: WORKS_ENDPOINT,
        onSuccess: 'worksReceived',
    }))

export default App;
