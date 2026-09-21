import type { ReactNode } from "react";
import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  icon: ReactNode;
  text: string;
  text2: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("h-[98.5px] border border-solid border-color-007 block relative opacity-0 p-4.5 rounded-2xl bg-color-011 transform-[matrix(0.92,0,0,0.92,0,25)] cursor-pointer", styles.className)}>
      <div data-cid={cids[1]} className="w-8.5 h-8.5 border border-solid border-color-007 flex mb-2.5 rounded-[50%] justify-center items-center">
        <svg data-cid={cids[2]} className="w-auto h-4 block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="16" stroke="currentColor" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d.icon}</svg>
      </div>
      <div data-cid={cids[3]} className={cn("h-[1.6875rem] block absolute top-4 right-4 text-lg font-bold leading-[1.6875rem]", styles.className2)}>
        {d.text}
      </div>
      <div data-cid={cids[4]} className="block text-[0.6875rem] leading-[1.0625rem] tracking-[0.88px]">
        {d.text2}
      </div>
      <div data-cid={cids[5]} className="w-[0.9375rem] h-[0.9375rem] block absolute right-3.5 bottom-3.5">
        <svg data-cid={cids[6]} className="w-auto h-[0.9375rem] block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="15" stroke="currentColor" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </div>
    </div>
  );
}
