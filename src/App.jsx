

import MainLayout from './MainLayout/MainLayout';
import { motion, useScroll,useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (<>
    <div>
    <motion.div className="progress-bar" style={{ scaleX }} />
      <MainLayout/>
    </div>
    </>
  );
};

export default App;