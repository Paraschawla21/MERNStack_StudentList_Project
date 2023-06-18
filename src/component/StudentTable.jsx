import { useEffect, useState } from "react";
import axios from "axios";
import StudentTableRow from "./StudentTableRow";

function StudentTable() {
    const [resData, setResData] = useState([]);
    useEffect(() => {
        const url = "http://localhost:4500/student/";
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) {
                    setResData(res.data);
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    }, []);

    const dataTable = () => {
        return resData.map((val, ind) => {
            return <StudentTableRow obj={val} key={ind} />;
        });
    };
    return (
        <div>
            <table
                border={2}
                cellSpacing={10}
                cellPadding={10}
                className="mx-auto table-dark bg-warning table-bordered table-hover table-striped my-4"
            >
                <tr className="bg-success">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rollno</th>
                    <th>Action</th>
                </tr>
                {/* <tr>{console.log("Respose Data = ", resData)}</tr> */}
                {/* <tr>
                    <td>{resData[0].name}</td>
                    <td>{resData[0].email}</td>
                    <td>{resData[0].rollno}</td>
                </tr> */}
                <tbody>{dataTable()}</tbody>
            </table>
        </div>
    );
}

export default StudentTable;
