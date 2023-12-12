const element = document.querySelector("closed");

element.animate(
    [
        {transform: "rotate(0)}"}, //começa aqui
        {transform:"rotate(360deg)"},//termina aqui 
    ],
    {
        duration: 2000,// essa animação está em millisegundos
        iterations: 1, // número de tempo de animação 
    }
);