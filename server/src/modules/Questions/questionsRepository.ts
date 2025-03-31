import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Questions = {
  id: number;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
};

class questionsRepository {
  // The C of CRUD - Create operation

  async create(questions: Omit<Questions, "id">) {
    // Execute the SQL INSERT query to add a new item to the "warriors" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO questions (question, option1, option2, option3, option4, answer) VALUES (?, ?, ?, ?, ?, ?)",
      [
        questions.question,
        questions.option1,
        questions.option2,
        questions.option3,
        questions.option4,
        questions.answer,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from questions where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the warriors
    return rows[0] as Questions;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "warriors" table
    const [rows] = await databaseClient.query<Rows>(
      "select id, question, option1, option2, option3, option4, answer from questions",
    );

    // Return the array of warriors
    return rows as Questions[];
  }

  async update(questions: Questions) {
    const [result] = await databaseClient.query<Result>(
      "update questions set question = ?, option1 = ?, option2 = ?, option3 = ?, option4 = ?, answer = ? where id = ?",
      [
        questions.question,
        questions.option1,
        questions.option2,
        questions.option3,
        questions.option4,
        questions.answer,
        questions.id,
      ],
    );
    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from questions where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new questionsRepository();
