

## Plano: Otimização de Core Web Vitals e Payload

### 1. Substituição de imagens

Copiar os uploads para `src/assets/`, substituindo os antigos:

| Arquivo atual (deletar) | Novo arquivo (copiar do upload) |
|---|---|
| `tecnico-auditoria.webp` | `tecnico-auditoria.png` |
| `instagram-screenshot.webp` | `instagram-screenshot-2.png` |
| `elias-barbo.webp` | `elias-barbo.png` |
| `bg-charger.webp` | `bg-charger.png` |
| `aperto-de-maos.webp` | `aperto-de-maos.webp` (substituir pelo novo upload) |
| `bg-veiculo.webp` | `bg-veiculo.webp` (substituir pelo novo upload) |
| `estacoes-recarga.webp` | `estacoes-recarga.webp` (substituir pelo novo upload) |
| `logo-gyntech.webp` | `logo-gyntech.webp` (substituir pelo novo upload) |
| `selo-20-anos.webp` | `selo-20-anos.webp` (substituir pelo novo upload) |
| `instagram-screenshot.png` | deletar (não mais usado) |

Atualizar imports nos componentes:
- `MethodologySection.tsx`: `tecnico-auditoria.webp` → `tecnico-auditoria.png`
- `InstagramPhoneMockup.tsx`: `instagram-screenshot.webp` → `instagram-screenshot-2.png`
- `AboutSection.tsx`: `elias-barbo.webp` → `elias-barbo.png`
- `HeroSection.tsx`: `bg-charger.webp` → `bg-charger.png`

### 2. Correção de áudio duplicado

Em `TestimonialsSection.tsx`, adicionar `preload="none"` na tag `<audio>`:
```tsx
<audio controls preload="none" className="w-full" src="/audio/depoimento.mp3" />
```

### 3. Fontes com font-display: swap

O `index.html` já carrega as fontes com `&display=swap` no URL do Google Fonts. Verificar que está correto -- já está presente.

### 4. CLS -- dimensões fixas em containers de imagem

Revisar todos os componentes com `<img>` e garantir `width`/`height` explícitos (a maioria já possui das otimizações anteriores). Adicionar `aspect-ratio` no container do Instagram mockup para reservar espaço.

### 5. Limpeza de JS não utilizado

- Remover `instagram-screenshot.png` antigo (arquivo duplicado)
- O projeto já usa code-splitting e lazy loading. Sem código morto significativo identificado nos componentes.

### Arquivos modificados

- `src/assets/` -- copiar novos, deletar antigos
- `src/components/MethodologySection.tsx` -- atualizar import
- `src/components/InstagramPhoneMockup.tsx` -- atualizar import
- `src/components/AboutSection.tsx` -- atualizar import
- `src/components/HeroSection.tsx` -- atualizar import
- `src/components/TestimonialsSection.tsx` -- adicionar `preload="none"`

