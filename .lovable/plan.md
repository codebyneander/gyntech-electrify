

## Plano: Scroll to Top na navegação

Criar um componente `ScrollToTop` global que escuta mudanças de rota via `useLocation` do React Router e executa `window.scrollTo(0, 0)`. Inserir dentro do `<BrowserRouter>` em `App.tsx`.

### Arquivos afetados
- **Criar**: `src/components/ScrollToTop.tsx` — componente com `useEffect` + `useLocation`
- **Editar**: `src/App.tsx` — adicionar `<ScrollToTop />` dentro do `<BrowserRouter>`

