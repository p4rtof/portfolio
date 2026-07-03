'use client';

import { motion } from 'framer-motion';
import { Home, User, FolderKanban, Mail } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, href: '#home' },
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Container dengan efek Glassmorphism */}
      <div className="flex items-end gap-2 rounded-full border border-white/20 bg-white/60 backdrop-blur-lg px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        
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
                className="absolute -top-8 text-xs font-bold text-neutral-700 bg-white px-3 py-1.5 rounded-lg shadow-md pointer-events-none whitespace-nowrap"
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
                className="flex h-12 w-12 items-center justify-center rounded-full text-neutral-500 hover:text-neutral-900 bg-transparent hover:bg-white/80 hover:shadow-sm cursor-pointer transition-colors"
              >
                <Icon size={22} strokeWidth={2} />
              </motion.a>
              
            </div>
          );
        })}
      </div>
    </nav>
  );
}