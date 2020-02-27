SELECT * FROM estados;

SELECT nome, sigla FROM estados;
SELECT sigla, nome FROM estados;

SELECT
     Sigla, nome AS 'Nome do Estado'
FROM estados;

where regiao = 'Sul';

SELECT nome, regiao, populacao FROM estados WHERE populacao >= 10;
SELECT nome, regiao, populacao FROM estados WHERE populacao >= 10 ORDER BY populacao DESC; -- DESC ordena do maior para o menor..ORDER BYDESC