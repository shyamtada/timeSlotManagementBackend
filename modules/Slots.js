exports.getSlots = function (conn) {
    return new Promise((resolve, reject) => {
        const sql = 'select * from slots';
        conn.query(sql, function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    })
}

exports.getSlotData = function (conn, param) {
    return new Promise((resolve, reject) => {
        const sql = 'select * from slots where slot = ? ';
        conn.query(sql,[param.slot] ,function (err, result) {
            if (err) return reject(err);
            return resolve(result);
        });
    })
}

exports.addSlot = function(conn, body) {
    return new Promise((resolve,reject) => {
        const sql = 'insert into slots (slot, first_name, last_name, phone) values (?, ?, ?, ?)';
        conn.query(sql,[
            body.slot,
            body.first_name,
            body.last_name,
            body.phone,
        ], function(err, result) {
            if(err) return reject(err);
            return resolve(result);
        })
    })
}

exports.updateSlot = function(conn, body, param) {
    return new Promise((resolve,reject) => {
        const sql = 'UPDATE slots SET first_name = ?, last_name = ?, phone = ? WHERE slot = ?';
        conn.query(sql,[ 
            body.first_name,
            body.last_name,
            body.phone,
            param.slot
        ], function(err, result) {
            if(err) return reject(err);
            return resolve(result);
        })
    })
}