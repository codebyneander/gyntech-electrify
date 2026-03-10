

## Plano: Ajustar seção de Depoimentos

### Alterações em `src/components/TestimonialsSection.tsx`

1. **Player de áudio acima do grid**: Criar um bloco centralizado entre o subtítulo e o grid com:
   - Texto "🎧 Ouça o relato real de um cliente:" em `text-muted-foreground`
   - `<audio controls>` envolvido em contêiner `bg-white/10 rounded-xl p-4` para visibilidade no tema escuro

2. **Atualizar Card 1**: Substituir texto e remover `hasAudio`. Novo conteúdo:
   - Texto: "Atendimento ágil e muito profissional. Resolveram toda a infraestrutura da minha garagem sem dor de cabeça e o carregador está funcionando perfeitamente. Recomendo a Gyntech!"
   - Nome: "Rafael S. - BYD Dolphin"

3. **Grid uniforme**: 3 cards apenas texto, todos com 5 estrelas, sem lógica de áudio nos cards.

