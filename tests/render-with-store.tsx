import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { render } from '@testing-library/react'

import { reducer, RootState } from '../app/store'

const testStore = (state: Partial<RootState>) => {
  return configureStore({
    reducer: reducer,
    preloadedState: state
  })
}

export const renderWithStore = (component: any, initialState: any) => {
  const Wrapper = ({children}) => (
    <Provider store={testStore(initialState)}>{children}</Provider>
  )
  return render(component, { wrapper: Wrapper })
}
