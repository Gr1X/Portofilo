// +++ 'useState' ditambahkan untuk logika 'inView' dari BlurText +++
import { forwardRef, useMemo, useRef, useEffect, useState } from "react";
import { motion as Motion } from "motion/react";

// +++ FUNGSI ASLI DARI 'BlurText.jsx' (Disalin, Tidak Diubah) +++
const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
  const keyframes = {};
  keys.forEach(k => {
  	keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

// --- HOOKS ASLI ANDA DARI 'VariableProximity.jsx' (Tidak Diubah) ---
function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
  	};
  	frameId = requestAnimationFrame(loop);
  	return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
  	const updatePosition = (x, y) => {
  	  if (containerRef?.current) {
  		const rect = containerRef.current.getBoundingClientRect();
  		positionRef.current = { x: x - rect.left, y: y - rect.top };
  	  } else {
  		positionRef.current = { x, y };
  	  }
  	};
  	const handleMouseMove = (ev) => updatePosition(ev.clientX, ev.clientY);
  	const handleTouchMove = (ev) => {
  	  const touch = ev.touches[0];
  	  updatePosition(touch.clientX, touch.clientY);
  	};
  	window.addEventListener("mousemove", handleMouseMove);
  	window.addEventListener("touchmove", handleTouchMove);
  	return () => {
  	  window.removeEventListener("mousemove", handleMouseMove);
  	  window.removeEventListener("touchmove", handleTouchMove);
  	};
  }, [containerRef]);
  return positionRef;
}

const VariableProximity = forwardRef((props, ref) => {
  const {
  	// --- PROPS ASLI 'VariableProximity' ---
  	label, // 'label' akan kita gunakan sebagai 'text'
  	fromFontVariationSettings,
  	toFontVariationSettings,
  	containerRef,
  	radius = 50,
  	falloff = "linear",
  	className = "", // className Anda akan dipakai
  	onClick,
  	style,
  	
  	// --- PROPS ASLI 'BlurText' ---
  	delay = 150,
  	animateBy = "words",
  	direction = 'top',
  	threshold = 0.1,
  	rootMargin = '0px',
  	animationFrom,
  	animationTo,
  	easing = t => t,
  	onAnimationComplete,
  	stepDuration = 0.35,
  	
  	...restProps
  } = props;

  // --- SEMUA LOGIKA INTERNAL ASLI DARI 'VariableProximity' (Tidak Diubah) ---
  const letterRefs = useRef([]);
  const interpolatedSettingsRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) =>
      new Map(
        settingsStr.split(",")
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(" ");
            return [name.replace(/['"]/g, ""), parseFloat(value)];
          })
      );
    const fromSettings = parseSettings(fromFontVariationSettings);
  	const toSettings = parseSettings(toFontVariationSettings);
  	return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
  	  axis,
  	  fromValue,
  	  toValue: toSettings.get(axis) ?? fromValue,
  	}));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const calculateFalloff = (distance) => {
  const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
  switch (falloff) {
  	  case "exponential": return norm ** 2;
  	  case "gaussian": return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case "linear":
      default: return norm;
  	}
  };

  useAnimationFrame(() => {
      if (!containerRef?.current) return;
      const { x, y } = mousePositionRef.current;
      if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) return;
      lastPositionRef.current = { x, y };
      const containerRect = containerRef.current.getBoundingClientRect();
      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return;
        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
        const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
        );
        if (distance >= radius) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
          return;
        }
        const falloffValue = calculateFalloff(distance);
        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
            // UBAH BARIS INI
            return `'${axis}' ${interpolatedValue}`;
          })
      .join(", ");
      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  const [inView, setInView] = useState(false);
  const animationTriggerRef = useRef(null); 

  useEffect(() => {
    if (!animationTriggerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        observer.unobserve(animationTriggerRef.current);
        }
  	  },
  	  { threshold, rootMargin }
  	);
  	observer.observe(animationTriggerRef.current);
  	return () => observer.disconnect();
  	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
  	() =>
  	  direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
  	[direction]
  );
  const defaultTo = useMemo(
  	() => [
  	  {
  		filter: 'blur(5px)',
  		opacity: 0.5,
  		y: direction === 'top' ? 5 : -5
  	  },
  	  { filter: 'blur(0px)', opacity: 1, y: 0 }
  	],
  	[direction]
  );
  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));
  // +++ AKHIR BLOK LOGIKA ASLI 'BlurText' ---


  // --- LOGIKA RENDER ASLI 'VariableProximity' (Dengan Integrasi Logika 'BlurText') ---
  const words = useMemo(() => label.split(" "), [label]);
  let letterIndex = 0;
  const totalLetters = useMemo(() => label.split(' ').join('').length, [label]);

  return (
  	<span
  	  // Integrasi ref: 1. untuk 'forwardRef', 2. untuk 'animationTriggerRef'
  	  ref={(node) => {
  		if (typeof ref === 'function') {
  		  ref(node);
  		} else if (ref) {
  		  ref.current = node;
  		}
  		animationTriggerRef.current = node; // Dari BlurText
  	  }}
  	  onClick={onClick}
  	  style={{
  		display: "inline-block",
  		fontFamily: '"Roboto Flex", sans-serif',
  		...style,
  	  }}
  	  className={className} // className Anda dari pemanggilan DITERAPKAN DI SINI
  	  {...restProps}
  	>
  	  {words.map((word, wordIndex) => (
  		<span
  		  key={wordIndex}
  		  className="inline-block whitespace-nowrap"
  		>
  		  {word.split("").map((letter) => {
  			const currentLetterIndex = letterIndex++;
  			
  			// +++ LOGIKA ASLI DARI 'BlurText.jsx' (Disalin, Tidak Diubah) +++
  			const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
  			
  			// +++ TITIK INTEGRASI (Satu-satunya "perubahan" logika) +++
  			// Ini untuk menghormati prop 'animateBy' dari BlurText
  			// Jika 'words', semua huruf di kata yg sama dapat delay yg sama
  			// Jika 'letters' (atau lainnya), setiap huruf dapat delay berbeda
  			const staggerIndex = animateBy === 'words' ? wordIndex : currentLetterIndex;
  			
  			const spanTransition = {
  			  duration: totalDuration,
  			  times,
  			  delay: (staggerIndex * delay) / 1000 // Terapkan delay
  			};
  			spanTransition.ease = easing;
  			// +++ AKHIR BLOK LOGIKA 'BlurText' +++
  			
  			const isLastLetter = currentLetterIndex === totalLetters - 1;
  			
  			return (
  			  <Motion.span
  				key={currentLetterIndex}
  				
                // --- PROPS ASLI 'VariableProximity' ---
  				ref={(el) => { letterRefs.current[currentLetterIndex] = el; }} 
  				style={{
  				  display: "inline-block",
  				  fontVariationSettings:
  					interpolatedSettingsRef.current[currentLetterIndex], 
  				}}
  				aria-hidden="true"
                // --- AKHIR PROPS ASLI 'VariableProximity' ---

  				// --- PROPS ASLI 'BlurText' ---
  				className="will-change-[transform,filter,opacity]"
  				initial={fromSnapshot}
  				animate={inView ? animateKeyframes : fromSnapshot}
  				transition={spanTransition}
  				onAnimationComplete={isLastLetter ? onAnimationComplete : undefined}
                // --- AKHIR PROPS ASLI 'BlurText' ---
  			  >
  				{letter === ' ' ? '\u00A0' : letter}
  			  </Motion.span>
  			);
  		  })}
  		  {wordIndex < words.length - 1 && (
  			<span className="inline-block">&nbsp;</span>
  		  )}
  		</span>
  	  ))}
  	  <span className="sr-only">{label}</span>
  	</span>
  );
});

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;