import { Habit } from "./components/Habit";

import './styles/global.css';

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={31} />
      <Habit completed={32} />
    </>
  )
}

export default App
