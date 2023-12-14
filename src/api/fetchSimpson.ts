import type { CharacterResponsio } from "~/interfaces/character.responsio";

export const fetchSimpson = async(): Promise<CharacterResponsio[]> => {

    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`;

    const responsio = await fetch(url);

    if ( !responsio.ok ) {
        throw new Error( responsio.statusText )
    }

    const data = await responsio.json() as CharacterResponsio[];
    // console.log(data[0].quote);

    return data;

}