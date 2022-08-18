import useIsMobile from '@/hooks/useIsMobile';
import useIsMobile2 from '@/hooks/useIsMobile2';

export default function UseIsMobileTest() {
  const isMobile = useIsMobile();
  const isMobile2 = useIsMobile2();

  return (
    <div>
      <div>isMobile</div>
      <div>
        {isMobile ? <span className="text-green-500">Mobile</span> : <span className="text-blue-500">Tablet</span>}
      </div>
      <div>isMobile2</div>
      <div>
        {isMobile2 ? <span className="text-green-500">Mobile</span> : <span className="text-blue-500">Tablet</span>}
      </div>
      <div>window.innerWidth</div>
      <div>{window.innerWidth}</div>
    </div>
  );
}
