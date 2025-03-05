import { useState } from "react";
import "./App.css";

export default function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer" },
    { id: 2, name: "Jane Smith", role: "Product Manager" },
    { id: 3, name: "Alice Brown", role: "Designer" },
  ]);

  const addEmployee = () => {
    const newEmployee = {
      id: employees.length + 1,
      name: "New Employee",
      role: "Intern",
    };
    setEmployees([...employees, newEmployee]);
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="container">
      <h1>Employee Management</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} className="employee-item">
            <span>
              {employee.name} - {employee.role}
            </span>
            <button onClick={() => removeEmployee(employee.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={addEmployee} className="add-btn">
        Add Employee
      </button>
    </div>
  );
}
