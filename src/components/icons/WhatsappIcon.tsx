import { cn } from "@/lib/utils";

export const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(className)}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M19.33 4.67A10.88 10.88 0 0 0 12 2C6.48 2 2 6.48 2 12c0 .24.01.47.04.7a1 1 0 0 0 1 .96h.02c.5 0 .9-.4.98-.9A8.99 8.99 0 0 1 12 4c4.97 0 9 4.03 9 9a8.9 8.9 0 0 1-1.67 5.33" />
  </svg>
);
