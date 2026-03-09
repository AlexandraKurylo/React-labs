export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  fullAnswer: string;
  resources: string[];
}

export interface IAccordionItemProps extends FAQItem {
  isOpen: boolean;
  onToggle: () => void;
}
