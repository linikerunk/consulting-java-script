SELECT 
    regiao AS 'Região',
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total desc;


SELECT 
    SUM(populacao) as Total
FROM estados

SELECT 
    AVG(populacao) as 'Media por Estado'
FROM estados;