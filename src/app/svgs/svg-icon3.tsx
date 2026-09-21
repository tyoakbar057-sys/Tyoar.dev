export default function Icon3({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-[0.8125rem] block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="13" stroke="currentColor" viewBox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
