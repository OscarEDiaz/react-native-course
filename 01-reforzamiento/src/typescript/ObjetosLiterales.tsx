interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Oscar',
        edad: 21,
        direccion: {
            pais: 'MX',
            casaNo: 10
        }
    }


    return (
        <>
            <h3>Literal Objects</h3>
            <code>
                <pre>
                    { JSON.stringify(persona) }
                </pre>
            </code>
        </>
    )
}