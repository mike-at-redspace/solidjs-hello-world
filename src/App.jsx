import { createSignal, Suspense, Switch, Match, useTransition } from "solid-js";
import Content from "./elements/Content";

const App = () => {
  const [tab, setTab] = createSignal('one');
  const [pending, start] = useTransition();
  const updateTab = (index) => () => start(() => setTab(index));

  const tabs = [
    { name: 'one', label: 'Tab One' },
    { name: 'two', label: 'Tab Two' },
    { name: 'three', label: 'Tab Three' }
  ];

  return (
    <>
      <ul class="inline">
        {tabs.map(({ name, label }) => (
          <li classList={{ selected: tab() === name }} onClick={updateTab(name)}>
            {label}
          </li>
        ))}
      </ul>
      <div class="tab" classList={{ pending: pending() }}>
        <Suspense fallback={<div class="loader">Loading...</div>}>
          <Switch>
            {tabs.map(({ name }) => (
              <Match when={tab() === name}>
                <Content page={name} />
              </Match>
            ))}
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
