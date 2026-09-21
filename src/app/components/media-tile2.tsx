import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  description: string;
  imgSrc: string;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids, styles }: { d: MediaTile2Data; cids: string[]; styles: MediaTile2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("border border-solid border-primary block p-4 rounded-3xl bg-color-004 [filter:blur(0px)] max-md:p-3 max-md:rounded-[20px]", styles.className)}>
      <div data-cid={cids[1]} className="flex gap-3">
        <div data-cid={cids[2]} className="flex rounded-full justify-center items-center shrink-0 text-xs font-semibold leading-4 bg-border w-10 h-10 max-md:w-9 max-md:h-9">
          h
        </div>
        <div data-cid={cids[3]} className="block flex-1">
          <div data-cid={cids[4]} className="flex mb-1 flex-wrap items-center gap-2">
            <p data-cid={cids[5]} className="block text-sm font-medium leading-5">
              https://www.tiktok.com/@seisge
            </p>
            <div data-cid={cids[6]} className="border border-solid border-accent flex py-[0.1875rem] px-2 rounded-full items-center gap-1 text-color-003 text-[0.625rem] leading-[0.9375rem] bg-color-006">
              <svg data-cid={cids[7]} className="w-auto h-2.5 block overflow-hidden align-middle" data-component="icon" aria-hidden="true" fill="none" height="10" stroke="currentColor" viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17v5" />
                <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
              </svg>
              PINNED
            </div>
          </div>
          <p data-cid={cids[8]} className="block text-color-005 text-[0.8125rem] leading-[1.25rem] max-md:text-xs max-md:leading-4.5">
            {d.description}
          </p>
          <img data-cid={cids[9]} className={cn("w-full border border-solid border-border block max-w-full max-h-56 mt-3 rounded-xl overflow-clip object-cover align-middle max-md:max-h-48", styles.className2)} data-component="image" alt="Comment" src={d.imgSrc} />
        </div>
        <button data-cid={cids[10]} className={cn("flex items-center gap-1 text-color-002 text-[0.6875rem] leading-[1.0625rem] text-center cursor-pointer", styles.className3)} data-component="button">
          <svg data-cid={cids[11]} className={cn("w-auto h-[0.8125rem] block overflow-hidden align-middle", styles.className4)} data-component="icon" aria-hidden="true" fill="none" height="13" stroke="currentColor" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
          {d.label}
        </button>
      </div>
    </div>
  );
}
