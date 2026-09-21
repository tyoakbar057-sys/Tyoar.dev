import type { ReactNode } from "react";
import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  href: string;
  viewBox: string;
  icon: ReactNode;
  description: string;
  description2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, cids, styles }: { d: MediaLinkData; cids: string[]; styles: MediaLinkStyles }) {
  return (
    <a data-cid={cids[0]} className="h-[62.5px] border border-solid border-border flex relative opacity-0 p-3 rounded-2xl justify-between items-center overflow-hidden bg-color-009 transform-[matrix(1,0,0,1,0,26)] cursor-pointer group" href={d.href} rel="noopener noreferrer" target="_blank">
      <div data-cid={cids[1]} className="w-[10.5625rem] h-full block absolute top-0 left-0 min-w-0 bg-surface-2 transform-[matrix(1,0,0,1,-169,0)] max-md:w-[18.1875rem] max-md:transform-[matrix(1,0,0,1,-291,0)] md:max-lg:w-[18.9375rem] md:max-lg:transform-[matrix(1,0,0,1,-303,0)]" />
      <div data-cid={cids[2]} className="flex relative z-10 items-center gap-3">
        <svg data-cid={cids[3]} className={cn("h-4 block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]", styles.className)} data-component="icon" fill="currentColor" height="1em" stroke="currentColor" viewBox={d.viewBox} width="1em" xmlns="http://www.w3.org/2000/svg" strokeWidth="0">{d.icon}</svg>
        <div data-cid={cids[4]} className="block">
          <p data-cid={cids[5]} className="block text-sm leading-5">
            {d.description}
          </p>
          <p data-cid={cids[6]} className="block text-color-008 text-[0.6875rem] leading-[1.0625rem]">
            {d.description2}
          </p>
        </div>
      </div>
      <div data-cid={cids[7]} className="h-6 block relative z-10 opacity-0 group-hover:opacity-100">
        <div data-cid={cids[8]} className="flex rounded-md justify-center items-center bg-border w-6 h-6">
          <svg data-cid={cids[9]} className="w-auto h-3 block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="12" stroke="currentColor" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
