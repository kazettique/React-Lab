import { useRef, MouseEvent, useState, useEffect } from 'react';

type Position = {
  pos1: number;
  pos2: number;
  pos3: number;
  pos4: number;
};

const INITIAL_POSITION: Position = {
  pos1: 0,
  pos2: 0,
  pos3: 0,
  pos4: 0,
};

export default function DraggableTest() {
  const [position, setPosition] = useState<Position>(INITIAL_POSITION);
  const [boxPos, setBoxPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    console.log('mouse down');

    // setPosition((prev) => ({ ...prev, pos3: event.clientX, pos4: event.clientY }));
  };

  const handleMouseMove = (event: MouseEvent) => {
    event.preventDefault();
    console.log('mouse move');

    // setPosition((prev) => ({
    //   ...prev,
    //   pos1: prev.pos3 - event.clientX,
    //   pos2: prev.pos4 - event.clientY,
    //   pos3: event.clientX,
    //   pox4: event.clientY,
    // }));
  };

  useEffect(() => {
    if (boxRef.current) {
      setBoxPos({ x: boxRef.current.offsetTop - position.pos2, y: boxRef.current.offsetLeft - position.pos1 });
    }
  }, [position.pos1, position.pos2]);

  return (
    <div className="w-full h-full relative">
      <div
        ref={boxRef}
        className="w-28 h-28 bg-blue-200 absolute"
        style={{ left: boxPos.x, top: boxPos.y }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}
