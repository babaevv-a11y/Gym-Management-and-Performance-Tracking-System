import PbiC from './features/pbiC/PbiC';
import PbiD from './features/pbiD/pbiD';

function App() { // If I want to show pbiC instead of pbiD then I can simply replace <pbiD /> with the <pbiC />
  return (
    <div>
      <PbiD />

    </div>
  );
}

export default App;