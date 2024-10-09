const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();

const addLike = (req, res) => {
    const {liked_book_id} = req.params;
    const {user_id} = req.body;

    let sql = "INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)";
    let values = [user_id, liked_book_id];
    conn.query(sql, values,
        (err, results) => {
        if(err) {
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    })
};

const removeLike = (req, res) => {
    const {liked_book_id} = req.params;
    const {user_id} = req.body;

    let sql = "DELETE FROM likes WHERE user_id =? AND liked_book_id = ?";
    let values = [user_id, id];
    conn.query(sql, values,
        (err, results) => {
        if(err) {
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        return res.status(StatusCodes.OK).json(results);
    })
};

module.exports = {
    addLike,
    removeLike
}