# NeuralAutom — Landing vitrine (conceitual)

Data: 2026-10-19
Status: aprovado para implementação

## Objetivo

Landing one-page de vitrine de marca para NeuralAutom, empresa conceitual de robótica e automação inteligente. Sem checkout. Hero é a fonte da identidade; o restante replica a mesma personalidade.

## Identidade (origem: prompt do hero)

- Marca: NeuralAutom
- Idioma da interface: PT-BR
- Tags de produto permanecem em EN (identidade): Advanced Bionics, Cognitive AI, Adaptive Systems, Neuromorphic, AGI, Cybernetics
- Stack: React 19, Vite, `motion` (`motion/react`), `lucide-react`, CSS puro (sem Tailwind)
- Fonte: Inter 300 / 400 / 500 / 600
- Paleta: branco `#FFFFFF`, preto `#000000`, pill `#F4F4F6`, borda `rgba(0,0,0,0.12)`, borda de botão `rgba(0,0,0,0.35)`, subtítulo preto 55%
- Motion: ease `[0.16, 1, 0.3, 1]`; stagger do hero conforme o prompt
- Breakpoint: 768px, mobile-first
- Ícones: SVG / Lucide — nunca emoji

## Arquitetura

Capítulos full-viewport (`min-height: 100dvh`), scroll-snap `proximity` (não mandatory — acessibilidade). Nav fixa em todos. Menu (+) abre overlay com âncoras.

1. **Hero** — layout 1:1 com o prompt (nav, vídeo full-bleed, footer em gradiente). Copy reescrito para robótica.
2. **Manifesto** — headline weight 300 + um parágrafo.
3. **Linhas** — Advanced Bionics, Cognitive AI, Adaptive Systems.
4. **Flagship** — um sistema âncora (NA Atlas) + CTA Ver especificações.
5. **Prova** — pills de setores + uma métrica editorial. Sem depoimento inventado.
6. **Contato** — headline + Falar com a equipe / Ver sistemas.

## Copy do hero (PT)

- Subtítulo: Sistemas de robótica e automação · 2026
- Título: Um sistema, zero / limites. Mundial.
- CTAs: Ver sistemas · Como funciona

## Regras UX

- Contraste 4.5:1, focus visível, alvos ≥44px
- `prefers-reduced-motion`: sem entrance motion
- Vídeo `muted` `playsInline`; texto equivalente no heading
- Um CTA primário por capítulo
- Overlay do menu fechável (Esc, clique, Plus rotacionado)

## Fora de escopo

Checkout, CMS, i18n toggle, depoimentos nominais, paleta ouro/glass.
