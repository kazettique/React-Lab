import useIsMobile from '@/hooks/useIsMobile';

export default function UseIsMobileTest() {
  const isMobile = useIsMobile();

  return (
    <div>
      <div>isMobile</div>
      <div>{String(isMobile)}</div>
    </div>
  );
}
