// src/components/Structure.tsx
import React from 'react'

export function Plans() {
    const plans = [
        {
            name: "Plano Individual",
            price: "85",
            period: "/mês",
            details: "Treino individual dinâmico",
            highlight: false,
            features: [
                "Acesso livre à musculação",
                "Até 6 treinos por semana",
                "Estrutura completa e equipada",
                "Foco total na sua evolução"
            ]
        },
        {
            name: "Plano Casal",
            price: "160",
            period: "/mês",
            details: "Valor total para 2 pessoas",
            highlight: true,
            features: [
                "Acesso livre para o casal",
                "Até 6 treinos por semana para cada",
                "Equivale a R$ 80,00 por pessoa",
                "Treinar junto gera mais consistência"
            ]
        },
        {
            name: "Plano Amigo / Família",
            price: "75",
            period: "/mês",
            details: "A partir de R$ 75,00 por pessoa",
            highlight: false,
            features: [
                "Plano Amigo (2 pessoas): R$ 80,00 cada",
                "Plano Família (3+ pessoas): R$ 75,00 cada",
                "Até 6 treinos por semana por integrante",
                "Chame a galera e economize direto"
            ]
        }
    ];

    return (
        <section id="planos" className="py-24 bg-black px-4 md:px-8 border-b border-neutral-900">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                            NOSSOS PLANOS E <br />
                            <span className="text-amber-400">HORÁRIOS</span>
                        </h2>
                        <p className="text-neutral-400 font-medium max-w-md mx-auto md:mx-0">
                            Escolha o formato ideal para o seu bolso e chame seus parceiros de treino para a Zero 13.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end w-full">
                        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 text-center sm:text-left min-w-[220px]">
                            <span className="block font-bold text-neutral-400 uppercase text-xs mb-1">Segunda a Sexta</span>
                            <span className="text-amber-400 font-black text-base block">07:00 às 12:00</span>
                            <span className="text-amber-400 font-black text-base block">14:00 às 22:00</span>
                        </div>
                        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 text-center sm:text-left min-w-[220px] flex flex-col justify-center">
                            <span className="block font-bold text-neutral-400 uppercase text-xs mb-1">Sábado</span>
                            <span className="text-amber-400 font-black text-lg">09:00 às 13:00</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 shadow-xl ${plan.highlight ? 'border-2 border-amber-400 scale-[1.02] md:scale-[1.03] z-10 shadow-amber-400/5' : 'border border-neutral-900 hover:border-neutral-800'
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] font-black text-black bg-amber-400 rounded-full uppercase tracking-wider shadow-md">
                                    Mais Vantajoso
                                </span>
                            )}

                            <div>
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">{plan.name}</h3>
                                    <p className="text-amber-400 text-xs font-semibold mt-1">{plan.details}</p>
                                </div>

                                <div className="text-center my-6">
                                    <span className="text-sm text-neutral-400 font-bold align-top">R$</span>
                                    <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
                                    <span className="text-sm text-neutral-400 font-bold">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 my-8 text-neutral-300 font-medium text-sm border-t border-neutral-800/60 pt-6">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <span className="text-amber-400 font-bold">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/5513996951496?text=Quero%20saber%20mais%20sobre%20o%20${encodeURIComponent(plan.name)}%20de%20R$%20${plan.price}%20que%20vi%20no%20site!`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full py-3.5 text-center font-black rounded-xl transition-all duration-200 uppercase tracking-wider text-xs ${plan.highlight
                                    ? 'bg-amber-400 text-black hover:bg-amber-300 shadow-lg shadow-amber-500/10'
                                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                                    }`}
                            >
                                Garantir Minha Vaga
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xs text-neutral-500 font-medium">
                        * Os valores acima correspondem ao acesso livre à estrutura da academia.
                        Para serviços adicionais como <span className="text-amber-400/80 font-bold">Treino Personalizado e Criação de Rotina</span> com o Personal Matheus Menezes, consulte a disponibilidade diretamente no WhatsApp.
                    </p>
                </div>

            </div>
        </section>
    )
}