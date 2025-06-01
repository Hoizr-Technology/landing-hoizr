"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function HeroBg() {
  const images = [
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802769/pexels-isabella-mendes-107313-332688_vtgnt0.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802768/pexels-wendywei-1190297_jwisnp.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802767/pexels-wendywei-1190298_dbjh15.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802767/pexels-ulltangfilms-593345_xlqena.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802767/pexels-thibault-trillet-44912-167637_yvn2ux.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802767/pexels-vishnurnair-1105666_flxx0e.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802766/pexels-sebastian-ervi-866902-1763075_bvs8ot.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802766/pexels-rdne-6173807_alr3zh.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802766/pexels-stephendn-63703_k3guir.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802764/pexels-picjumbo-com-55570-196652_susthm.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802764/pexels-pixabay-417473_xsji0c.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802764/pexels-osvaldo-coelho-jr-388501-1117256_oi210m.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802764/pexels-maumascaro-801863_st01gd.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802763/pexels-davidedegiovanni-1649691_zy9cyw.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802763/pexels-maumascaro-788824_mdwnzn.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802763/pexels-cottonbro-4722551_dxmzw5.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802762/pexels-artempodrez-6270257_lq3cjy.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802762/pexels-caricatte-2231755_wiofsu.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802762/pexels-brett-sayles-1486673_qktntx.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802762/pexels-annamw-1120162_rks9iq.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802762/pexels-artempodrez-6270272_w7nw26.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802762/pexels-annamw-1047442_cn9wda.jpg",
   "https://res.cloudinary.com/duhefgqh4/image/upload/v1748802761/pexels-brett-sayles-1434625_wmzvc9.jpg",
   
  ];
  return (
    <div className="relative max-h-screen noise-background">
    <ThreeDMarquee images={images} className=""/>
    {/* Gradient overlay that fades to transparent at bottom */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none"></div>
  </div>
  );
}
