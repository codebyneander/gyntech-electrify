

## Plano: Atualizar link do WhatsApp em todo o site

### Alteração única em 5 arquivos

Substituir `"https://api.whatsapp.com/send?phone=5562993433548"` por `"https://wa.link/vt5tyr"` na constante `WHATSAPP_URL` de cada arquivo:

1. `src/components/Header.tsx` — linha 4
2. `src/components/HeroSection.tsx` — linha 6
3. `src/components/FooterCta.tsx` — linha 4
4. `src/components/WhatsAppFloat.tsx` — linha 1
5. `src/components/InstagramPhoneMockup.tsx` — linha 3

Nenhuma outra alteração necessária.

