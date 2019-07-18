import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import '../src/index.css'

const req = require.context('../src', true, /\.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const globalStoryStyles = {
  backgroundColor: '#00ffff40',
  height: '100vh'
};
const Decorator = story => <div style={globalStoryStyles}>{story()}</div>
addDecorator(Decorator)

configure(loadStories, module)
