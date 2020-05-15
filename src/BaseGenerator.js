'use strict';

const fs = require("fs");
const PATH_PUBLIC_PROJECTS = "./src/";

class BaseGenerator {

    constructor(template_name, project) {
        this.template_name = template_name;
        this.project = project;
    }

    get_template() {
        return fs.readFileSync(PATH_PUBLIC_PROJECTS + this.project + '/Templates/' + this.template_name).toString('utf8');
    }

    generate_file(_path, _folder, data) {
        fs.mkdir(_folder, { recursive: true }, (err) => {
            if (err) throw err;
            console.log('The folder ' + _folder + ' Created!');
            fs.writeFile(_folder + _path, data, function(err) {
                if (err) return console.log(err);
                console.log('The file ' + _path + ' Created!');
            });
        });
    }


}

module.exports = BaseGenerator;