import { useMobileViewPortHeight } from './hooks';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();

  return (
    <div className="h-screen w-screen" style={mobileViewPortHeight.style}>
      hello react lab
    </div>
  );
}

export default App;
