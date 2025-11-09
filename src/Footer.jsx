import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 bg-white/5 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 text-center text-sm text-slate-400">
        <div>
          © {new Date().getFullYear()} <span className="text-slate-200 font-medium">
            Blue Orchid Entertainment Private Limited
          </span> — All rights reserved.
        </div>
        <div className="mt-2">
          <span className="font-semibold text-white">GST:</span> 27AAFCB4092B2ZX &nbsp;•&nbsp; 
        
        </div>
      </div>
    </footer>
  );
}