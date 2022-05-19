import { createSignal, onCleanup } from "solid-js";
import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	onCleanup(() => clearInterval(interval));

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Count value is: {count()}
        </p>
      </header>
    </div>
  );
}

export default App;
