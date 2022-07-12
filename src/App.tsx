import SafariAbsoluteTest from './components/SafariAbsoluteTest';
import { useMobileViewPortHeight } from './hooks';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();

  return (
    <div className="h-screen w-screen" style={mobileViewPortHeight.style}>
      <SafariAbsoluteTest />
    </div>
  );
}

export default App;
