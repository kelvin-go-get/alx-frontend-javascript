export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.keys(report.allEmployees);

  function* iterator() {
    while (currentDepartmentIndex < departments.length) {
      const currentDepartment = departments[currentDepartmentIndex];
      const employees = report.allEmployees[currentDepartment];

      if (currentEmployeeIndex < employees.length) {
        yield employees[currentEmployeeIndex++];
      } else {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      }
    }
  }

  return {
    [Symbol.iterator]: iterator,
  };
}
