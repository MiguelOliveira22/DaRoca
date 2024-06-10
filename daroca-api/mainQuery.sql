CREATE TABLE daroca.produtos(
   id      INT  IDENTITY (1, 1) NOT NULL,
   nome    VARCHAR (30) NOT NULL,
   imagem  VARCHAR (50) NOT NULL,
   valor   REAL NOT NULL,
   unidade VARCHAR(15) NOT NULL,
   descricao VARCHAR (50) NOT NULL,
   categoria INT,
   PRIMARY KEY CLUSTERED (id ASC)
);

CREATE TABLE daroca.carousel(
   id      INT  PRIMARY KEY  IDENTITY (1, 1) NOT NULL,
   nome    VARCHAR (30) NOT NULL,
   descricao VARCHAR (50) NOT NULL,
   imagem  VARCHAR (50) NOT NULL,
);

DROP TABLE daroca.produtos;

insert into daroca.produtos values ('Miguel', 'images/alho.jfif', 2.99, 'per unit', 'muito bom e saboroso yummy', 1)