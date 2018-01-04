function extractTrend(inputArr) {
    const uniques = []
    let inputArrString

    if (!inputArr) return []

    if (typeof inputArr === 'string') {
        inputArrString = inputArr.split('')
    } else if (typeof inputArr === 'number') {
        inputArrString = inputArr.toString().split('').map(item => (typeof item === 'number' ? item.toString() : item))
    } else if (typeof inputArr === 'object') {
        inputArrString = inputArr.map(item => (typeof item === 'number' ? item.toString() : item))
    }

    const trend = inputArrString.reduce((trendTotal, word) => {
        const reps = inputArrString.reduce((total, el) => (word === el ? total + 1 : total), 0)

        if (!uniques.includes(word)) {
            uniques.push(word)
            trendTotal.push({ word, reps })
        }
        return trendTotal
    }, []).sort((a, b) => b.reps - a.reps)

    return trend
}

export default extractTrend
