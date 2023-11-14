//Declarando variáveis

let nomeDoHeroi = "Kratos"
let xpDoHeroi = 10001
let nivel 

//Utilizando estrutura de decisão

if (xpDoHeroi < 1000){ nivel = "Ferro";
} else if (xpDoHeroi <= 2000){ nivel = "Bronze";
} else if (xpDoHeroi <= 5000){ nivel = "Prata";
} else if (xpDoHeroi <= 7000){ nivel = "Ouro";
} else if (xpDoHeroi <= 8000){ nivel = "Platina";
} else if (xpDoHeroi <= 9000){ nivel = "Ascendente";
} else if (xpDoHeroi <= 10000){ nivel = "imortal";
} else { nivel = "Radiante";}
 
//Mensagem final

console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + nivel + ".")


