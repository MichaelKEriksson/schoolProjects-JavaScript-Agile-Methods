import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
    const [employess, setEmployess] = useState([
        {
            name: "Yazeen Jasim",
            email: "test@mail.com",
            phone: "0700000000",
            skills: "React, Javascript, C++, Java, Python, GCP",
            avatar: "https://i.imgur.com/t9HFQvX.png",
        },
        {
            name: "Geralt of Rivia",
            email: "test@mail.com",
            phone: "0700000000",
            skills: "Angular, CSS, HTML, Javascript",
            avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
        {
            name: "Yennefer Of Vengerberg",
            email: "test@hotmail.com",
            phone: "0700000000",
            skills: "Go, python, Nodejs",
            avatar: "https://i.imgur.com/ebHfuth.png",
        },
    ]);

    function handleAddNewEmp() {
        setEmployess((prevState) => {
            return [
                ...prevState,
                {
                    name: "Triss Merigold",
                    email: "yazeenj@outlook.com",
                    phone: "0700000000",
                    skills: "Vue, firebase, git, c#",
                    avatar: "https://i.imgur.com/TUhCrsY.png",
                },
            ];
        });
    }
    return (
        <div>
            <h3>EmployeeList</h3>
            <button onClick={handleAddNewEmp}>Add Employee</button>
            {employess.map((employess) => (
                <Employee EmployeeData={employess} />
            ))}
        </div>
    );
}
export default EmployeeList;
