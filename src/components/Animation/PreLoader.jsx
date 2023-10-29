import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ChevronUp } from "react-feather";

function PreLoader() {
  const { scrollYProgress } = useScroll();
  const opacityValue = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, 0.4], [0, -300]);
  const xValue = useTransform(scrollYProgress, [0, 0.4], [0, -2000]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.div
      className="relative h-full max-md:h-[95vh] flex flex-col items-center text-base-50  rounded-3xl p-2"
      style={{ opacity: opacityValue, y: yValue }}
    >
      <div className="flex flex-col h-[80vh] w-[80vw] items-center justify-center rounded-xl">
        <motion.div
          className="flex max-md:flex-col gap-2 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          style={{ x: xValue, scale: scaleValue }}
        >
          <motion.img
            src="/assets/glonuro-og-logo.png"
            className="object-contain lg:w-1/2"
          />

          <motion.h1 className="text-center text-4xl lg:text-8xl drop-shadow-glow">
            GloNeuro
          </motion.h1>
        </motion.div>
        <motion.h1
          className="text-center text-xl lg:text-3xl"
          transition={{ delay: 3 }}
          style={{ y: yValue }}
        >
          Inspiring Brains to study the Brain
        </motion.h1>
        <motion.div className="fixed bottom-2 flex flex-col items-center">
          <h3>Scroll down</h3>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 5 }}
            transition={{
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: "reverse",
            }}
          >
            <ChevronDown />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PreLoader;
