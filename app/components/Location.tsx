// src/components/Location.tsx
import React from 'react'
import { academiaInfo } from '../config/Fitness'

export function Location() {
    return (
        <section id="localizacao" className="py-24 bg-neutral-950 px-4 md:px-8 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto">

                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                        NOSSA <span className="text-amber-400">LOCALIZAÇÃO</span>
                    </h2>
                    <p className="text-neutral-300 font-bold text-lg">
                        {academiaInfo.endereço}
                    </p>
                    <p className="text-neutral-400 text-sm font-medium mt-1 uppercase tracking-wider">
                        {academiaInfo.cidade}
                    </p>
                </div>

                <div className="mb-12 w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-neutral-900 shadow-2xl relative">
                    <iframe
                        src={`https://www.google.com/maps/embed?pb=${encodeURIComponent(academiaInfo.endereço + ', ' + academiaInfo.cidade)}`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                    ></iframe>
                </div>

                <div className="mb-16">
                    <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(academiaInfo.endereço + ', ' + academiaInfo.cidade)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-800 hover:border-amber-400/40 bg-black text-neutral-300 hover:text-white rounded-xl transition-all font-bold uppercase text-xs tracking-wider"
                    >
                        📍 Abrir no aplicativo do Maps
                    </a>
                </div>

                <hr className="border-neutral-900 mb-12" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-xs font-bold uppercase tracking-widest">
                    <div>
                        © {new Date().getFullYear()} {academiaInfo.nome}. TODOS OS DIREITOS RESERVADOS.
                    </div>
                    <div className="text-neutral-600">
                        Desenvolvido por <span className="text-neutral-400 font-black"><a href="https://andreycadmo.dev.br" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 ml-2">
                            Andrey Cadmo
                        </a></span>
                    </div>
                </div>

            </div>
        </section>
    )
}