

## Plano: Substituir textos por logos SVG reais no marquee

### Observação importante
O link fornecido para **JAC Motors** (`seeklogo.com/vector-logo/...`) é uma página do site SeekLogo, não um link direto para um SVG. Não é possível usá-lo como `src` de uma `<img>`. Para JAC Motors, manterei o nome em texto estilizado como fallback até que um link direto de SVG seja fornecido. Da mesma forma, **WEG** e **Intelbras** não tiveram links fornecidos — também ficarão em texto como fallback.

### Alterações em `src/components/SocialProofBar.tsx`

1. Atualizar o array `brands` para incluir `logo` (URL do SVG) em cada item, quando disponível
2. Substituir o `BrandLogo` para renderizar `<img>` quando há logo, ou `<span>` texto como fallback
3. Aplicar nas imagens:
   - `h-8 md:h-10 w-auto object-contain` — altura fixa, proporção mantida
   - `brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300` — logo branca com hover
4. Manter `alt={name}` para acessibilidade

### Logos com link direto SVG (6 marcas):
- BYD, GWM, Volvo, Porsche, BMW, Audi

### Fallback em texto (3 marcas):
- JAC Motors, WEG, Intelbras

