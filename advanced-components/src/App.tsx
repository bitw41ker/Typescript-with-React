import Button from './components/Button.tsx';

function App() {
  return (
    <main>
      <p>
        <Button el="button">Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          Link
        </Button>
      </p>
    </main>
  );
}

export default App;
