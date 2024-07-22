import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

// author: {avatar_url:"", name:"", role:"" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielnalmeida.png',
      name: 'Gabriel Nunes',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-21 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Lorem, ipsum.' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt consequatur quas cumque dolorem rerum ullam qui sequi nam repellendus. 🚀' },
      { type: 'link', content: 'Lorem.ipsum/dolor' },
    ],
    publishedAt: new Date('2024-07-22 10:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )   
}

