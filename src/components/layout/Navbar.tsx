'use client';

import { motion } from 'framer-motion';
import { Home, User, FolderKanban, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, href: '/' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah error hydration dari Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Container dengan efek Glassmorphism & Support Dark Mode */}
      <div className="flex items-end gap-2 rounded-full border border-white/20 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              
              {/* --- Tooltip Label --- */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? -12 : 10,
                  scale: isHovered ? 1 : 0.95,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="absolute -top-8 text-xs font-bold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-lg shadow-md pointer-events-none whitespace-nowrap"
              >
                {item.label}
              </motion.span>

              {/* --- Icon Button --- */}
              <motion.a
                href={item.href}
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  y: isHovered ? -8 : 0,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex h-10 w-12 items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-transparent hover:bg-white/80 dark:hover:bg-neutral-800/80 hover:shadow-sm cursor-pointer transition-colors"
              >
                <Icon size={22} strokeWidth={2} />
              </motion.a>
              
            </div>
          );
        })}

        {/* --- Garis Pemisah --- */}
        <div className="w-[1px] h-8 bg-neutral-300 dark:bg-neutral-700 mx-1 self-center rounded-full" />

        {/* --- Dark Mode Toggle Button --- */}
        {mounted ? (
          <div className="relative flex flex-col items-center">
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hovered === 'theme' ? 1 : 0,
                y: hovered === 'theme' ? -12 : 10,
                scale: hovered === 'theme' ? 1 : 0.95,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="absolute -top-8 text-xs font-bold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-lg shadow-md pointer-events-none whitespace-nowrap"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </motion.span>

            <motion.button
              type="button"
              onHoverStart={() => setHovered('theme')}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              animate={{
                y: hovered === 'theme' ? -8 : 0,
                scale: hovered === 'theme' ? 1.2 : 1,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex h-10 w-12 items-center justify-center rounded-full text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-transparent hover:bg-white/80 dark:hover:bg-neutral-800/80 hover:shadow-sm cursor-pointer transition-colors"
            >
              {isDark ? <Sun size={22} strokeWidth={2} /> : <Moon size={22} strokeWidth={2} />}
            </motion.button>
          </div>
        ) : (
          // placeholder biar lebar navbar nggak "loncat" pas belum mounted
          <div className="h-10 w-12" />
        )}

      </div>
    </nav>
  );
}