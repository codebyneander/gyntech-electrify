

## Plano: Limpar marcas sem logo e adicionar SVG da JAC Motors

### Alterações

**1. Copiar o SVG da JAC Motors** para `src/assets/jac-motors_logo.svg`

**2. Editar `src/components/SocialProofBar.tsx`**:
- Importar o SVG da JAC Motors como asset: `import jacMotorsLogo from "@/assets/jac-motors_logo.svg"`
- Remover **WEG** e **Intelbras** do array `brands`
- Substituir `{ name: "Jac Motors" }` por `{ name: "Jac Motors", logo: jacMotorsLogo }`
- Resultado: 7 marcas, todas com logo (BYD, GWM, Volvo, Porsche, BMW, Audi, JAC Motors)

