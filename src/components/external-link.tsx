import type { FC, ReactNode } from "react";

import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface ExternalLinkProps {
  to: string;
  label: string;
  icon?: ReactNode
}

export const ExternalLink: FC<ExternalLinkProps> = ({ to, label, icon }) => {
  return (
    <a href={to} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
      {icon}
      {label}
      <ExternalLinkIcon className="w-4 h-4" />
    </a>
  )
}
