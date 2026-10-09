"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import EnquiryForm from "./EnquiryForm";
import Modal from "./ui/Modal";

type Ctx = { openEnquiry: (service?: string) => void };
const EnquiryContext = createContext<Ctx>({ openEnquiry: () => {} });
export const useEnquiry = () => useContext(EnquiryContext);

export default function Providers({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>();
  const [nonce, setNonce] = useState(0);

  const openEnquiry = useCallback((s?: string) => {
    setService(s);
    setNonce((n) => n + 1);
    setOpen(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <EnquiryContext.Provider value={{ openEnquiry }}>
        {children}
        <Modal
          open={open} onClose={() => setOpen(false)} variant="drawer"
          title="Send an enquiry"
          description="Tell me what you need. I will review your request and get back to you."
        >
          <EnquiryForm key={nonce} defaultService={service} onClose={() => setOpen(false)} />
        </Modal>
      </EnquiryContext.Provider>
    </MotionConfig>
  );
}
