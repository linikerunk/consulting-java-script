INSERT INTO  estados ( id, nome, sigla, regiao, populacao )
VALUES (1000, 'Novo', 'NV', 'Sul', 2.54);

SELECT nome FROM estados WHERE id =1000;

INSERT INTO estados ( nome, sigla, regiao, populacao)
VALUES ('Mais Novo', 'MN', 'Norte', 2.51)


-- significa se eu passar um dado colocando o id o auto_increment irá continuar a partir dele...
SELECT * FROM estados;