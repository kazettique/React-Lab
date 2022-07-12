import SafariAbsoluteTest from './components/SafariAbsoluteTest';
import { useMobileViewPortHeight } from './hooks';
import useIsMobile from './hooks/useIsMobile';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();
  const isMobile = useIsMobile();

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  return (
    <div className="h-screen w-screen p-5" style={mobileViewPortHeight.style}>
      {/* <SafariAbsoluteTest /> */}
      isMobile: {String(isMobile)}
      <div className="bg-red-300 lg:bg-blue-300 w-20 h-20" />
      <div>
        <div>window height: {windowHeight}</div>
        <div>window width: {windowWidth}</div>
      </div>
    </div>
  );
}

export default App;
