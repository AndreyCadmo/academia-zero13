// src/components/Hero.tsx
import React from 'react'

export function Start() {
    return (
        <section id="inicio" className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 bg-black text-center overflow-hidden pt-20">

            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <img
                    src="/images/academia.png"
                    alt="Estrutura Academia Zero 13"
                    className="w-full h-full object-cover opacity-30 filter blur-[1px] brightness-50"
                />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none select-none flex justify-end">
                <img
                    src="/images/personal.png"
                    alt="Personal Matheus"
                    className="h-full w-auto object-contain opacity-100 filter contrast-115 brightness-90 translate-x-[10%] md:translate-x-0"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(0,0,0,1)_30%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0)_100%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/5 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

                <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider text-amber-400 bg-black/70 backdrop-blur-sm border border-amber-400/30 rounded-full uppercase mb-8 shadow-md">
                    A melhor estrutura de Itanhaém - DDD 13
                </span>

                <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white uppercase mb-8 leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                    ATIVE SUA MELHOR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                        VERSÃO HOJE MESMO
                    </span>
                </h1>

                <p className="text-base md:text-xl text-neutral-200 max-w-2xl mx-auto mb-12 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/10 p-2 rounded-xl backdrop-blur-[1px]">
                    Musculação raiz, ambiente focado e a estrutura essencial que você precisa para evoluir de verdade na Av. Governador Mário Covas.
                </p>

                <a
                    href="https://wa.me/5513996951496?text=Fala%20Matheus!%20Vim%20pelo%20site%20e%20quero%20conhecer%20os%20planos%20da%20Academia%20Zero%2013."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 text-base md:text-lg font-black text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-2xl transition-all duration-200 transform hover:scale-[1.03] shadow-xl shadow-amber-500/20 uppercase tracking-wider"
                >
                    Começar Treino Experimental
                </a>
            </div>
        </section>
    )
}