import CustomCheckbox, { IProps } from './components/CustomCheckbox';
import IndependentCollapse from './components/IndependentCollapse';
import SafariAbsoluteTest from './components/SafariAbsoluteTest';
import { useMobileViewPortHeight } from './hooks';
import CustomCheckboxPage from './pages/CustomCheckboxPage';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();

  return (
    <div className="h-screen w-screen bg-neutral-400" style={mobileViewPortHeight.style}>
      <CustomCheckboxPage />
    </div>
  );
}

export default App;
