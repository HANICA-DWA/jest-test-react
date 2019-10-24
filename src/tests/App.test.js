import React from 'react'
import { Provider } from 'react-redux'
import App, {App as Unconnected} from '../App'
import { renderer } from './testhelpers'


test('Unconnected App is rendered', () => {
  const comp = renderer.create(<Unconnected todos={[]}/>)
  expect(comp.toJSON()).toMatchSnapshot();
})

test('Connected App is rendered', () => {
  const comp = renderer.create(<App />)
  expect(comp.toJSON()).toMatchSnapshot();
})

