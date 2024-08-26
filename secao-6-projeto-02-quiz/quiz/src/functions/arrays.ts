export function embaralhar(array: any[]): any[] {
    return array
        .map(elemento => ({ elemento, aleatorio: Math.random() }))  // Transformando cada elemento do array em um objeto com um atributo que recebe um valor aleatório.
        .sort((el1, el2) => el1.aleatorio - el2.aleatorio)          // Utilizando o valor aleatório para reordenar o array.
        .map(objeto => objeto.elemento)                             // Tranformando o array reordenado de volta nos elementos do array original.
}