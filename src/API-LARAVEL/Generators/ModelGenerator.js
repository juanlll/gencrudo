'use strict';

const BaseGenerator = require('../../BaseGenerator');

class ModelGenerator extends BaseGenerator {

    constructor(project = '', file_name = '', table = '') {
        super('model.stub', project);
        this.template = 'dd';
        this.fileName = file_name;
        this.table = table;
        this.template = this.get_template();
    }

    generate() {
        this.fillTemplate('App\\Models', '', '', '', '');
        this.generate_file('User.php', 'Project5/Models/', this.template);
    }

    fillTemplate(namespace_model = '', namespace_model_extend = '', soft_delete_import = '', docs = '', model_name = '') {
        this.template = this.template.replace('$NAMESPACE_MODEL$', namespace_model);
        this.template = this.template.replace('$NAMESPACE_MODEL_EXTEND$', namespace_model_extend);
        this.template = this.template.replace('$SOFT_DELETE_IMPORT$', soft_delete_import);
        this.template = this.template.replace('$DOCS$', docs);
        this.template = this.template.replace('$MODEL_NAME$', model_name);
    }

    fillSoftDeletes() {
        //return this.edad;
    }

    fillDocs() {

    }

    generateCasts() {

    }

    generateRules() {

    }

    generateRelations() {

    }


}
module.exports = ModelGenerator;