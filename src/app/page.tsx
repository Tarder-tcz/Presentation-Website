'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideData, SlideData } from '@/data/slideData';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isGridView, setIsGridView] = useState(false);
  const [direction, setDirection] = useState(0);
  const totalSlides = slideData.length;

  const nextSlide = useCallback(() => {
    if (!isGridView) {
      setDirection(1);
      setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
    }
  }, [isGridView, totalSlides]);

  const prevSlide = useCallback(() => {
    if (!isGridView) {
      setDirection(-1);
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  }, [isGridView]);

  const toggleGrid = useCallback(() => {
    setIsGridView((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input (not likely here, but good practice)
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          toggleGrid();
          break;
        case 'Escape':
          if (isGridView) {
            e.preventDefault();
            setIsGridView(false);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, toggleGrid, isGridView]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : direction < 0 ? -100 : 0,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : direction > 0 ? -100 : 0,
      opacity: 0,
      scale: 0.98
    })
  };

  const renderSlideContent = (slide: SlideData) => {
    switch (slide.layoutType) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-12">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-indigo-900 to-indigo-500 mb-6 py-2">
              {slide.title}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-medium max-w-3xl leading-relaxed">
              {slide.content}
            </p>
          </div>
        );
      case 'split':
        return (
          <div className="flex flex-col h-full items-center justify-center p-12 lg:p-24">
            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto items-stretch gap-8 lg:gap-16">
              <div className="flex-1 w-full flex flex-col justify-center">
                <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                  {slide.title}
                </h2>
              </div>
              
              <div className="hidden md:flex flex-col justify-center py-4">
                <motion.div 
                  variants={{
                    enter: { scaleY: 0, opacity: 0, originY: 0.5 },
                    center: { scaleY: 1, opacity: 1, originY: 0.5, transition: { duration: 0.7, ease: "easeOut", delay: 0.1 } },
                    exit: { scaleY: 0, opacity: 0, originY: 0.5, transition: { duration: 0.4, ease: "easeIn" } }
                  }}
                  className="w-[3px] bg-slate-300 rounded-full h-full"
                />
              </div>

              <div className="flex-1 w-full flex flex-col justify-center text-left">
                <ul className="space-y-8">
                  {Array.isArray(slide.content) ? slide.content.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.15, duration: 0.5, type: 'spring' }}
                      className="text-xl lg:text-3xl text-slate-700 font-medium flex items-start"
                    >
                      <span className="inline-block w-4 h-4 rounded-full bg-indigo-500 mt-2.5 mr-6 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  )) : (
                    <p className="text-2xl text-slate-700">{slide.content}</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'single':
        return (
          <div className="flex flex-col h-full items-center justify-center p-12 lg:p-24 text-center max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-12">
              {slide.title}
            </h2>
            <p className="text-2xl lg:text-4xl text-slate-700 leading-relaxed font-medium">
              {slide.content}
            </p>
          </div>
        );
      case 'quote':
        return (
          <div className="flex flex-col h-full items-center justify-center p-12 lg:p-24 max-w-5xl mx-auto">
            <div className="relative">
              <span className="absolute -top-16 -left-12 text-8xl text-indigo-200 font-serif">"</span>
              <h2 className="text-3xl lg:text-5xl font-semibold text-slate-800 leading-tight italic z-10 relative">
                {slide.content}
              </h2>
            </div>
          </div>
        );
      case 'metrics':
        return (
          <div className="flex flex-col h-full justify-center p-12 lg:p-24">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 text-center">
              {slide.title}
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 font-medium text-center mb-16 max-w-3xl mx-auto">
              {slide.content}
            </p>
            {slide.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {slide.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.6, type: 'spring' }}
                    className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm shadow-xl rounded-3xl border border-white"
                  >
                    <span className="text-5xl lg:text-7xl font-black text-indigo-600 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                      {stat.value}
                    </span>
                    <span className="text-lg lg:text-xl font-semibold text-slate-500 uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        );
      case 'table':
        return (
          <div className="flex flex-col h-full items-center justify-center p-12 lg:p-24 max-w-5xl mx-auto w-full">
            {slide.title && (
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-12 text-center">
                {slide.title}
              </h2>
            )}
            {slide.tableData && (
              <div className="w-full max-w-4xl bg-white/50 backdrop-blur-sm shadow-xl rounded-3xl border border-white overflow-hidden p-2 sm:p-4 lg:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b-2 border-indigo-200/50">
                        {slide.tableData.headers.map((header, idx) => (
                          <th key={idx} className="py-4 px-6 font-bold text-lg lg:text-xl text-indigo-900 tracking-wide">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {slide.tableData.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="border-b border-slate-200/50 last:border-0 hover:bg-white/60 transition-colors duration-200"
                        >
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="py-4 px-6 text-base lg:text-lg text-slate-700 font-medium whitespace-nowrap">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {slide.content && typeof slide.content === 'string' && slide.content !== "" && (
              <p className="mt-8 text-xl text-slate-600 font-medium text-center">
                {slide.content}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const focalPoints = [
    "50% 0%",
    "100% 50%",
    "50% 100%",
    "0% 50%",
  ];
  const currentFocalPoint = focalPoints[currentSlide % focalPoints.length];

  return (
    <main className="grid-wrapper w-screen h-screen overflow-hidden font-sans text-slate-900 selection:bg-indigo-200">
      <motion.div 
        className="grid-background pointer-events-none"
        animate={{
          WebkitMaskImage: `radial-gradient(ellipse 70% 60% at ${currentFocalPoint}, #000 60%, transparent 100%)`,
          maskImage: `radial-gradient(ellipse 70% 60% at ${currentFocalPoint}, #000 60%, transparent 100%)`
        } as any}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />

      {isGridView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-20 bg-slate-100/90 backdrop-blur-xl p-8 overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12 mt-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800">Slide Overview</h2>
              <button
                onClick={toggleGrid}
                className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Close Grid (G)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
              {slideData.map((slide, idx) => (
                <motion.div
                  key={slide.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setDirection(idx > currentSlide ? 1 : idx < currentSlide ? -1 : 0);
                    setCurrentSlide(idx);
                    setIsGridView(false);
                  }}
                  className={`
                    cursor-pointer aspect-[16/10] bg-white rounded-2xl shadow-md border 
                    flex flex-col relative group transition-all duration-300
                    ${currentSlide === idx ? 'border-indigo-500 ring-2 ring-indigo-500/50 shadow-indigo-200/50' : 'border-slate-200 hover:shadow-xl'}
                  `}
                >
                  <div className="flex-1 p-6 flex flex-col justify-center items-center text-center overflow-hidden">
                    <h3 className="font-bold text-slate-800 text-lg md:text-xl line-clamp-2">{slide.title}</h3>
                    <div className="mt-4 flex flex-col items-center gap-1">
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 font-medium">Slide {idx + 1}</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest">{slide.layoutType} layout</span>
                    </div>
                  </div>
                  {currentSlide === idx && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-slate-50 shadow-sm">
                      ✓
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="relative w-full h-full z-10 flex flex-col">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="flex-1 w-full h-full"
            >
              {renderSlideContent(slideData[currentSlide])}
            </motion.div>
          </AnimatePresence>

          {/* Footer Navigation Overlay */}
          <div className="absolute bottom-8 left-12 right-12 flex justify-between items-center text-slate-500 text-sm font-semibold tracking-wide border-t border-slate-200/50 pt-6">
            <div className="flex items-center gap-8">
              <span className="opacity-80 text-slate-700">{slideData[currentSlide].speaker}</span>
              <span className="opacity-0 lg:opacity-60 hidden md:inline-block">Press 'G' for Grid View • Escape to close</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/50 border border-slate-200 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-colors shadow-sm"
                  aria-label="Previous Slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/50 border border-slate-200 flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-colors shadow-sm"
                  aria-label="Next Slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
              <span className="w-16 text-right tabular-nums opacity-60">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
