

## Plano: Infinite Logo Marquee

### Alterações

**1. `src/index.css`** — Adicionar keyframe `marquee` para rolagem infinita no eixo X:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
```

**2. `src/components/SocialProofBar.tsx`** — Reescrever completamente:
- Manter título centralizado com mesma tipografia
- Lista de marcas expandida: BYD, GWM, Volvo, Porsche, BMW, Audi, Jac Motors, **WEG**, **Intelbras**
- Cada marca renderizada como SVG inline simplificado (logotipo estilizado em texto/path) dentro de um container
- Estrutura: container com `overflow-hidden`, inner div com `flex` duplicando os itens (2x para loop infinito) e classe `animate-marquee`
- Logos em `opacity-50 hover:opacity-100 transition-opacity duration-300`, cor branca/cinza-clara
- Pausa animação no hover do container (`group-hover:[animation-play-state:paused]`)
- Gradientes de fade nas bordas esquerda/direita (pseudo-elements ou divs com gradient do bg para transparente)
- Espaçamento generoso entre logos (`gap-12 md:gap-16`)

### Arquivos afetados
- **Editar**: `src/index.css` (adicionar keyframe marquee)
- **Editar**: `src/components/SocialProofBar.tsx` (reescrever com marquee)

