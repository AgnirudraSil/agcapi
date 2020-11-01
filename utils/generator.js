const generateSums = () => {
    const sum = []
    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            sum.push(Math.floor(Math.random() * 100))
            continue
        }
        sum.push(Math.floor(Math.random() * (100 + sum[i-1]) - sum[i-1]))
    }
    return sum
}

const answer = sum => {
    return sum.reduce((a, b) => a + b, 0)
}

const options = answer => {
    const options = []
    if (answer < 20) {
        const index = Math.floor(Math.random() * 5)
        for (let i = 1; i <= 4; i++) {
            options.push({option: answer - (i - index), isCorrect: i === index ? true : false})
        }
    } else {
        const index = Math.floor(Math.random() * 5)
        for (let i = 1; i <= 4; i++) {
            options.push({option: answer - (i * 10 - index * 10), isCorrect: i === index ? true : false})
        }
    }
    return options
}

exports.generateJSON = () => {
    const json = {
        sums: [],
        options: []
    }
    for (let i = 0; i < 10; i++) {
        const _sum = generateSums()
        const _answer = answer(_sum)
        const _options = options(_answer)
        json.sums.push(_sum)
        json.options.push(_options)
    }
    return json
}
