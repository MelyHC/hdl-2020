import React from 'react';

const Board = () => {
  return (
    <table id="table-users" class="control-scroll">
      <thead class="control-scroll">
        <tr>
          <th> Nombres </th>
          <th type="numeric"> General % </th>
          <th type="numeric"> Ejercicios % </th>
          <th type="numeric"> Quiz % </th>
          <th type="numeric"> Score Quiz </th>
          <th type="numeric"> Promedio Quiz </th>
          <th type="numeric"> Lecturas % </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>percent</td>
          <td>exercises.percent</td>
          <td>quizzes.percent</td>
          <td>quizzes.scoreSum</td>
          <td>quizzes.scoreAvg</td>
          <td>reads.percent</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Board;