import IndependentCollapse from './components/IndependentCollapse';
import { useMobileViewPortHeight } from './hooks';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();

  return (
    <div className="h-screen w-screen" style={mobileViewPortHeight.style}>
      {/* <SafariAbsoluteTest /> */}
      <IndependentCollapse />
    </div>
  );
}

export default App;
