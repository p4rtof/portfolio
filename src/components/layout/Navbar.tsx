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
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-2 rounded-2xl border border-black/5 bg-white/80 backdrop-blur-md px-3 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              {/* --- Label yang muncul pas hover --- */}
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? -8 : 5,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute -top-8 text-xs font-medium text-neutral-600 bg-white px-2 py-1 rounded-md shadow-sm pointer-events-none whitespace-nowrap"
              >
                {item.label}
              </motion.span>

              {/* --- Icon Button --- */}
              <motion.a
                href={item.href}
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  y: isHovered ? -10 : 0,
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 cursor-pointer"
              >
                <Icon size={20} strokeWidth={1.8} />
              </motion.a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}