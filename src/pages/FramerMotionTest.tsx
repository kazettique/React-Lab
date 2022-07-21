import { motion } from 'framer-motion';
import { useRef } from 'react';

function FramerMotionTest() {
  const constraintsRef = useRef(null);

  return (
    <div className="w-full h-full bg-neutral-50">
      <div className="relative">
        <motion.div className="bg-green-200 absolute w-96 h-96 rounded top-0 left-0" ref={constraintsRef} />
        <motion.div
          className="bg-green-700 rounded w-36 h-36 absolute top-0 left-0"
          drag
          dragConstraints={constraintsRef}
        />
      </div>
    </div>
  );
}

export default FramerMotionTest;
