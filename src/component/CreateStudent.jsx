import { useState } from "react";
import StudentForm from "./StudentForm";
import axios from "axios";

function CreateStudent() {
    const [data, setData] = useState([]);

    // whenever const is used it should be a arrow function
    const getState = (childData) => {
        // callback function having one parameter
        setData(childData);
    };

    const handleSubmit = () => {
        const url = "http://localhost:4500/student/create-student";
        const obj = { name: data[0], email: data[1], rollno: data[2] };
        axios
            .post(url, obj)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student data is created");
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <StudentForm
                    btnName="Create Student"
                    getState={getState}
                    nameValue=""
                    emailValue=""
                    rollnoValue=""
                />
            </form>
        </div>
    );
}

export default CreateStudent;
