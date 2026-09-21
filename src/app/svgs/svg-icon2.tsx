export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-3.5 block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" fill="none" height="14" stroke="currentColor" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
