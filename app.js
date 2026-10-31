let employees = [
    {employeeCode: "EMP-001", fullName: "Ngô Thanh Tùng", department: "Phòng Kỹ Thuật", age: 28, experienceYears: 5},
    {employeeCode: "EMP-002", fullName: "Hồ Thị Thu", department: "Phòng Nhân Sự", age: 35, experienceYears: 10},
    {employeeCode: "EMP-003", fullName: "Mai Quốc Việt", department: "Phòng Kỹ Thuật", age: 24, experienceYears: 1}
]

function displayEmployees(employees) {
    if(employees.length === 0){
        console.log("Danh sách rỗng!")
    }

    for(let i = 0; i < employees.length; i++){
        console.log(`${i + 1}. ${employees[i].employeeCode} - ${employees[i].fullName} - ${employees[i].department},
   Tuổi: ${employees[i].age} | Số năm kinh nghiệm: ${employees[i].experienceYears}`)
    }
}

function addEmployee(){
    let id = prompt("Nhập id:")
    let fullName = prompt("Nhập tên:")
    let department = prompt("Nhập phòng ban:")
    let age = Number(prompt("Nhập tuổi:"))
    let experienceYears = Number(prompt("Nhập số năm kinh nghiệm:"))

    let employee = {
        "employeeCode": id,
        "fullName": fullName,
        "department": department,
        "age": age,
        "experienceYears": experienceYears
    }
    employees.push(employee)
    console.log("Thêm thành công!")
}

function updateEmployee(){
    let id = prompt("Nhập id cần sửa:")

    let index = findIndex(s => s.id === id)

    if(index === -1){
        employees.age = prompt("Nhập tuổi mới:")
        employees.experienceYears = prompt("Nhập số năm kinh nghiệm mới:")
    }

    console.log("Cập nhật thành công!")
}

function deleteEmployee(){
    let id = prompt("Nhập id cần xóa:")

    let index = findIndex(s => s.id === id)

    if(index === -1){
        employees.splice(index, 1)
    }

    console.log("Xóa thành công!")
}

function findEmployee(){}

do {
    let choice
    console.log("==================================================")
    console.log(" HỆ THỐNG QUẢN LÝ NHÂN VIÊN CÔNG TY SKYTECH")
    console.log("==================================================")
    console.log("1. Hiển thị danh sách nhân viên")
    console.log("2. Thêm nhân viên mới")
    console.log("3. Cập nhật thông tin nhân viên")
    console.log("4. Xóa nhân viên")
    console.log("5. Tìm kiếm nhân viên theo phòng ban")
    console.log("0. Thoát chương trình")
    console.log("==================================================")
    choice = prompt("Nhập lựa chọn của bạn (0-5):")
        switch (choice) {
        case 1:
            displayEmployees(employees)
            break
        case 2:
            addEmployee()
            break
        case 3:
            updateEmployee()
            break
        case 4:
            deleteEmployee()
            break
        case 5:
            findEmployee()
            break
        case 0:
            console.log("Thoát chương trình. Chào tạm biệt!")
            break
        default:
            console.log("Lựa chọn không hợp lệ!")
    }
}while(choice === 0)