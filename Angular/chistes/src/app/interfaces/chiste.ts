export interface Chiste {
    type: 'single' | 'twopart'; // Chiste en una o dos partes
    joke?: string;              // Chiste completo (solo si type es 'single')
    setup?: string;             // Primera parte del chiste (si type es 'twopart')
    delivery?: string;          // Remate del chiste (si type es 'twopart')
    category: string;           // Categoría del chiste
    lang: string;               // Idioma del chiste
  }
  