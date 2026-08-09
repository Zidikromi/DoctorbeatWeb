import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

interface SplashScreenProps {
  onFinish?: () => void;
  duration?: number; // Durasi splash screen tampil sebelum fade out (ms)
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  duration = 1500,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onFinish) onFinish();
      }}
    >
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950 select-none overflow-hidden"
        >
          <img
            src={logo}
            alt="Doctor Beat Logo"
            className="h-20 sm:h-28 w-auto object-contain pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;