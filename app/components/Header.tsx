// src/components/Header.tsx
"use client";

import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md border-b border-neutral-900 z-50 px-4 md:px-8 flex items-center justify-between">

            <div className="flex items-center gap-2 h-full py-2">
                <img
                    src="/images/logo.png"
                    alt="Logo Academia Zero 13"
                    className="h-full w-auto object-contain select-none pointer-events-none"
                />
            </div>

            <nav className="hidden md:flex items-center gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
                <a href="#inicio" className="text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors">Início</a>
                <a href="#beneficios" className="text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors">Diferenciais</a>
                <a href="#planos" className="text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors">Planos</a>
                <a href="#localizacao" className="text-sm font-semibold text-neutral-300 hover:text-amber-400 transition-colors">Localização</a>
            </nav>

            <div className="hidden md:block">
                <a
                    href="https://wa.me/5513996951496"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-200 uppercase tracking-wide shadow-md shadow-amber-500/10"
                >
                    Falar com o Matheus
                </a>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-amber-400 focus:outline-none p-4 z-50 cursor-pointer active:scale-95 transition-transform"
                aria-label="Abrir Menu"
            >
                <div className="w-6 h-5 flex flex-col justify-between relative pointer-events-none">
                    <span className={`w-full h-0.5 bg-amber-400 rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-full h-0.5 bg-amber-400 rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`w-full h-0.5 bg-amber-400 rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
            </button>

            {isOpen && (
                <div className="absolute top-20 left-0 right-0 bg-black border-b border-neutral-900 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
                    <a href="#inicio" onClick={() => setIsOpen(false)} className="text-base font-semibold text-neutral-300 py-3 border-b border-neutral-900">Início</a>
                    <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-base font-semibold text-neutral-300 py-3 border-b border-neutral-900">Diferenciais</a>
                    <a href="#planos" onClick={() => setIsOpen(false)} className="text-base font-semibold text-neutral-300 py-3 border-b border-neutral-900">Planos</a>
                    <a href="#localizacao" onClick={() => setIsOpen(false)} className="text-base font-semibold text-neutral-300 py-3 border-b border-neutral-900">Localização</a>
                    <a
                        href="https://wa.me/5513996951496"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full py-4 text-center text-sm font-bold text-black bg-amber-400 rounded-xl uppercase tracking-wide"
                    >
                        Falar com o Matheus
                    </a>
                </div>
            )}
        </header>
    );
}