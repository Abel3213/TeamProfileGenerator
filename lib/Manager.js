const Employee = require('./Employee')

const Manager extends Employee {
    constructor(officeNumber = '') {
        super(name, id, email)
    }
getRole() {
    return 'Manager';
}

}

module.exports = Manager;