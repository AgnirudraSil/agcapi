//@ts-nocheck

const generateSum = (type) => {
    const sum = [];
    if (type === 0) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                sum.push(Math.floor(Math.random() * (100 - 10)) + 10);
                continue;
            }
            sum.push(
                Math.floor(Math.random() * 10) > 5
                    ? Math.floor(Math.random() * (100 - 10)) + 10
                    : -(Math.floor(Math.random() * (sum[i - 1] + 1 - 10)) + 10)
            );
        }
    } else if (type === 1) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                sum.push(Math.floor(Math.random() * (100 - 10)) + 10);
                continue;
            } else if (i === 1) {
                sum.push(Math.floor(Math.random() * (1000 - 100)) + 100);
            } else if (i === 2) {
                sum.push(
                    Math.floor(Math.random() * 10) > 5
                        ? Math.floor(Math.random() * (100 - 10)) + 10
                        : -(Math.floor(Math.random() * (100 - 10)) + 10)
                );
            }
        }
    } else if (type === 2) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                sum.push(Math.floor(Math.random() * (1000 - 100)) + 100);
                continue;
            } else if (i === 1) {
                sum.push(
                    Math.floor(Math.random() * 10) > 5
                        ? Math.floor(Math.random() * (1000 - 100)) + 100
                        : -(Math.floor(Math.random() * (sum[i - 1] + 1 - 100)) + 100)
                );
            } else if (i === 2) {
                sum.push(
                    Math.floor(Math.random() * 10) > 5
                        ? (Math.floor(Math.random() * (100 - 10)) + 10)
                        : -(Math.floor(Math.random() * (100 - 10)) + 10)
                );
            }
        }
    } else if (type === 3) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                sum.push(Math.floor(Math.random() * (1000 - 100)) + 100);
                continue;
            }
            sum.push(
                Math.floor(Math.random() * 10) > 5
                    ? Math.floor(Math.random() * (1000 - 100)) + 100
                    : -(Math.floor(Math.random() * (sum[i - 1] + 1 - 100)) + 100)
            );
        }
    }
    return sum
};

const generateMul = () => [Math.floor(Math.random() * (100 - 10)) + 10, Math.floor(Math.random() * (10 - 2)) + 2]

const answerSum = sum => sum.reduce((a, b) => a + b, 0)
const answerMul = sum => sum.reduce((a, b) => a * b)

const options = answer => {
    const index = Math.floor(Math.random() * 4)
    const options = []
    if (answer >= 40) {
        for (let i = 0; i < 4; i++) {
            options.push({ option: answer + (i - index) * 10, isCorrect: i === index })
        }
    } else {
        for (let i = 0; i < 4; i++) {
            options.push({ option: answer + (i - index), isCorrect: i === index })
        }
    }
    return options
}

exports.generateJSONClass4 = () => {
    const json = {
        sums: [],
        options: []
    }
    for (let i = 1; i <= 100; i++) {
        let _sums, _answer, _options
        if (i <= 5) {
            _sums = generateSum(0)
            _answer = answerSum(_sums)
            _options = options(_answer)
        } else if (i > 5 && i <= 20) {
            _sums = generateSum(1)
            _answer = answerSum(_sums)
            _options = options(_answer)
        } else if (i > 20 && i <= 35) {
            _sums = generateSum(2)
            _answer = answerSum(_sums)
            _options = options(_answer)
        } else if (i > 35 && i <= 50) {
            _sums = generateSum(3)
            _answer = answerSum(_sums)
            _options = options(_answer)
        } else {
            _sums = generateMul()
            _answer = answerMul(_sums)
            _options = options(_answer)
            _sums.splice(1, 0, 'X')
        }
        json.sums.push(_sums)
        json.options.push(_options)
    }
    return json
}
