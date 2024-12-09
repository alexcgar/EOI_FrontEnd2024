export interface Pelicula {
    adult: boolean;            // Indica si la película es solo para adultos
    backdrop_path: string;     // URL de la imagen de fondo
    genre_ids: number[];       // IDs de los géneros de la película
    id: number;                // ID único de la película
    original_language: string; // Idioma original
    original_title: string;    // Título original de la película
    overview: string;          // Sinopsis o descripción de la película
    popularity: number;        // Índice de popularidad
    poster_path: string;       // URL del póster de la película
    release_date: string;      // Fecha de lanzamiento
    title: string;             // Título de la película
    video: boolean;            // Indica si es un vídeo
    vote_average: number;      // Promedio de votos
    vote_count: number;        // Número total de votos
}
  
export interface PeliculasResponse {
    page: number;          // Número de la página actual
    results: Pelicula[];   // Array de películas
    total_pages: number;   // Total de páginas disponibles
    total_results: number; // Total de resultados
}
  