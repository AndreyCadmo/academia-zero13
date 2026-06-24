import React from 'react';

export const academiaInfo = {
    nome: "Treine Mais",
    personal: "Léo",
    whatsapp: "551300000000",
    localizacao: "OSASCO - DDD 11",
    endereço: "R. Camélia, 26",
    bairro: " Jardim das Flores",
    cidade: "OSASCO / SP",
};

export const plans = [
    {
        name: "Plano Individual",
        price: "90",
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
        price: "170",
        period: "/mês",
        details: "Valor total para 2 pessoas",
        highlight: true,
        features: [
            "Acesso livre para o casal",
            "Até 6 treinos por semana para cada",
            "Equivale a R$ 85,00 por pessoa",
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
            "Plano Amigo (2 pessoas): R$ 85,00 cada",
            "Plano Família (3+ pessoas): R$ 75,00 cada",
            "Até 6 treinos por semana por integrante",
            "Chame a galera e economize direto"
        ]
    }
];

export const items = [
    {
        title: "Musculação Raiz",
        desc: "Equipamentos essenciais, pesados e focados em quem quer treinar de verdade, sem firula visual ou distração.",
        icon: "💪"
    },
    {
        title: "Treino Personalizado",
        desc: "A mensalidade garante o uso da estrutura. Para potencializar seus resultados, você pode contratar o acompanhamento exclusivo de Personal Trainer.",
        icon: "📋"
    },
    {
        title: "Vibe Hardcore",
        desc: "Ambiente motivador com som no talo e ventiladores potentes. Aqui o foco é a consistência e a parceria de quem treina todo dia.",
        icon: "⚡"
    }
];