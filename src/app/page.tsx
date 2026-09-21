import DittoMotion from "./ditto/DittoMotion";
import TextLink, { type TextLinkData } from "./components/text-link";
import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import TextLink2, { type TextLink2Data } from "./components/text-link2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import Icon8 from "./svgs/svg-icon8";
import Icon9 from "./svgs/svg-icon9";
import MediaLink, { type MediaLinkData } from "./components/media-link";
import Icon10 from "./svgs/svg-icon10";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Icon11 from "./svgs/svg-icon11";
import { TextLink_cids, MediaTile_cids, TextLink2_cids, MediaLink_cids, MediaTile2_cids } from "./_cids";
import { TextLink_styles, MediaTile_styles, TextLink2_styles, MediaLink_styles, MediaTile2_styles } from "./_styles";

const TextLink_data: TextLinkData[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
];
const MediaTile_data: MediaTileData[] = [
    { icon: <>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
          </>, text: "11843", text2: "PROJECTS" },
    { icon: <>
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
          </>, text: "2", text2: "CERTIFICATES" },
    { icon: <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
          </>, text: "11845", text2: "COMPLETED WORKS" }
];
const TextLink2_data: TextLink2Data[] = [
    { label: "Projects" },
    { label: "Certificates" },
    { label: "Tech Stack" }
];
const MediaLink_data: MediaLinkData[] = [
    { href: "https://www.instagram.com/itsmeikky_12?igsh=ZHFpMTJ1bHQzeDAx", viewBox: "0 0 448 512", icon: <>
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </>, description: "Instagram", description2: "@instagram" },
    { href: "https://youtube.com/@zettaajah?si=QRjJGD4zCQG8aIHX", viewBox: "0 0 576 512", icon: <>
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </>, description: "Youtube", description2: "@youtube" },
    { href: "https://github.com/RifqiMuhammadAliya12", viewBox: "0 0 496 512", icon: <>
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </>, description: "Github", description2: "@github" },
    { href: "https://www.tiktok.com/@itsme.ikky_?_r=1&_t=ZS-95yAYr5PHUb", viewBox: "0 0 448 512", icon: <>
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
          </>, description: "TikTok", description2: "@tiktok" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666670" },
    { description: "https://www.tiktok.com/@seisgea", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666668" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", label: "666669" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666668" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666667" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" },
    { description: "https://www.tiktok.com/@seisge", imgSrc: "/assets/cloned/images/a4d433b3e059.gif", label: "666666" }
];

export default function Page() {
  return (
    <>
      <main className="h-full block relative overflow-hidden" data-cid="n1">
        <div className="h-full block fixed top-0 inset-x-0 -z-10 overflow-hidden pointer-events-none" data-cid="n2">
          <div className="h-full block absolute top-0 inset-x-0 pointer-events-none" data-cid="n3">
            <div className="block absolute top-10 left-10 opacity-30 rounded-full bg-color-001 [filter:blur(90px)] transform-[matrix(1,0,0,1,0,35)] pointer-events-none w-56 h-56 max-md:w-40 max-md:h-40" data-cid="n4" />
            <div className="block absolute top-10 right-10 opacity-25 rounded-full bg-clr-0 [filter:blur(100px)] transform-[matrix(1,0,0,1,56.4642,28.8867)] pointer-events-none w-56 h-56 max-md:w-40 max-md:h-40" data-cid="n5" />
            <div className="block absolute bottom-10 left-10 opacity-30 rounded-full bg-clr-1 [filter:blur(110px)] transform-[matrix(1,0,0,1,93.2039,12.6825)] pointer-events-none w-60 h-60 max-md:w-44 max-md:h-44" data-cid="n6" />
            <div className="block absolute right-10 bottom-10 opacity-20 rounded-full bg-color-001 [filter:blur(100px)] transform-[matrix(1,0,0,1,97.3848,-7.95207)] pointer-events-none w-56 h-56 max-md:w-40 max-md:h-40" data-cid="n7" />
          </div>
          <div className="h-full block absolute top-0 inset-x-0 [background-size:26px_26px,_26px_26px] [background-position:0%_0%,_0%_0%] [background-repeat:repeat,_repeat] [background-clip:border-box,_border-box] [background-origin:padding-box,_padding-box] [background-attachment:scroll,_scroll] [background-blend-mode:normal,_normal] [-webkit-background-clip:border-box,_border-box] pointer-events-none" style={{ backgroundImage: "linear-gradient(90deg, var(--border) 1px, var(--clr-2) 1px), linear-gradient(var(--border) 1px, var(--clr-2) 1px)" }} data-cid="n8" />
        </div>
        <div className="h-full block relative z-2" data-cid="n9">
          <nav className="h-[45.5px] block fixed top-5 inset-x-15 z-50 max-md:h-[41.5px] max-md:inset-x-5" data-cid="n10" data-component="nav">
            <div className="border border-solid border-color-007 flex py-2.5 px-7.5 rounded-[999px] justify-between items-center bg-clr-3 [backdrop-filter:blur(12px)]" data-cid="n11">
              <span className="block text-muted-foreground [font-family:'DM_Mono',_monospace] text-[0.8125rem] leading-[1.25rem] tracking-[1.3px]" data-cid="n12">
                rifqi.dev
              </span>
              <div className="flex gap-10 max-md:flex-col max-md:gap-1 max-md:cursor-pointer" data-cid="n13">
                <span className="hidden max-md:w-5 max-md:h-0.5 max-md:block max-md:bg-color-001" data-cid="n14" />
                <span className="hidden max-md:w-5 max-md:h-0.5 max-md:block max-md:bg-color-001" data-cid="n15" />
                <span className="hidden max-md:w-5 max-md:h-0.5 max-md:block max-md:bg-color-001" data-cid="n16" />
                {TextLink_data.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} styles={TextLink_styles[i]} />)}
              </div>
            </div>
          </nav>
          <section className="h-200 min-h-screen flex relative pr-15 pl-30 justify-start items-center overflow-hidden max-md:h-203 max-md:px-6 md:max-lg:h-256 2xl:h-270" data-cid="n25" id="home">
            <div className="h-full block absolute top-0 inset-x-0 z-40 min-w-0" data-cid="n26">
              <div className="h-full block absolute top-0 inset-x-0 z-1 overflow-hidden pointer-events-none" data-cid="n27">
                <div className="h-full block relative overflow-hidden max-md:pointer-events-none" data-cid="n28">
                  <div className="h-full block max-md:pointer-events-none" data-cid="n29">
                    <img className="w-full h-200 block overflow-clip aspect-[auto_1280/800] align-middle max-md:h-203 max-md:aspect-[auto_375/812] max-md:pointer-events-none md:max-lg:h-256 md:max-lg:aspect-[auto_768/1024] 2xl:h-270 2xl:aspect-[auto_1920/1080]" data-cid="n30" height="800" src="/assets/cloned/images/efb0506b4ae9.png" width="1280" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full block relative z-5 max-w-150 max-md:max-w-none" data-cid="n31">
              <div className="h-6 block mb-5 [filter:blur(0px)]" data-cid="n32">
                <span className="inline text-muted [font-family:'DM_Mono',_monospace] text-xs leading-4.5 tracking-[2.4px] uppercase" data-cid="n33">
                  ✦ Available for work
                </span>
              </div>
              <div className="block" data-cid="n34">
                <h1 className="block text-[3.875rem] font-extrabold leading-[4.0625rem] tracking-[-1.86px] max-md:text-[2rem] max-md:leading-[2.125rem] max-md:tracking-[-0.96px] md:max-lg:text-[2.875rem] md:max-lg:leading-[3rem] md:max-lg:tracking-[-1.38px]" data-cid="n35" data-component="heading">
                  Frontend
                </h1>
                <h1 className="block mb-6 text-muted-foreground text-[3.875rem] font-extrabold leading-[4.0625rem] tracking-[-1.86px] max-md:text-[2rem] max-md:leading-[2.125rem] max-md:tracking-[-0.96px] md:max-lg:text-[2.875rem] md:max-lg:leading-[3rem] md:max-lg:tracking-[-1.38px]" data-cid="n36" data-component="heading">
                  Developer
                </h1>
              </div>
              <div className="block mb-3" data-cid="n37">
                <span className="inline text-muted-foreground [font-family:'DM_Mono',_monospace] text-[0.9375rem] leading-[1.4375rem] tracking-[1.5px]" data-cid="n38">
                  <div className="inline-block tracking-[-0.37px] whitespace-pre-wrap" data-cid="n39">
                    <span className="inline" data-cid="n40">
                      {"Happy "}
                    </span>
                    <span className="inline-block opacity-[0.998] ml-1 max-md:opacity-[0.2964] md:max-lg:opacity-[0.0241] 2xl:opacity-[0.0197]" data-cid="n41">
                      _
                    </span>
                  </div>
                </span>
              </div>
              <div className="w-full max-w-115 block mb-7" data-cid="n42">
                <p className="block text-muted-foreground text-sm leading-[1.6875rem] tracking-[0.14px] text-pretty" data-cid="n43">
                  Menciptakan website modern dengan tampilan clean, responsif, dan elegan. Mengubah ide dan desain menjadi pengalaman digital yang menarik dan mudah digunakan.
                </p>
              </div>
              <div className="flex mb-7 flex-wrap gap-2" data-cid="n44">
                <span className="border border-solid border-color-007 block py-[0.3125rem] px-3 rounded-[999px] text-muted-foreground [font-family:'DM_Mono',_monospace] text-[0.6875rem] leading-[1.0625rem] bg-color-011" data-cid="n45">
                  Typescript
                </span>
                <span className="border border-solid border-color-007 block py-[0.3125rem] px-3 rounded-[999px] text-muted-foreground [font-family:'DM_Mono',_monospace] text-[0.6875rem] leading-[1.0625rem] bg-color-011" data-cid="n46">
                  React.js
                </span>
                <span className="border border-solid border-color-007 block py-[0.3125rem] px-3 rounded-[999px] text-muted-foreground [font-family:'DM_Mono',_monospace] text-[0.6875rem] leading-[1.0625rem] bg-color-011" data-cid="n47">
                  Tailwind
                </span>
              </div>
              <div className="flex flex-col gap-1.5" data-cid="n48">
                <span className="block text-muted [font-family:'DM_Mono',_monospace] text-[0.8125rem] leading-[1.25rem]" data-cid="n49">
                  ↓ explore my work below
                </span>
                <span className="block text-muted [font-family:'DM_Mono',_monospace] text-[0.8125rem] leading-[1.25rem]" data-cid="n50">
                  {"↗ open to full-time & freelance opportunities"}
                </span>
              </div>
            </div>
            <div className="w-0 h-0 block absolute top-190.5 left-160 z-20 min-w-0 pointer-events-none" data-cid="n51">
              <div className="w-0 h-[16.5px] flex absolute bottom-4 z-20 justify-center pointer-events-none" data-cid="n52">
                <div className="flex opacity-[0.976479] justify-center items-center gap-2 transform-[matrix(1,0,0,1,0,0.595858)] pointer-events-none max-md:opacity-[0.929061] max-md:transform-[matrix(1,0,0,1,0,2.215)] md:max-lg:opacity-[0.942964] md:max-lg:transform-[matrix(1,0,0,1,0,1.63358)] 2xl:opacity-[0.767122] 2xl:transform-[matrix(1,0,0,1,0,5.17987)]" data-cid="n53">
                  <span className="block text-muted [font-family:'DM_Mono',_monospace] text-[0.6875rem] leading-[1.0625rem] tracking-[2.2px] uppercase pointer-events-none" data-cid="n54">
                    Scroll
                  </span>
                  <span className="block text-muted-foreground leading-4 pointer-events-none" data-cid="n55">
                    ↓
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="h-200 min-h-screen flex pt-20 pr-15 pb-7.5 pl-30 items-start max-md:h-[900.9px] max-md:pt-15 max-md:px-6 md:max-lg:h-256 2xl:h-270" data-cid="n56" id="about">
            <div className="w-full block" data-cid="n57">
              <div className="h-[26.225rem] flex justify-between items-center gap-8 max-md:h-[27.7125rem] max-md:flex-col md:max-lg:h-[27.4125rem]" data-cid="n58">
                <div className="w-full h-full block max-w-150" data-cid="n59">
                  <div className="h-6 block opacity-0 mb-4 [filter:blur(8px)] transform-[matrix(1,0,0,1,0,35)]" data-cid="n60">
                    <span className="inline text-muted [font-family:'DM_Mono',_monospace] text-xs leading-4.5 tracking-[2.4px]" data-cid="n61">
                      ABOUT ME
                    </span>
                  </div>
                  <div className="block opacity-0 [filter:blur(8px)] transform-[matrix(1,0,0,1,0,35)]" data-cid="n62">
                    <div className="block text-[2.875rem] font-extrabold leading-[2.9375rem] max-md:text-[2rem] max-md:leading-[2.0625rem] md:max-lg:text-[2.375rem] md:max-lg:leading-[2.5rem]" data-cid="n63">
                      <div className="block" data-cid="n64">
                        Rifqi
                      </div>
                      <div className="block" data-cid="n65">
                        Muhammad
                      </div>
                      <div className="block" data-cid="n66">
                        Aliya
                      </div>
                    </div>
                  </div>
                  <p className="block opacity-0 max-w-122.5 mt-4.5 text-muted-foreground text-sm leading-[1.5625rem] transform-[matrix(1,0,0,1,0,40)]" data-cid="n67">
                    Fresh Graduate SMK Rekayasa Perangkat Lunak lulusan 2026 dengan passion di bidang frontend development dan UI modern. Berfokus pada pembuatan website clean, responsif, dan visual yang kuat untuk menghadirkan pengalaman digital yang optimal.
                  </p>
                  <div className="border border-solid border-color-007 inline-block opacity-0 mt-4.5 py-3 px-[1.5625rem] rounded-[10px] text-xs italic leading-4.5 bg-color-011 transform-[matrix(0.94,0,0,0.94,0,0)] origin-[215px_22px]" data-cid="n68">
                    “Turning ideas into clean, modern, and meaningful digital experiences.”
                  </div>
                  <div className="h-[41.5px] flex opacity-0 mt-4.5 flex-wrap gap-2.5 [filter:blur(8px)] transform-[matrix(1,0,0,1,0,35)]" data-cid="n69">
                    <a className="h-[41.5px] block cursor-pointer" data-cid="n70" data-component="link" href="https://drive.google.com/file/d/1cFqZ0TY0U0I51K0Tchv8E4sbOv5yAZ9x/view?usp=drive_link" rel="noopener noreferrer" target="_blank">
                      <div className="h-[41.5px] border border-solid border-color-001 flex py-2.5 px-4.5 rounded-lg items-center gap-1.5 text-clr-4 text-[0.8125rem] font-semibold leading-[1.25rem] text-center bg-color-001 whitespace-nowrap" data-cid="n71" data-component="button">
                        <Icon cid={"n72"} />
                        Download CV
                      </div>
                    </a>
                    <button className="h-[41.5px] border border-solid border-color-001 flex py-2.5 px-4.5 rounded-lg items-center gap-1.5 text-color-001 text-[0.8125rem] font-semibold leading-[1.25rem] text-center cursor-pointer" data-cid="n73" data-component="button">
                      <Icon2 cid={"n74"} />
                      View Projects
                    </button>
                  </div>
                </div>
                <div className="w-117 h-66.5 flex opacity-0 justify-end transform-[matrix(0.999391,0.0348995,-0.0348995,0.999391,70,0)] origin-[234px_133px] max-md:hidden" data-cid="n75">
                  <div className="border border-solid border-color-007 block p-3 rounded-[50%] transform-[matrix(1,0,0,1,-80,0)] max-md:hidden" data-cid="n76">
                    <img className="w-full h-60 block max-w-full rounded-[50%] overflow-clip object-cover align-middle max-md:hidden" data-cid="n77" data-component="avatar" alt="Profile" src="/assets/cloned/images/2a87f7e564b3.png" />
                  </div>
                </div>
              </div>
              <div className="h-[98.5px] grid mt-9 gap-4.5 grid-rows-[98.5px] grid-cols-3 max-md:h-[331.5px] max-md:grid-rows-[98.5px_98.5px_98.5px] max-md:grid-cols-1" data-cid="n78">
                {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} styles={MediaTile_styles[i]} />)}
              </div>
            </div>
          </section>
          <section className="block max-w-362.5 py-24 px-20 text-color-001 mx-auto w-full max-md:px-8 md:max-lg:px-12" data-cid="n100" id="portfolio">
            <div className="block opacity-0 mb-8 text-center transform-[matrix(1,0,0,1,0,45)]" data-cid="n101">
              <h1 className="block mb-3 text-5xl font-bold leading-12 max-md:text-3xl max-md:leading-9" data-cid="n102" data-component="heading">
                Portfolio Showcase
              </h1>
              <p className="block mx-auto text-color-005 max-w-xl max-md:text-sm max-md:leading-5" data-cid="n103">
                Explore my journey through projects, certifications, and technical expertise.
              </p>
            </div>
            <div className="flex mb-10 justify-center" data-cid="n104">
              <div className="border border-solid border-border flex p-2 rounded-full gap-2 bg-surface-2 [backdrop-filter:blur(24px)] w-full max-w-3xl" data-cid="n105">
                {TextLink2_data.map((d, i) => <TextLink2 key={i} d={d} cids={TextLink2_cids[i]} styles={TextLink2_styles[i]} />)}
              </div>
            </div>
            <div className="block" data-cid="n109">
              <div className="block" data-cid="n110">
                <div className="w-full grid px-1 gap-6 grid-rows-[313px] max-md:grid-rows-[313px_308.75px_308.75px] md:max-lg:grid-rows-[313px_308.75px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-cid="n111">
                  <div className="h-[19.5625rem] block" data-cid="n112">
                    <div className="h-[19.5625rem] min-h-67.5 border border-solid border-border flex relative opacity-0 p-4 rounded-[26px] flex-col bg-surface-2 [backdrop-filter:blur(24px)] transform-[matrix(1,0,0,1,-50,20)]" data-cid="n113">
                      <div className="border border-solid border-border block mb-3 rounded-2xl overflow-hidden bg-surface-2 w-full h-36" data-cid="n114">
                        <img className="w-full block max-w-full overflow-clip object-cover align-middle h-full" data-cid="n115" data-component="image" src="/assets/cloned/images/04d36e901f66.png" />
                      </div>
                      <h3 className="block mb-2 text-[1.0625rem] font-semibold leading-[1.3125rem]" data-cid="n116" data-component="heading">
                        Project Portofolio
                      </h3>
                      <p className="h-[42.3px] min-h-9.5 overflow-hidden text-color-010 text-[0.8125rem] leading-[1.3125rem] line-clamp-2" data-cid="n117">
                        Portofolio adalah kumpulan dokumen, karya, proyek, atau pencapaian terbaik seseorang yang disusun secara sistematis untuk menunjukkan kemampuan, pengalaman, dan kualitas diri di bidang tertentu. Ini berfungsi sebagai bukti nyata (bukan sekadar klaim) saat melamar kerja, beasiswa, atau proyek.
                      </p>
                      <div className="flex pt-4 justify-between items-center" data-cid="n118">
                        <div className="block text-color-008 text-[0.8125rem] leading-[1.25rem]" data-cid="n119">
                          No Link
                        </div>
                        <button className="h-[35.5px] flex py-2 px-4 rounded-full items-center gap-2 text-[0.8125rem] leading-[1.25rem] text-center bg-border cursor-pointer hover:bg-clr-8" data-cid="n120" data-component="button">
                          Details
                          <Icon3 cid={"n121"} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block" data-cid="n122">
                    <div className="h-[19.3rem] min-h-67.5 border border-solid border-border flex relative opacity-0 p-4 rounded-[26px] flex-col bg-surface-2 [backdrop-filter:blur(24px)] transform-[matrix(1,0,0,1,50,20)]" data-cid="n123">
                      <div className="border border-solid border-border block mb-3 rounded-2xl overflow-hidden bg-surface-2 w-full h-36" data-cid="n124">
                        <img className="w-full block max-w-full overflow-clip object-cover align-middle h-full" data-cid="n125" data-component="image" src="/assets/cloned/images/c7f6d85d16dd.jpg" />
                      </div>
                      <h3 className="block mb-2 text-[1.0625rem] font-semibold leading-[1.3125rem]" data-cid="n126" data-component="heading">
                        Test
                      </h3>
                      <p className="h-9.5 min-h-9.5 overflow-hidden text-color-010 text-[0.8125rem] leading-[1.3125rem] line-clamp-2" data-cid="n127">
                        y
                      </p>
                      <div className="flex pt-4 justify-between items-center" data-cid="n128">
                        <div className="block text-color-008 text-[0.8125rem] leading-[1.25rem]" data-cid="n129">
                          No Link
                        </div>
                        <button className="h-[35.5px] flex py-2 px-4 rounded-full items-center gap-2 text-[0.8125rem] leading-[1.25rem] text-center bg-border cursor-pointer hover:bg-clr-8" data-cid="n130" data-component="button">
                          Details
                          <Icon3 cid={"n131"} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="block" data-cid="n132">
                    <div className="h-[19.3rem] min-h-67.5 border border-solid border-border flex relative opacity-0 p-4 rounded-[26px] flex-col bg-surface-2 [backdrop-filter:blur(24px)] transform-[matrix(1,0,0,1,-50,20)]" data-cid="n133">
                      <div className="border border-solid border-border block mb-3 rounded-2xl overflow-hidden bg-surface-2 w-full h-36" data-cid="n134">
                        <div className="block bg-surface-2 w-full h-full" data-cid="n135" />
                      </div>
                      <h3 className="block mb-2 text-[1.0625rem] font-semibold leading-[1.3125rem]" data-cid="n136" data-component="heading">
                        seisge
                      </h3>
                      <p className="h-9.5 min-h-9.5 overflow-hidden text-color-010 text-[0.8125rem] leading-[1.3125rem] line-clamp-2" data-cid="n137">
                        seisge
                      </p>
                      <div className="flex pt-4 justify-between items-center" data-cid="n138">
                        <div className="block text-color-008 text-[0.8125rem] leading-[1.25rem]" data-cid="n139">
                          No Link
                        </div>
                        <button className="h-[35.5px] flex py-2 px-4 rounded-full items-center gap-2 text-[0.8125rem] leading-[1.25rem] text-center bg-border cursor-pointer hover:bg-clr-8" data-cid="n140" data-component="button">
                          Details
                          <Icon3 cid={"n141"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-8 justify-center" data-cid="n142">
                  <button className="h-11.5 border border-solid border-border flex py-3 px-6 rounded-full items-center gap-2 text-color-013 text-sm leading-5 text-center bg-surface-2 [backdrop-filter:blur(24px)] cursor-pointer hover:text-color-001 hover:outline-color-001 hover:[text-decoration-color:var(--color-001)]" data-cid="n143" data-component="button">
                    <div className="flex items-center gap-2 whitespace-nowrap" data-cid="n144">
                      <Icon4 cid={"n145"} />
                      See More
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="h-[91.3125rem] block max-w-375 pt-28 pb-36 px-20 text-color-001 mx-auto w-full max-md:h-[2180.5px] max-md:pt-20 max-md:pb-24 max-md:px-5 md:max-lg:h-569.5 md:max-lg:pt-24 md:max-lg:pb-28 md:max-lg:px-10" data-cid="n146" id="contact">
            <div className="block opacity-0 mb-16 text-center transform-[matrix(1,0,0,1,0,50)]" data-cid="n147">
              <h1 className="block opacity-[0.00597617] mb-4 text-6xl font-bold leading-15 transform-[matrix(1,0,0,1,0,-0.210016)] max-md:opacity-[0.178142] max-md:mb-3 max-md:text-3xl max-md:leading-9 max-md:transform-[matrix(1,0,0,1,0,-3.57846)] md:max-lg:opacity-[0.00065225] md:max-lg:text-5xl md:max-lg:leading-12 md:max-lg:transform-[matrix(1,0,0,1,0,-4.08541)] 2xl:opacity-[0.000925001] 2xl:transform-[matrix(1,0,0,1,0,-0.200882)]" data-cid="n148" data-component="heading">
                Contact Me
              </h1>
              <p className="block opacity-[0.000232724] mx-auto text-color-010 transform-[matrix(1,0,0,1,0,-0.75532)] max-w-2xl max-md:opacity-[0.0125205] max-md:text-sm max-md:leading-[1.4375rem] max-md:transform-[matrix(1,0,0,1,0,-0.393385)] max-md:max-w-xl md:max-lg:opacity-[0.00109037] md:max-lg:transform-[matrix(1,0,0,1,0,-3.24246)] 2xl:opacity-[0.0112167] 2xl:transform-[matrix(1,0,0,1,0,-2.11864)]" data-cid="n149">
                Have something in mind? Send a message and let's connect.
              </p>
            </div>
            <div className="w-full grid gap-12 grid-rows-[945px] grid-cols-[420px_1fr] max-md:gap-6 max-md:grid-rows-[986px_757px] max-lg:grid-cols-1 md:max-lg:gap-10 md:max-lg:grid-rows-[845px_945px]" data-cid="n150">
              <div className="h-[59.0625rem] block w-full max-md:h-246.5 md:max-lg:h-[52.8125rem]" data-cid="n151">
                <div className="border border-solid border-border flex opacity-0 p-8 rounded-[28px] flex-col bg-surface-2 [backdrop-filter:blur(24px)] transform-[matrix(1,0,0,1,-40,0)] h-full" data-cid="n152">
                  <div className="h-29 block opacity-0 transform-[matrix(1,0,0,1,0,26)]" data-cid="n153">
                    <h2 className="block mb-3 text-3xl font-bold leading-9 max-md:text-2xl max-md:leading-8" data-cid="n154" data-component="heading">
                      Hubungi Saya
                    </h2>
                    <p className="block mb-7 text-color-012 text-sm leading-5" data-cid="n155">
                      Feel free to reach out if you want to collaborate, discuss ideas, or simply say hello.
                    </p>
                  </div>
                  <div className="block" data-cid="n156">
                    <div className="block opacity-0 transform-[matrix(1,0,0,1,0,26)]" data-cid="n157">
                      <div className="block relative" data-cid="n158">
                        <Icon5 cid={"n159"} />
                        <input className="w-full h-14.5 border border-solid border-surface inline-block py-4 pr-4 pl-12 rounded-2xl overflow-clip bg-color-009 cursor-text focus:border-color-001 focus:shadow-[var(--clr-10)_0px_0px_0px_0px,var(--color-002)_0px_0px_0px_0.959368px,var(--clr-2)_0px_0px_0px_0px]" data-cid="n160" data-component="input" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="block opacity-0 mt-4 transform-[matrix(1,0,0,1,0,26)]" data-cid="n161">
                      <div className="block relative" data-cid="n162">
                        <Icon6 cid={"n163"} />
                        <input className="w-full h-14.5 border border-solid border-surface inline-block py-4 pr-4 pl-12 rounded-2xl overflow-clip bg-color-009 cursor-text focus:border-color-001 focus:shadow-[var(--color-001)_0px_0px_0px_0px,var(--color-002)_0px_0px_0px_0.983502px,var(--clr-2)_0px_0px_0px_0px]" data-cid="n164" data-component="input" placeholder="Your Email" />
                      </div>
                    </div>
                    <div className="block opacity-0 mt-4 transform-[matrix(1,0,0,1,0,26)]" data-cid="n165">
                      <div className="block relative" data-cid="n166">
                        <Icon7 cid={"n167"} />
                        <textarea className="w-full h-38.5 border border-solid border-surface inline-block py-4 pr-4 pl-12 rounded-2xl overflow-auto whitespace-pre-wrap [overflow-wrap:break-word] bg-color-009 cursor-text focus:border-color-001 focus:shadow-[var(--color-001)_0px_0px_0px_0px,var(--color-002)_0px_0px_0px_0.996118px,var(--clr-2)_0px_0px_0px_0px]" data-cid="n168" data-component="textarea" placeholder="Your Message" />
                      </div>
                    </div>
                    <button className="h-14.5 border border-solid border-border flex opacity-0 mt-4 py-4 rounded-2xl justify-center items-center gap-2 text-center bg-border transform-[matrix(1,0,0,1,0,26)] cursor-pointer w-full" data-cid="n169">
                      <Icon8 cid={"n170"} />
                      Send Message
                    </button>
                  </div>
                  <div className="border-t border-solid border-t-border block mt-6 pt-5" data-cid="n171">
                    <p className="block opacity-0 mb-4 text-color-005 text-sm leading-5 transform-[matrix(1,0,0,1,0,26)]" data-cid="n172">
                      Connect With Me
                    </p>
                    <a className="h-17.5 border border-solid border-border flex relative opacity-0 mb-3 p-4 rounded-2xl justify-between items-center overflow-hidden bg-color-009 transform-[matrix(1,0,0,1,0,26)] cursor-pointer group" data-cid="n173" href="https://www.linkedin.com/in/rifqimuhammadaliya/" rel="noopener noreferrer" target="_blank">
                      <div className="w-88 h-full block absolute top-0 left-0 min-w-0 bg-surface-2 transform-[matrix(1,0,0,1,-352,0)] max-md:w-[18.1875rem] max-md:transform-[matrix(1,0,0,1,-291,0)] md:max-lg:w-155 md:max-lg:transform-[matrix(1,0,0,1,-620,0)]" data-cid="n174" />
                      <div className="flex relative z-10 items-center gap-3" data-cid="n175">
                        <Icon9 cid={"n176"} />
                        <div className="block" data-cid="n177">
                          <p className="block text-sm font-medium leading-5" data-cid="n178">
                            LinkedIn
                          </p>
                          <p className="block text-color-008 text-xs leading-4" data-cid="n179">
                            @linkedin
                          </p>
                        </div>
                      </div>
                      <div className="h-7 block relative z-10 opacity-0 group-hover:opacity-100" data-cid="n180">
                        <div className="flex rounded-lg justify-center items-center bg-border w-7 h-7" data-cid="n181">
                          <Icon2 cid={"n182"} />
                        </div>
                      </div>
                    </a>
                    <div className="grid gap-3 grid-rows-2 grid-cols-2 max-md:grid-rows-4 max-md:grid-cols-1" data-cid="n183">
                      {MediaLink_data.map((d, i) => <MediaLink key={i} d={d} cids={MediaLink_cids[i]} styles={MediaLink_styles[i]} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[59.0625rem] block w-full max-md:h-[47.3125rem]" data-cid="n224">
                <div className="border border-solid border-border block opacity-0 p-8 rounded-[34px] bg-surface-2 [backdrop-filter:blur(24px)] transform-[matrix(1,0,0,1,40,0)] h-full" data-cid="n225">
                  <div className="block mb-6 max-md:mb-5" data-cid="n226">
                    <h3 className="block mb-1 text-2xl font-semibold leading-8 max-md:text-xl max-md:leading-7" data-cid="n227" data-component="heading">
                      Comments
                    </h3>
                    <p className="block text-color-002 text-sm leading-5 max-md:text-xs max-md:leading-4" data-cid="n228">
                      Leave your thoughts here
                    </p>
                  </div>
                  <div className="block mb-6 max-md:mb-5" data-cid="n229">
                    <label className="h-13.5 border border-dashed border-surface flex opacity-0 mt-4 p-4 rounded-2xl items-center gap-3 bg-color-009 transform-[matrix(1,0,0,1,0,20)] cursor-pointer" data-cid="n230">
                      <Icon10 cid={"n231"} />
                      <span className="block text-clr-5 text-sm leading-5 max-md:text-xs max-md:leading-4" data-cid="n232">
                        Upload Image
                      </span>
                    </label>
                    <button className="border border-solid border-border inline-block opacity-0 mt-4 py-4 rounded-2xl text-center bg-border transform-[matrix(1,0,0,1,0,20)] cursor-pointer w-full" data-cid="n233">
                      Post Comment
                    </button>
                  </div>
                  <div className="border border-solid border-border block p-3 rounded-[28px] overflow-auto bg-color-009 h-[26.25rem] max-md:rounded-3xl max-md:h-80" data-cid="n234">
                    <div className="h-72955 block max-md:h-55611.5 md:max-lg:h-77052.5 2xl:h-82072.5" data-cid="n235">
                      {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} styles={MediaTile2_styles[i]} />)}
                      <div className="border border-solid border-primary block mt-3 p-4 rounded-3xl bg-color-004 [filter:blur(0px)] max-md:p-3 max-md:rounded-[20px]" data-cid="n11996">
                        <div className="h-[15.375rem] flex gap-3 max-md:h-[184.5px] md:max-lg:h-[16.4rem] 2xl:h-[282.5px]" data-cid="n11997">
                          <div className="flex rounded-full justify-center items-center shrink-0 text-xs font-semibold leading-4 bg-border w-10 h-10 max-md:w-9 max-md:h-9" data-cid="n11998">
                            h
                          </div>
                          <div className="hidden max-md:h-[184.5px] max-md:block max-md:flex-1" data-cid="n11999">
                            <div className="hidden max-md:h-[3.1875rem] max-md:flex max-md:mb-1 max-md:flex-wrap max-md:items-center max-md:gap-2" data-cid="n12000">
                              <p className="hidden max-md:block max-md:text-sm max-md:font-medium max-md:leading-5" data-cid="n12001">
                                https://www.tiktok.com/@seisge
                              </p>
                              <div className="hidden max-md:border max-md:border-solid max-md:border-accent max-md:flex max-md:py-[0.1875rem] max-md:px-2 max-md:rounded-full max-md:items-center max-md:gap-1 max-md:text-color-003 max-md:text-[0.625rem] max-md:leading-[0.9375rem] max-md:bg-color-006" data-cid="n12002">
                                <Icon11 cid={"n12003"} />
                                PINNED
                              </div>
                            </div>
                            <p className="hidden max-md:block max-md:text-color-005 max-md:text-xs max-md:leading-4.5" data-cid="n12004">
                              https://www.tiktok.com/@seisge
                            </p>
                            <img className="hidden max-md:w-full max-md:h-25 max-md:border max-md:border-solid max-md:border-border max-md:block max-md:max-w-full max-md:max-h-48 max-md:mt-3 max-md:rounded-xl max-md:overflow-clip max-md:object-cover max-md:align-middle" data-cid="n12005" alt="Comment" src="/assets/cloned/images/a4d433b3e059.gif" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <DittoMotion spec={{"waapi":[{"cid":"n53","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0.65","computedOffset":0.5},{"offset":null,"easing":"linear","composite":"auto","opacity":"1","computedOffset":1}],"duration":1400,"delay":0,"easing":"ease-in-out","iterations":-1,"direction":"normal","fill":"both"},{"cid":"n148","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"0.00599919","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0","computedOffset":1}],"duration":4000,"delay":0,"easing":"ease-in-out","iterations":-1,"direction":"normal","fill":"both"},{"cid":"n149","keyframes":[{"offset":null,"easing":"linear","composite":"auto","opacity":"0.00582302","computedOffset":0},{"offset":null,"easing":"linear","composite":"auto","opacity":"0","computedOffset":1}],"duration":4400,"delay":0,"easing":"ease-in-out","iterations":-1,"direction":"normal","fill":"both"}],"rotators":[{"cid":"n40","texts":["Junior Program","Junior Progra","Junior Progr","Junior Prog","Junior Pro","Junior Pr","Junior P","Junior","Junio","Juni","Jun","Ju"],"intervalMs":186}],"reveals":[{"cid":"n101","opacity":"0.333804","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n113","opacity":"0.5","transform":"translateX(-22px)","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n123","opacity":"0.5","transform":"translateX(16px)","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n133","opacity":"0.5","transform":"translateX(-10px)","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n147","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"},{"cid":"n153","opacity":"0","transform":"none","transition":"opacity 0.6s ease, transform 0.6s ease"}],"marquees":[]}} />
    </>
  );
}
