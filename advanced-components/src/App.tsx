import { useRef } from 'react';
import Input from './components/Input.tsx';
import Form, { type FormHandle } from './components/Form.tsx';
import Button from './components/Button.tsx';

function App() {
  const formRef = useRef<FormHandle>(null);

  const handleSubmit = (data: unknown) => {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
    formRef.current?.clear();
  };
  return (
    <main>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input type="text" id="name" label="Name" />
        <Input type="number" id="age" label="Age" />
        <p>
          <Button el="button">Submit</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
