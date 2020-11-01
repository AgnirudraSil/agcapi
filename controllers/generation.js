const { generateJSONClass2 } = require('../generators/class-2')
const { generateJSONClass3 } = require('../generators/class-3')
const { generateJSONClass4 } = require('../generators/class-4')

exports.serveQP = (req, res) => {
    const grade = req.query.grade
    if (grade === '2') return res.json(generateJSONClass2())
    if (grade === '3') return res.json(generateJSONClass3())
    if (grade === '4') return res.json(generateJSONClass4())
}