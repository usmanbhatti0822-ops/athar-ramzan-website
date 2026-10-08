"use client";

import type { ReactNode } from "react";
import { useEnquiry } from "../EnquiryProvider";
import Button, { type ButtonProps } from "./Button";

/** Button that opens the enquiry drawer. Safe to use inside server pages. */
export default function EnquiryButton({ service, children, ...rest }: { service?: string; children: ReactNode } & Omit<ButtonProps, "onClick" | "href" | "children">) {
  const { openEnquiry } = useEnquiry();
  return <Button onClick={() => openEnquiry(service)} {...rest}>{children}</Button>;
}
