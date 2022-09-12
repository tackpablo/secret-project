export function getUserByID(id, allUsers) {
    const arraySingleUser = allUsers.filter((user) => user.id === Number(id));
    return arraySingleUser[0];
}
