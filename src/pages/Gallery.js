import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import staff from "../staff.json";
import EmployeeCard from "../components/EmployeeCard"

function Gallery() {

  const [staffInfo, setStaffInfo] = useState({
    staff: staff
  })
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  const handleSelect = event => {
    if (event.target.value === "All" || event.target.value === "View by Department") {
      setStaffInfo({ ...staffInfo, staff: staff });
    }
    else {
      const deptStaff = staff.filter(employee => employee.department === event.target.value);
      setStaffInfo({ ...staffInfo, staff: deptStaff });
    }
  }

  return (
    <Wrapper>
    <div>
        <h1 className="text-center">Staff Directory</h1>
        <div className="row">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleSelect}
          >
            <option defaultValue>View by Department</option>
            <option value="All">All</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Sales">Sales</option>
            <option value="Legal">Legal</option>
            <option value="Services">Services</option>
          </select>
        </div>

        <div className="row">
          {staffInfo.staff.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              // image={employee.image}
              role={employee.role}
              department={employee.department}
            />
          ))}
        </div>
    </div>
    </Wrapper>
  );

}

export default Gallery;
