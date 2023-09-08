# Hackathon_2023 -  Competição AlfaEngenharia 

## Objetivos:
Elaborar aplicações WEB, sendo um portal externo (sem senha) e um interno (com login) que poderá ser utilizado pela ALFA ENGENHARIA em suas operações em todo território nacional!

## Características do Portal Interno:
-  Com autenticação.
-  Visualização dos candidatos cadastrados no portal externo.
	2.1. Opção de admitir o candidato (para este campo buscamos basicamente a alteração de um status).
- Visualização dos reports de segurança cadastrados no portal externo.
	3.1. Geração do mapa de calor de acordo com a localização dos reports.
- Área de solicitações Alfa (somente para candidatos admitidos, a ser utilizado pelos setores administrativos).
	4.1. Solicitação / Agendamento / aprovação de concessão de Férias;
	4.2. Solicitação / Agendamento / aprovação de rescisão;
		4.2.1. Selecionar uma opção sendo elas: Redução de efetivo, Demissão por desempenho, Justa causa, Pedido de demissão, acordo legal. 
		4.2.2. Rank de 0 a 5 para o gerente responder o quanto recomendaria a recontratação deste profissional. 
	4.3. Possibilidade de visualização de todas as requisições com seus respectivos o status (aguardando aprovação, aprovado e reprovado).
- Cadastro das áreas e/ou equipamentos de trabalho da Alfa Engenharia – Exemplo Área do platô 5 e/ou andaimes e/ou guindastes.  
	5.1 Campos: código da área e/ou equipamentos, descrição da área e/ou equipamentos, status da liberação da área e/ou equipamentos  (SIM ou NÃO) e anexo de um PDF.

## Características do Portal Externo:
- Sem autenticação.
- Responsividade portal externo (mobile, notebook, tablet...).
- Área de cadastro de candidatos.
	3.1. O candidato pode escolher uma ou mais funções sendo uma principal (utilize a lista em Excel que será encaminhada no grupo do 	Hackathon Alfa).
	3.2. O candidato pode ter um ou mais dependentes (Nome completo, CPF, sexo, data nascimento e Grau de parentesco).
	3.3. O candidato deve informar se possui algum parente ou amigo que trabalha na Alfa (Caso positivo, colocar nome, função e 	cidade).
	3.4 Exemplo dos campos e anexos conforme “PDF 1 – Campos área candidato.pdf será encaminhada no grupo do 	Hackathon Alfa)”.
- Área de cadastro dos Report’s de relatos (ocorrências, criticas e ideias) referente a Segurança do Trabalho.
	4.1. Deve ter os campos (Nome, Centro de custo, Referência da Área de atuação, Descrição da ocorrência, Anexo de até 3 fotos).
	4.2. Possuir localização de quem reportou.
	4.3. Permitir capturar foto da câmera do dispositivo ou anexar fotos.
	4.4. O relato pode ter a opção de ser anônimo. 

## Envolvidos no Projeto: 
- Alunos do 2º período de Engenharia de Software da PUC MG.
- Back-End: Jhonata Dias
- Front-End: Pedro Braga
 
## Tecnologias
-> Front-End: HTML, CSS, JavaScript

-> Back-End: Node.js - Modulo: Express
