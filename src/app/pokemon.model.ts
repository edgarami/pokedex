export interface Pokemon {
   id: string
   image:string
   name: string,
   level: number,
   type: string
   abilities: string
   evolutions: string

}
export interface PokemonResponse {
   pokemons: Pokemon[];
}