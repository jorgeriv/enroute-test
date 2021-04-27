import styles from './app.module.scss';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as StarWars } from './star_wars.svg';
import { PeopleList } from '@enroute/feature/list';

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <StarWars style={{ stroke: 'yellow' }} />
        <h1>People App</h1>
      </header>
      <main>
        <PeopleList></PeopleList>
      </main>
    </div>
  );
}

export default App;
