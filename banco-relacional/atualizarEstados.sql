UPDATE estados
SET nome = 'Maranhão'
where sigla = 'MA';

SELECT estados.`nome` FROM  estados WHERE sigla = "MA";
SELECT est.`nome` 'Nome Mudado' FROM  estados est WHERE sigla = "MA";

UPDATE estados
SET  nome = 'Paraná', populacao = 11.32
WHERE sigla = "PR";

SELECT estados.`nome`, estados.`sigla`, estados.`populacao`
FROM estados
WHERE sigla = 'PR';