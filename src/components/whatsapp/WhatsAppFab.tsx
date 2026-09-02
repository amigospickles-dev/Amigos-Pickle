"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <motion.a
      href={waUrl(`Hi ${SITE.name}, I would like to place an order.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-40 h-16 w-16"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="wa-pulse absolute inset-0 rounded-full bg-[#25D366]" />
      <span className="wa-pulse-delayed absolute inset-0 rounded-full bg-[#25D366]" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.45)]">
        <WhatsAppIcon variant="mark" className="h-16 w-16" />
      </span>
    </motion.a>
  );
}
