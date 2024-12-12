interface Sprites {
    front_default: string | null;
    back_default: string | null;
}

interface Cries {
    latest: string;
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
    }
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string;
    sprites: Sprites;
    cries: Cries;
    types: PokemonType[];
}
