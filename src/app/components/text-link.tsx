import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("block relative pb-1 [font-family:'DM_Mono',_monospace] text-[0.8125rem] leading-[1.25rem] tracking-[1.04px] cursor-pointer max-md:hidden", styles.className)} data-component="link" href={d.href}>
      {d.label}
      <span data-cid={cids[1]} className={cn("h-px block absolute bottom-0 left-0 bg-color-001 max-md:hidden", styles.className2)} />
    </a>
  );
}
