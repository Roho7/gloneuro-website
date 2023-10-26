import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp } from "react-feather";

function PreLoader() {
  const { scrollYProgress } = useScroll();
  const opacityValue = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const yValue = useTransform(scrollYProgress, [0, 0.2], [0, -300]);
  const yValue2 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.div
      className="relative h-full max-md:h-[95vh] flex flex-col items-center glass bg-base-500 text-base-50  rounded-3xl p-2"
      style={{ opacity: opacityValue, y: yValue }}
    >
      <motion.div
        className="flex flex-col h-[80vh] w-[80vw] items-center justify-center rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ y: yValue2, scale: scaleValue, opacity: opacityValue }}
      >
        <div className="flex max-md:flex-col gap-2 items-center">
          <motion.img
            src="src/assets/logo-3.png"
            className="object-contain lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          />

          <motion.h1
            className="text-center text-4xl lg:text-8xl drop-shadow-glow"
            initial={{ opacity: 0, x: -200 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            GloNeuro
          </motion.h1>
        </div>
        <motion.h1
          className="text-center text-xl lg:text-3xl"
          transition={{ delay: 3 }}
        >
          Inspiring Brains to study the Brain
        </motion.h1>
        <motion.div className="fixed bottom-2 flex flex-col items-center opacity-30">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              repeatType: "reverse",
            }}
          >
            <ChevronUp />
          </motion.div>
          <h3>Scroll up</h3>
        </motion.div>
      </motion.div>
      {/* <motion.svg
        width="400"
        height="368"
        viewBox="0 0 500 368"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pre-loader max-md:h-1/2 max-md:w-1/2"
      >
        <motion.path
          d="M388.29 81.6964C292.81 16.0548 129.609 27.8058 40.2336 73.8638C6.36219 91.3183 -18.6337 153.175 71.98 186.324C121.818 204.556 267.205 245.435 376.31 259.073C485.416 272.712 459.901 130.928 388.29 81.6964Z"
          fill="#F8DADA"
          stroke="#2A3B41"
          initial={{ y: -30, x: 70, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 0.9 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M390.014 208.627C334.308 208.404 258.489 245.453 290.095 313.523C337.828 374.894 410.289 372.608 445.072 290.314C468.157 235.698 429.969 208.786 390.014 208.627Z"
          fill="#689AD5"
          fill-opacity="0.6"
          stroke="#2A3B41"
          initial={{ y: 50, x: 50, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M225.97 284.952C181.576 274.47 110.167 255.186 94.8905 210.366C76.6799 174.55 114.802 143.146 244.223 149.46C373.644 155.774 358.67 258.162 353.51 278.7C340.094 332.099 280.964 297.936 225.97 284.952Z"
          fill="#FFFDD5"
          fill-opacity="0.3"
          stroke="#2A3B41"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 0.6 }}
          transition={{ duration: 1 }}
        />
      </motion.svg> */}
      {/* <motion.h1
        className="text-8xl text-base-50 max-md:text-4xl"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Gloneuro
      </motion.h1> */}
      {/* <motion.svg
        style={{ width: "90%", height: "90%" }}
        viewBox="0 0 636 544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[-20] -right-1/2 opacity-30"
      >
        <motion.path
          d="M157.5 269L305.5 350.915M157.5 269H87.5M157.5 269L87.5 334.5M157.5 269L218.16 375.644M157.5 269L230.16 159.5M157.5 269V428.5M157.5 269L41 326.771M157.5 269L114.159 165.5M407 365.5L514 321M407 365.5L305.5 350.915M407 365.5L252.5 486M407 365.5L514 447M407 365.5H634.5M407 365.5L451.5 277L490 213M407 365.5L363.5 447M407 365.5L502.5 398.5M514 321L390 286.5M514 321L611.5 409M514 321L502.5 398.5M514 321L490 213M514 321L569.5 301.5M514 321L569.5 189.5M390 286.5L305.5 350.915M390 286.5L490 213M390 286.5L277.5 542L252.5 486M390 286.5L413 219.5M390 286.5L356 213M390 286.5L310.5 237.5M252.5 486L351 514.5M252.5 486L218.16 375.644M252.5 486L305.5 350.915M252.5 486L157.5 428.5M252.5 486L363.5 447M351 514.5L514 447M351 514.5L502.5 398.5M351 514.5L363.5 447M218.16 375.644L305.5 350.915M218.16 375.644L212 542M218.16 375.644L230.16 277M218.16 375.644L122.5 339M305.5 350.915L230.16 159.5M305.5 350.915L310.5 237.5M305.5 350.915L363.5 447M305.5 350.915L230.16 277M310.5 142.5L230.16 159.5M310.5 142.5L356 213M310.5 142.5V52M310.5 142.5L451.5 52M310.5 142.5L277.5 107M310.5 142.5L413 219.5M310.5 142.5L230.16 277M310.5 142.5V237.5M490 213L406 114M490 213L569.5 189.5M490 213L514 131M490 213L413 219.5M490 213L569.5 301.5M490 213L483 150M514 447L611.5 409M514 447L502.5 398.5M514 447H363.5M514 447L569.5 301.5M611.5 409L502.5 398.5M611.5 409L569.5 301.5M502.5 398.5L363.5 447M87.5 334.5V269M87.5 334.5L80.5 365.5M87.5 334.5L41 326.771M87.5 334.5L122.5 339M87.5 269L1 321M87.5 269L41 326.771M87.5 269L127.16 114M87.5 269L114.159 165.5M87.5 269L170 184.5M142 542H212M142 542L74.5 507L80.5 438.5M142 542L127.16 486M1 321L41 423.5M1 321L41 326.771M569.5 301.5L611.5 269M569.5 301.5V189.5M569.5 301.5L634.5 365.5M611.5 269L569.5 189.5M611.5 269L634.5 365.5M569.5 189.5L514 131M569.5 189.5L603 76M569.5 189.5L483 150M212 542L157.5 428.5M212 542L127.16 486M157.5 428.5L80.5 365.5M157.5 428.5L80.5 438.5M157.5 428.5L127.16 486M157.5 428.5L122.5 339M230.16 159.5L127.16 114M230.16 159.5L178.16 84.5M230.16 159.5L114.159 165.5M230.16 159.5L310.5 237.5M230.16 159.5L208.16 26M230.16 159.5L252.5 114L248.66 78.5M230.16 159.5L170 184.5M41 423.5V326.771M41 423.5L80.5 438.5M41 423.5L80.5 365.5M41 326.771L80.5 365.5M406 114L381.5 150M406 114L514 131M406 114L483 150M406 114L549 42M356 213L413 219.5M356 213L310.5 237.5M356 213L483 150M80.5 438.5L127.16 486M127.16 114L178.16 84.5M127.16 114L114.159 165.5M127.16 114L170 184.5M248.66 78.5L277.5 107M248.66 78.5L178.16 84.5M248.66 78.5L230.16 32.5M248.66 78.5L310.5 52M248.66 78.5L258.66 52M277.5 107L310.5 52M277.5 107L381.5 150M277.5 107L280.66 18M310.5 52H258.66M310.5 52L280.66 18M310.5 52L381.5 150M230.16 32.5L258.66 52M230.16 32.5L208.16 26M230.16 32.5L248.66 1.5M280.66 18L258.66 52M280.66 18L248.66 1.5M381.5 150L413 219.5M514 131L603 76M514 131L549 42M603 76L549 42M603 76L451.5 52M549 42L451.5 52M549 42L483 150M451.5 52L483 150M178.16 84.5L258.66 52M178.16 84.5L114.159 165.5M178.16 84.5V36L208.16 26M178.16 84.5L208.16 26M178.16 84.5L170 184.5M258.66 52L248.66 1.5M310.5 237.5L170 184.5M310.5 237.5L230.16 277M230.16 277L114.159 165.5M230.16 277L170 184.5"
          stroke="#D0B0C4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
          }}
          strokeWidth={2}
          strokeDasharray="0 1"
        />
      </motion.svg> */}
    </motion.div>
  );
}

export default PreLoader;
