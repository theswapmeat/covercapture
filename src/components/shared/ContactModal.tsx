"use client";

import { useEffect } from "react";
import { X } from "lucide-react"; 

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-background shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
          <button 
            onClick={onClose}
            className="rounded-lg p-1 text-muted-foreground hover:bg-surface-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-foreground">First Name *</label>
              <input 
                required
                type="text" 
                placeholder="Jane"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-foreground">Last Name *</label>
              <input 
                required
                type="text" 
                placeholder="Doe"
                className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground">Email Address *</label>
            <input 
              required
              type="email" 
              placeholder="jane@company.com"
              className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground">Company Name</label>
            <input 
              type="text" 
              placeholder="Acme Inc."
              className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-foreground">Description</label>
            <textarea 
              rows={4}
              defaultValue="I want to know more about CoverCapture, its features, security..."
              className="w-full rounded-xl border border-border bg-transparent px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="h-12 rounded-xl px-6 text-sm font-bold text-foreground hover:bg-surface-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-12 rounded-xl bg-primary px-8 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}