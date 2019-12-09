const db = require("../../db");

const getTodosController = (req, res) => {
    db.collection("todos")
        .get()
        .then(snapshot => {
            res.json({
                data: snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    };
                })
            });
        })
        .catch(error => {
            console.log('error', error)
            res.json({ error });
        });

};

const postTodosController = (req, res) => {
    db.collection("todos")
    .add({
       ...req.body
    })
    .then(docRef => {
        res.status(201)
            .json({
                id: docRef.id,
                message: "Todo successfully created"
            });
    })
    .catch(error => {
        res.json({ error });
    });
};

module.exports = {
    getTodosController,
    postTodosController
}
