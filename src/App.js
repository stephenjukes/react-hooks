import Hook from './HelperComponents/Hook';
import State from './exercises/state/State';
import Effect from './exercises/effect/Effect';
import Memo from './exercises/memo/Memo';
import Ref from './exercises/ref/Ref';
import Context from './exercises/context/Context';
import Reducer from './exercises/reducer/Reducer';
import './App.css';
import Callback from './exercises/callBack/Callback';
import CustomHooks from './exercises/customHooks/CustomHooks';

const hooks = [
  newHook(<State />, 'useState'),
  newHook(<Effect />, 'useEffect'),
  newHook(<Memo />, 'useMemo'),
  newHook(<Callback />, 'useCallback'),
  newHook(<Ref />, 'useRef'),
  newHook(<Context />, 'useContext'),
  newHook(<Reducer />, 'useReducer'),
  // newHook(<CustomHooks />, 'customHooks')
];

function App() {
  return (
    <div id="app">
      <h1>Hooks</h1>

      {/* Contents */}
      <ul>
        { hooks.map(contentsItems) }
      </ul>

      {/* Demos */}
      { hooks.map(hook => <Hook key={hook.id} hook={hook} />) }
    </div> 
  )
}

function newHook(component, heading) {
  return {
    id: heading.replace(' ', '-'),
    component: component, 
    heading: heading
  };
}

function contentsItems(hook) {
  const hookId = '#' + hook.id;

  return (
    <li key={hook.id}>
      <a href={hookId}>
        {hook.heading}
      </a>
    </li>
  )
}

export default App;
