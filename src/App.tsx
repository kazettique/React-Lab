import { useRoutes } from 'react-router-dom';
import Menu from './components/Menu';
import { useMobileViewPortHeight } from './hooks';
import { routes } from './router';

function App() {
  const mobileViewPortHeight = useMobileViewPortHeight();
  const router = useRoutes(routes);

  return (
    <div className="h-screen w-screen" style={mobileViewPortHeight.style}>
      <div data-router-container className="relative w-full h-full">
        {router}
        <Menu />
      </div>
    </div>
  );
}

export default App;
