
export function formatText(data: string, colwidths: number[]): string {
    const coluns = data.split('\t')
    let formatedText = ''

    for (let index in coluns ) {
        const data = coluns[index]
        const width = Math.abs(colwidths[index])
        if (colwidths[index] <0)
        formatedText += data.padEnd(width,'-')
                            ? data.padEnd(width)
                            : data.padStart(width)
    }
    
    return formatedText
}
