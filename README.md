# Universo IF Avalia — MVP v1.0

Protótipo web para catálogo e avaliação educativa dos projetos Universo IF (Mostra Nacional e Extensão).

## Stack
- React 18 + TypeScript + Vite
- Catálogo local em JSON
- Cálculo de notas ponderadas e ranking no domínio
- Testes unitários com Vitest
- Backend opcional em Google Apps Script (Sheets)
- Workflow GitHub Pages (configuração de base path ainda requer ajuste do nome do repositório)

## Rodar localmente
```bash
npm install
npm run dev
```

## Verificações
```bash
npm test
npm run typecheck
npm run build
```

## Pastas
- `src/`: interface, estilos, catálogo e regras de avaliação
- `tests/`: testes de catálogo e cálculos
- `backend/Code.gs`: endpoint Google Apps Script
- `docs/`: instruções, auditorias e backlog

## Estado
Este commit de bootstrap não contém ainda todos os arquivos do MVP. A transferência completa do pacote está em andamento. O backend precisa ser implantado e configurado por quem administra a planilha; votação real e publicação não foram validadas.
