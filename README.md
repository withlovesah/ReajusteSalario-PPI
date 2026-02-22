# Atividade 1 - Reajuste de Salário
**Análise e Desenvolvimento de Sistemas - Unoeste**

## 🎯 Objetivo
Criar aplicativo web que calcula reajuste salarial para 3.000 funcionários de empresa de Presidente Prudente-SP, recebendo dados via query string na URL e exibindo resultado dinâmico processado pelo servidor.

## 📊 Funcionalidades
- Validação completa de todos os parâmetros obrigatórios
- Cálculo automático baseado na tabela oficial de reajustes
- Interface responsiva com destaque visual no salário reajustado  
- Exibição de todos os dados informados + novo salário
- Processamento server-side com Express.js

## 📊 **Tabela de Reajuste**

| Faixa Etária | Sexo | Reajuste | Desconto (até 10 anos) | Acréscimo (mais de 10 anos) |
|--------------|------|----------|-----------------------|-----------------------------|
| 18-39        | F    | 8%       | R$11,00               | R$16,00                     |
|              | M    | 10%      | R$10,00               | R$17,00                     |
| 40-69        | F    | 10%      | R$7,00                | R$14,00                     |
|              | M    | 8%       | R$5,00                | R$15,00                     |
| 70-99        | F    | 17%      | R$17,00               | R$12,00                     |
|              | M    | 15%      | R$15,00               | R$13,00                     |

## 🛠️ Stack
VSCode | Node.js | Express.js | HTML/CSS | Vercel

## 🚀 Como usar
Copie e cole na barra do navegador, mudando os números pros seus dados:
http://localhost:3000/?idade=25&sexo=F&salario_base=1700&anoContratacao=2014&matricula=12345

## 📋 Requisitos Validados
✅ Idade > 16  
✅ Salário base = número real válido 
✅ Ano contratação > 1960  
✅ Matrícula = inteiro > 0
✅ Sexo = M ou F
✅ Resposta dinâmica server-side
✅ Salário reajustado em destaque


**Sara Heloisa Ferreira da Silva - ADS Unoeste 2026**





