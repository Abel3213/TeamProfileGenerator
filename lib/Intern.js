const Employee = require('./Employee')

const Intern extends Employee {
    constructor(school = '') {
        super(name, id, email)
    }
getSchool() {
    return this.school;
}

getRole() {
    return 'Intern';
}

}

module.exports = Intern;