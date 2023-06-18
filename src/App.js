import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/Nav";
import CreateStudent from "./component/CreateStudent";
import StudentTable from "./component/StudentTable";
import UpdateStudent from "./component/UpdateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<CreateStudent />} />{" "}
                    <Route path="/create-student" element={<CreateStudent />} />{" "}
                    <Route path="/student-list" element={<StudentTable />} />{" "}
                    <Route
                        path="/edit-student/:id"
                        element={<UpdateStudent />}
                    />{" "}
                </Routes>{" "}
            </BrowserRouter>{" "}
        </div>
    );
}

export default App;
