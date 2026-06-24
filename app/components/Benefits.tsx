// src/components/Benefits.tsx
import React from 'react'
import { items } from '../config/Fitness'
import { academiaInfo } from '../config/Fitness'

export function Benefits() {
    return (
        <section id="beneficios" className="relative min-h-screen flex flex-col justify-center bg-neutral-950 px-4 md:px-8 border-b border-neutral-900 py-16 md:py-0">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                        POR QUE TREINAR NA <span className="text-amber-400">{academiaInfo.nome}?</span>
                    </h2>
                    <p className="text-neutral-400 mt-4 max-w-xl mx-auto font-medium">
                        A estrutura ideal para o seu shape com a flexibilidade de montar sua rotina.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black border border-neutral-900 p-8 rounded-2xl hover:border-amber-400/30 transition-all duration-300 group shadow-xl"
                        >
                            <div className="text-4xl mb-6 bg-neutral-900 w-16 h-16 flex items-center justify-center rounded-xl group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-wide">
                                {item.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}