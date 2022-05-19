import { createSignal, Suspense, Switch, Match, useTransition } from "solid-js";
import Content from "./elements/Content";

const App = () => {
  const [tab, setTab] = createSignal(0);
  const [pending, start] = useTransition();
  const updateTab = (index) => () => start(() => setTab(index));

  return (
    <>
      <ul class="inline">
        <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
          One
        </li>
        <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
          Two
        </li>
        <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
          Three
        </li>
      </ul>
      <div class="tab" classList={{ pending: pending() }}>
        <Suspense fallback={<div class="loader">Loading...</div>}>
          <Switch>
            <Match when={tab() === 0}>
              <Content page="One" />
            </Match>
            <Match when={tab() === 1}>
              <Content page="Two" />
            </Match>
            <Match when={tab() === 2}>
              <Content page="Three" />
            </Match>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
