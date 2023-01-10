
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

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
              author="Bruno Gomes"
              content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ullam molestiae similique sed eos reiciendis laboriosam repellat accusantium harum veniam in consequatur doloribus, commodi qui, quis voluptatum, nemo fugit inventore."
            />

            <Post
              author="Will"
              content="Outro post muito legal !!!"
            />
          </main>
        </div>

      </div>
  );
}

