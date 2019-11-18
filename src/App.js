import React from 'react'
import Base from './core/Base'
import { Provider } from 'react-redux'
import store from './utils/store'


function App() {
  return (
    <Provider store={store}>
      <Base></Base>
    </Provider>
  )
}

export default App;
