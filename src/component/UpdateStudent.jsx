import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateStudent() {
    const [obj, setObj] = useState({}); // _id, name, email, rollno
    const { id } = useParams();
    // alert(id);
    const [updatedData, setUpdatedData] = useState([]);

    const getState = (childData) => {
        setUpdatedData(childData);
    };

    const handleSubmit = () => {
        const url = "http://localhost:4500/student/update-student/" + id;
        const updatedObj = {
            name: updatedData[0],
            email: updatedData[1],
            rollno: updatedData[2],
        };
        axios
            .put(url, updatedObj)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record Updated Successfully");
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => {
        const url = "http://localhost:4500/student/update-student/" + id;
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res);
                    setObj(res.data);
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                alert(err);
            });
    }, [id]);
    return (
        <div>
            <h1 className="text-center">Edit Student Details</h1>
            <form onSubmit={handleSubmit}>
                <StudentForm
                    nameValue={obj.name}
                    emailValue={obj.email}
                    rollnoValue={obj.rollno}
                    btnName="Update Student"
                    getState={getState}
                />
            </form>
        </div>
    );
}

export default UpdateStudent;
