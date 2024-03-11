import Input from './components/Input.tsx';
import Form from './components/Form.tsx';
import Button from './components/Button.tsx';

function App() {
  const handleSubmit = (data: unknown) => {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
  };
  return (
    <main>
      <Form onSubmit={handleSubmit}>
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
