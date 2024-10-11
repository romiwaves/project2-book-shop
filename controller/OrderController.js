const express = require('express');
const { StatusCodes } = require('http-status-codes');

const order = (req, res) => {
    const {items, delivery, totalQuantity, totalPrice, userId} = req.body;

    let delivery_id = 3;
    let order_id

    let sql = "INSERT INTO delivery (address, receiver, contact) VALUES (?, ?, ?)";
    let values = [delivery.address, delivery.receiver, delivery.contact];
    conn.query(sql, values,
        (err, results) => {
            if(err) {
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            delivery_id = results.insertId;

            return res.status(StatusCodes.OK).json(results);
        })
        
        items.forEach((item) => 
            values.push([order_id, item.book_id, item.quantity])

        )
};

const getOrders = (req, res) => {
    res.json('주문 목록 조회');
};

const getOrderDetail = (req, res) => {
    res.json('주문 상세 조회');
};

module.exports = {
    order,
    getOrders,
    getOrderDetail
};