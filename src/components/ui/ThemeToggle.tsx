'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hindari hydration mismatch: next-themes cuma tahu theme yang bener
  // setelah mount di client (server nggak tahu localStorage/system preference)
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="fixed top-6 right-6 z-50 w-11 h-11" />;
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle dark mode"
      className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full border-2 border-neutral-800 dark:border-neutral-200 bg-white dark:bg-neutral-900 flex items-center justify-center overflow-hidden shadow-sm"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon size={18} className="text-neutral-100" />
          ) : (
            <Sun size={18} className="text-neutral-800" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}