Repositorio publico para os Exercicios da vaga Job Rotation - Ribeirão Preto

Questão 1 - 
    Resultado da variável SOMA é 91
- [Python](./ex01/inPy.py)
- [JavaScript](./ex01/inJS.js)

Questão 2 - 
- [Python](./ex02/fibonacci.py)
- [JavaScript](./ex02/fibonacci.js)

Questão 3 -
    Descubra a lógica e complete o próximo elemento:

- a) 1, 3, 5, 7, **9**

- b) 2, 4, 8, 16, 32, 64, **128**

- c) 0, 1, 4, 9, 16, 25, 36, **49**

- d) 4, 16, 36, 64, **100**

- e) 1, 1, 2, 3, 5, 8, **13**

- f) 2, 10, 12, 16, 17, 18, 19, **200**

Questão 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

- Podemos fazer uma breve conta ignorando os pedagios 

    ```
    Carro: V = 110 km/h e △S = 100km

    110 = 100 = △t = 54min
          ---
          △t
    ```

    ```
    Caminhão: V = 80 km/h e △S = 100km

    80 = 100 = △t = 1h15min + 10min = 1h25min
         ---
         △t
    ```

- Considerando as velocidades o carro estara mais longe

Questão 5 -  Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

- [Python](./ex05/inPy.py)
- [JavaScript](./ex05/inJS.js)