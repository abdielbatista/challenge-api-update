/*class EncryptRepository {
    constructor() {}

    create(value) {

        const text = "INSERT INTO data(name) VALUES($1) RETURNING *";
        const values = [value["content"]];

        
        pg.query(text, values, (err, res) => {

          if (err) {
            console.log(err.stack);
            return {
                status: false                
            }
          }

          return {
              status: true,
              data: res
          }
        });
    }

    search(_id) {
        const query = {
            name: "create",
            text: "SELECT id FROM data WHERE name = $1",
            values: [c['content']],
        };

        // callback
        pg.query(query, (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log(res.rows[0]);
            }
        });
    }
}

module.exports = new EncryptRepository();*/