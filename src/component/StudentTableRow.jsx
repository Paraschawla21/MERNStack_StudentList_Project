import axios from "axios";

function StudentTableRow(props) {
    const { _id, name, email, rollno } = props.obj;

    const handleDelete = () => {
        // alert("Deleting Record");
        const url = "http://localhost:4500/student/delete-student/" + _id;
        axios
            .delete(url)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record Deleted Successfully!");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <a
                    href={`./edit-student/${_id}`}
                    className="btn btn-sm btn-success m-1"
                >
                    Edit
                </a>
                <button
                    onClick={handleDelete}
                    className="btn btn-sm btn-danger m-1"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default StudentTableRow;
