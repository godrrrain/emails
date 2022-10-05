const Pool = require('pg').Pool
const pool = new Pool({
  user: 'main_dev',
  host: 'localhost',
  database: 'moovy',
  password: '2001',
  port: 5432,
});

const getEmails = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM emails ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
}
const addEmail = (body) => {
    return new Promise(function(resolve, reject) {
      const { email } = body
      pool.query('INSERT INTO emails (email) VALUES ($1)', [email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Subscribed: ${results.rows[0]}`)
      })
    })
}

module.exports = {
    getEmails,
    addEmail,
  }