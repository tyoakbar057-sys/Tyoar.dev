import type { TextLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLink2Data = {
  label: string;
};
/** A text link. */
export default function TextLink2({ d, cids, styles }: { d: TextLink2Data; cids: string[]; styles: TextLink2Styles }) {
  return (
    <button data-cid={cids[0]} className={cn("block py-3 rounded-full flex-1 text-sm leading-5 text-center cursor-pointer", styles.className)} data-component="button">
      {d.label}
    </button>
  );
}
