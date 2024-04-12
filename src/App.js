import parser from "html-react-parser";
import { useState } from 'react';
import './App.css';
import Tiptap from './components/TipTap';

const App = () => {
 const  [desc, setDesc] = useState('')
  return (
    <div className="App">
      <Tiptap setDesc={setDesc} />
      <div className='ProseMirror'>
          {parser(desc)}
      </div>
    </div>
  );

  }


export default App;
