import { useRef } from 'react';
import Input from './components/Input.tsx';

function App() {
  const ref = useRef(null);
  return (
    <main>
      <Input label="Test" id="test" ref={ref} />
    </main>
  );
}

export default App;
