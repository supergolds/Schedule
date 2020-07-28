import React, { Component } from 'react';
import Halgeo from './components/Halgeo';
import Form from './components/Form';
import ItemList from './components/ItemList';

class App extends Component {

  id = 3;

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false},
      { id: 1, text: '리액트 소개', checked: true},
      { id: 2, text: '리액트 소개', checked: false},
    ]
  }

  render() {
    return (
      <Halgeo form={<Form/>}>
        <ItemList/>
      </Halgeo>
    );
  }
}
export default App;
