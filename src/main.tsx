import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './router/Router'
import IsLoading from './pages/isLoading/IsLoading'
import { Provider } from 'react-redux'
import { Store } from './global/Sttore'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from "react-toastify";

const myclient = new QueryClient();
const persiststore = persistStore(Store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
      <Suspense fallback={<IsLoading />}>
        <Provider store={Store}>
          <PersistGate persistor={persiststore}>
            <QueryClientProvider client={myclient}>
                <RouterProvider router={element} />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
        <ToastContainer />
      </Suspense>
  </React.StrictMode>,
)
