import { useRef, useState } from 'react';

export default function MobileTouchAreaTest() {
  const [log, setLog] = useState<string>('');
  const btnRef = useRef(null);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="grow p-8">
        <div>Log:</div>
        <div className="break-words">{log}</div>
      </div>
      <button ref={btnRef} type="button" className="bg-neutral-700 text-white uppercase p-3" onClick={() => setLog('')}>
        Reset
      </button>
      {/* wide gap */}
      <div className="mb-4">
        <div className="shrink-0 flex gap-5 my-5">
          <button className="bg-violet-100 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'E')}>
            E
          </button>
          <button className="bg-violet-100 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'F')}>
            F
          </button>
        </div>
        <div className="shrink-0 flex gap-5">
          <button className="bg-violet-100 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'G')}>
            G
          </button>
          <button className="bg-violet-100 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'H')}>
            H
          </button>
        </div>
      </div>
      {/* narrow gap */}
      <div className="mb-4">
        <div className="shrink-0 flex gap-1 my-1">
          <button className="bg-neutral-300 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'A')}>
            A
          </button>
          <button className="bg-neutral-300 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'B')}>
            B
          </button>
        </div>
        <div className="shrink-0 flex gap-1">
          <button className="bg-neutral-300 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'C')}>
            C
          </button>
          <button className="bg-neutral-300 w-1/2 p-3" type="button" onClick={() => setLog((prev) => prev + 'D')}>
            D
          </button>
        </div>
      </div>
    </div>
  );
}
