// src/lib/fonts.ts
import localFont from "next/font/local";

export const kaioTRIAL = localFont({
  src: [
    {
      path: "../../public/fonts/KaioTRIAL-Light-BF65f24de1e5854.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../../public/fonts/KaioTRIAL-Regular-BF65f24de206d9d.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/KaioTRIAL-Medium-BF65f24de1b8279.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/KaioTRIAL-Bold-BF65f24de19552f.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/KaioTRIAL-Black-BF65f24de1e055e.otf",
      weight: "900",
      style: "normal"
    }
  ],
  variable: "--font-kaio",
  display: "swap"
});
