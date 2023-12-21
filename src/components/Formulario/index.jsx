import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, SetMateriaA] = useState(0);
    const [materiaB, SetMateriaB] = useState(0);
    const [materiaC, SetMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    useEffect(() => {
        console.log("O componente iniciou");
        
        return () => {
            console.log("O componente finalizou")
        } 
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome]);

    useEffect(() =>{
        console.log("materia A mudou para:" + materiaA)
    }, [materiaA, materiaB, materiaC]);


    const alteraNome = (evento) => {
        
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            

            return evento.target.value;
        })
    }
    
    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;
        
        if (media >= 7 ) {
            return(
                <p>Olá {nome}, você foi aprovado</p>
            )
        }else{
            return(
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return(
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}

            </ul>

            <input type="text" placeholder="Seu nome " onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => SetMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => SetMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => SetMateriaC(parseInt(evento.target.value)) }/>
            {renderizaResultado()}
        
        </form>
    ) 
        
    
}

export default Formulario