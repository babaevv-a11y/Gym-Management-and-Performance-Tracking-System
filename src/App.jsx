import PbiA from './features/pbiA/pbiA';
import PbiC from './features/pbiC/PbiC';
import PbiD from './features/pbiD/pbiD';

// All PBIs are imported here,
// but we only render PbiA for now.

function App() {
  return (
    <div>
      <PbiA />
    </div>
  );
}

export default App;