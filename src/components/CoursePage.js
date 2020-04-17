import React from 'react';

class CoursePage extends React.Component {
render () {
    return (
        <div>
        <h1>List of students</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>    </th>
                    <th>contact via email</th>
                </tr>
                <tr>
                    <td>Akhil Kumar</td>
                    <td>2nd</td>
                    <td>Details</td>
                    <td><a href="#">contact</a></td>
                </tr>
                <tr>
                    <td>Kishan Kumar</td>
                    <td>2nd</td>
                    <td>Details</td>
                    <td><a href="#">contact</a></td>
                </tr>
                <tr>
                    <td>Sameer Sinha</td>
                    <td>2nd</td>
                    <td>Details</td>
                    <td><a href="#">contact</a></td>
                </tr>
                <tr>
                    <td>Akash Jaisawal</td>
                    <td>2nd</td>
                    <td>Details</td>
                    <td><a href="#">contact</a></td>
                </tr>
                <tr>
                    <td>Kumar Ankur</td>
                    <td>2nd</td>
                    <td>Details</td>
                    <td><a href="#">contact</a></td>
                </tr>
            </table>
        </div>
    );
  }
}

export default CoursePage;