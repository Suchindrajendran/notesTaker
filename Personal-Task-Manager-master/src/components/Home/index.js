import React from 'react'
import { HomePage, IntroContainer } from './styledComponent';
import NotesView from '../../NotesView';

const Home = () => {
  return (
    <HomePage>
      <IntroContainer>
        <h2>Welcome to Personal Notes Manager</h2>
      </IntroContainer>
      <NotesView />
    </HomePage>
  )
}

export default Home