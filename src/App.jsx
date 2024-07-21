import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Gabriel Nunes" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempore sunt maiores ducimus praesentium obcaecati quaerat quis eligendi eos officiis accusantium voluptatum eum, nulla minus commodi laborum reiciendis illo ipsa." 
          />
          <Post 
            author="Diego Fernandes" 
            content="Novo Post" 
          />
        </main>
      </div>
    </div>
  )   
}

