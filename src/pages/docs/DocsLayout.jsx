
import React, { useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, HardDrive, Radio, Settings, HelpCircle, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const DocsLayout = () => {
  const location = useLocation();
  const mainContentRef = useRef(null);

  const sidebarNavItems = [
    { title: "Docs Home", href: "/docs", icon: Home },
    { title: "Getting Started", href: "/docs/getting-started", icon: BookOpen, hash: "#introduction" },
    { title: "Hardware Guides", href: "/docs/hardware-guides", icon: HardDrive, hash: "#overview" },
    { title: "Connection Methods", href: "/docs/connection-methods", icon: Radio, hash: "#web-ide" },
    { title: "Account & Billing", href: "/docs/account-billing", icon: Settings, hash: "#manage-subscription" },
    { title: "Troubleshooting & FAQs", href: "/docs/faq", icon: HelpCircle, hash: "#common-issues" },
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          element.classList.add('highlight-section');
          setTimeout(() => element.classList.remove('highlight-section'), 2000);
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800/50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          <aside className="hidden lg:block w-[280px] py-6 lg:py-8">
            <motion.div 
              className="sticky top-24 space-y-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sidebarNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={`${item.href}${item.hash || ''}`}
                  className={cn(
                    "group flex w-full items-center rounded-md border border-transparent px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </motion.div>
          </aside>
          <main ref={mainContentRef} className="py-6 lg:py-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
