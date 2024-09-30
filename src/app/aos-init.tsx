"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
      easing: "ease-in-out",
      delay: 0,
    });
  }, []);

  return <></>;
}
