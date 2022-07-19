import CustomCheckbox from './components/CustomCheckbox';
import IndependentCollapse from './components/IndependentCollapse';
import SafariAbsoluteTest from './components/SafariAbsoluteTest';
import { useMobileViewPortHeight } from './hooks';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();

  return (
    <div className="h-screen w-screen bg-neutral-400" style={mobileViewPortHeight.style}>
      {/* <SafariAbsoluteTest /> */}
      {/* <IndependentCollapse /> */}
      <CustomCheckbox />
    </div>
  );
}

export default App;
