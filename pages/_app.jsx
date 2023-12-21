import { Provider } from 'react-redux'
import '../styles/global.css'
import store, {persistor} from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'



export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}