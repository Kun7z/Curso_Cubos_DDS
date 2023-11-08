const palavra="Guilherme"

let vogais=0  //número de vogais

for (const letra of palavra) {
    if(letra==="a"){vogais+=1    }
    if(letra==="e"){vogais+=1    }
    if(letra==="i"){vogais+=1    }
    if(letra==="o"){vogais+=1    }
    if(letra==="u"){vogais+=1    }
    if(letra==="A"){vogais+=1    }
    if(letra==="E"){vogais+=1    }
    if(letra==="I"){vogais+=1    }
    if(letra==="O"){vogais+=1    }
    if(letra==="U"){vogais+=1    }
}
console.log(vogais)