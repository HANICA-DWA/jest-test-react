import React from 'react'
import { Provider } from 'react-redux'
import App, {App as Unconnected} from '../App'
import { renderer, mockStore } from './testhelpers'

test('Unconnected App is rendered', () => {
  const comp = renderer.create(<Unconnected todos={[]}/>)
  expect(comp.toJSON()).toMatchSnapshot();
})

describe('Connected App', () => {
  let store
  let component

  // set up mock store
  beforeEach(() => {
    store = mockStore({ todos: [], todoCount: 0})
    store.dispatch = jest.fn()

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>)
  })

  it('should create a connected app', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should call dispatch after a Submit event', () => {
    renderer.act(() =>{
      const e = {preventDefault: jest.fn}
      component.root.findByType('form').props.onSubmit(e)
      expect(store.dispatch).toHaveBeenCalledTimes(1)
    })
  })
})

