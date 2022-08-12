import useIsMobile from '@/hooks/useIsMobile';

export default function UseIsMobileTest() {
  const isMobile = useIsMobile();

  return (
    <div>
      <div>isMobile</div>
      <div>
        {isMobile ? <span className="text-green-500">Mobile</span> : <span className="text-blue-500">Tablet</span>}
      </div>
      <div>window.innerWidth</div>
      <div>{window.innerWidth}</div>
    </div>
  );
}
