import SafariAbsoluteTest from './components/SafariAbsoluteTest';
import { useMobileViewPortHeight } from './hooks';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();
  const isMobile = useIsMobile();

  return (
    <div className="h-screen w-screen" style={mobileViewPortHeight.style}>
      {/* <SafariAbsoluteTest /> */}
      isMobile: {String(isMobile)}
      <div className="bg-red-300 lg:bg-blue-300 w-20 h-20" />
    </div>
  );
}

export default App;
