const Tests = require('./schema/testschema');

const testOperations = {
    savedata(obj, res) {
        var obj = new Tests(obj);
        obj.save((err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send('Successfully saved');
            }
        })
    },

    showdata(res) {
        Tests.find({}, (err, docs) => {
            if (err) {
                res.send('error');
            }
            else {
                if (docs && docs.length > 0) {
                    res.json(docs);
                }
            }
        })
    },

    updateit(id, obj, res) {
        //{ name: obj.name, rollno: obj.rollno}

        Tests.findByIdAndUpdate(id, {
            quesno: obj.quesno,
            question: obj.question,
            options: [{ answer: obj.options[0].answer },
            { answer: obj.options[1].answer },
            { answer: obj.options[2].answer },
            { answer: obj.options[3].answer }
            ],
            selected: obj.selected,
            correct: obj.correct
        }, (err) => {
            if (err) {
                res.send("err");
            }
            else {
                res.send('updated');
            }
        }
        )
    },

    deleteit(id, res) {
        Tests.findByIdAndRemove(id, (err) => {
            if (err) {
                res.send('error');
            }
            else {
                res.send("deleted");
            }
        });
    }
}
module.exports = Tests;