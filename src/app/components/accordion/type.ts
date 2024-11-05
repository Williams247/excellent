import { ReactNode } from "react";

export interface AccordionData {
  title: string;
  element: ReactNode;
}

export type Props = Array<AccordionData>;
