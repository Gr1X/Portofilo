import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation

const useSmoothScroll = () => {
  const lenisRef = useRef(null);
  const location = useLocation(); // 2. Dapatkan lokasi rute saat ini

  // Efek 1: Inisialisasi Lenis (hanya berjalan sekali)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
    });

    // Simpan instance Lenis di ref
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []); // <-- Dependensi kosong, hanya jalan sekali saat mount

  // Efek 2: Scroll ke atas setiap kali rute berubah
  useEffect(() => {
    if (lenisRef.current) {
      // Gunakan metode 'scrollTo' dari Lenis, bukan window
      // 'immediate: true' membuatnya melompat, bukan scroll mulus
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]); // <-- Berjalan setiap kali 'pathname' berubah

  return null;
};

export default useSmoothScroll;