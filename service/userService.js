const getAllUsers = (students) => {
    return students;
};

const addUser = (students, newUser) => {
    students.push(newUser);
    return students;
};

const deleteUser = (students, id) => {
    return students.filter(user => user.id !== parseInt(id));
};

module.exports = {
    getAllUsers,
    addUser,
    deleteUser
};