

## Plano: Migrar SVGs de logos para assets locais

### 1. Copiar SVGs para `src/assets/`

Copiar os 6 SVGs enviados pelo usuário:
- `user-uploads://BYD_Auto_2022_logo.svg` → `src/assets/BYD_Auto_2022_logo.svg`
- `user-uploads://GWM_2025_logo.svg` → `src/assets/GWM_2025_logo.svg`
- `user-uploads://Volvo_Iron_Mark_-_black.svg` → `src/assets/Volvo_Iron_Mark_-_black.svg`
- `user-uploads://Porsche_Wortmarke.svg` → `src/assets/Porsche_Wortmarke.svg`
- `user-uploads://BMW.svg` → `src/assets/BMW.svg`
- `user-uploads://Audi_logo.svg` → `src/assets/Audi_logo.svg`
- `user-uploads://jac-motors_logo-2.svg` → `src/assets/jac-motors_logo.svg` (substituir o antigo)

### 2. Atualizar `src/components/SocialProofBar.tsx`

Substituir todas as URLs externas do Wikimedia por imports locais via ES6 modules:

```tsx
import bydLogo from "@/assets/BYD_Auto_2022_logo.svg";
import gwmLogo from "@/assets/GWM_2025_logo.svg";
import volvoLogo from "@/assets/Volvo_Iron_Mark_-_black.svg";
import porscheLogo from "@/assets/Porsche_Wortmarke.svg";
import bmwLogo from "@/assets/BMW.svg";
import audiLogo from "@/assets/Audi_logo.svg";
import jacMotorsLogo from "@/assets/jac-motors_logo.svg";

const brands = [
  { name: "BYD", logo: bydLogo },
  { name: "GWM", logo: gwmLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Porsche", logo: porscheLogo },
  { name: "BMW", logo: bmwLogo },
  { name: "Audi", logo: audiLogo },
  { name: "Jac Motors", logo: jacMotorsLogo },
];
```

### 3. Cache

Assets importados via Vite (em `src/assets/`) são automaticamente processados com hash no nome do arquivo durante o build (ex: `BMW-abc123.svg`), o que permite cache imutável de longo prazo pelo navegador. Nenhuma configuração adicional necessária.

### Arquivos modificados
- `src/assets/` — 7 SVGs (6 novos + 1 substituído)
- `src/components/SocialProofBar.tsx` — imports locais

