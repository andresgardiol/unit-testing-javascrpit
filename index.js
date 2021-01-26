/*
    Link al problema de Advent of Code https://adventofcode.com/2020/day/2

    Capítulo 1, Parte 1 - Entendiendo el problema


    - ¿Cuál es el problema?

        El problema a resolver es: saber cuántas contraseñas (de la lista de contraseñas que nos dan) son válidas según las reglas de validez dadas.

    - Datos útiles:

        - Una lista de contraseñas de ejemplo:

        | 1-3 a: abcde
        | 1-3 b: cdefg
        | 2-9 c: ccccccccc

        - Las reglas para saber si una contraseña es válida o no:

            "Cada línea proporciona la política de contraseñas y luego la contraseña. La política de contraseñas indica
            la más baja y el mayor número de veces que debe aparecer una letra determinada para que la contraseña sea válida.
            Por ejemplo, 1-3 a significa que la contraseña debe contener al menos 1 vez y como máximo 3 veces."

        - Los casos válidos e inválidos de la lista de ejemplo:

            En el ejemplo anterior, 2 contraseñas son válidas. La contraseña del medio, "cdefg", no lo es; no contiene
            instancias de "b", pero necesita al menos 1. La primera y tercera contraseñas son válidas: contienen una "a" o nueve "c",
            ambas dentro de los límites de sus respectivas políticas.
 */
