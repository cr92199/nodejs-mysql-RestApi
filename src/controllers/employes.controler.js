//import db employes
import { pool } from "../db/db.js";

export const getEnploye = async (req, res) => {
  try {
    //creo un error para probar el try-catch
    //throw new Error("my error");
    const [rows] = await pool.query(`SELECT * FROM employee`);
    res.status(200).send({ message: "Success list employee", rows });
  } catch (error) {
    return res.status(500).send({
      message: "Something goes wrong",
    });
  }
};

export const getEmployOne = async (req, res) => {
  const { id } = req.params;
  //console.log(id);
  try {
    const [rows] = await pool.query(
      `SELECT * FROM employee where id_employee = ?;`,
      [id]
    );

    if (rows.length <= 0)
      return res.status(404).send({ message: `Employee not found id: ${id}` });

    res.status(200).send({
      message: "success employee One",
      result: [rows],
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something goes wrong",
    });
  }
};

export const postEmolye = async (req, res) => {
  //console.log(req.body);
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (? , ?)",
      [name, salary]
    );

    res.status(201).send({
      message: "Success created employee",
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something goes wrong",
    });
  }
};

export const deleteEmploye = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const [result] = await pool.query(
      `delete from employee where id_employee = ?`,
      [id]
    );
    //console.log(result);

    if (result.affectedRows <= 0) {
      return res.status(404).send({
        message: `Employee not found id: ${id}`,
      });
    }
    res.status(200).send({
      message: "Delete success employe",
    });
  } catch (error) {
    return res.status(500).send({
      message: "something went wrong",
    });
  }
};

export const putEmploye = async (req, res) => {
  const { name, salary } = req.body;
  //console.log(name, salary);
  const { id } = req.params;
  //console.log(id);
  try {
    const [result] = await pool.query(
      `UPDATE employee set name = ?, salary = ? where id_employee = ?;`,
      [name, salary, id]
    );
    //console.log(result);
    if (result.affectedRows <= 0) {
      return res.status(404).send({
        message: `Employee not found id: ${id}`,
      });
    }

    const [rows] = await pool.query(
      `SELECT * FROM employee WHERE id_employee = ${id}`,
      [id]
    );

    res.status(200).send({
      message: "Update success employe",
      result: rows,
    });
  } catch (error) {
    return res.status(500).send({
      message: "something went wrong",
    });
  }
};

export const patchEmploye = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      `UPDATE employee set name = IFNULL(?, name), salary = IFNULL(?, salary) where id_employee = ?;`,
      [name, salary, id]
    );
    if (result.affectedRows <= 0) {
      res.status(404).send({
        message: `Employee not found id: ${id}`,
      });
    }

    const [rows] = await pool.query(
      `SELECT * FROM employee WHERE id_employee = ?`,
      [id]
    );

    res.status(200).send({
      message: `Employee updated successfully patch`,
      result: rows,
    });
  } catch (error) {
    return res.status(500).send({
      message: "something went wrong",
    });
  }
};
