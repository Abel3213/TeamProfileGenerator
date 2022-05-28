const Employee = require('./Employee')

const Engineer extends Employee {
    constructor(github = '') {
        super(name, id, email)
    }
getGithub() {
    return this.github;
}

getRole() {
    return 'Engineer';
}

}

module.exports = Engineer;