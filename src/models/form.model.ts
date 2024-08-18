export class BaseModel {
    constructor(json?: any) {};
}

export class Properties extends BaseModel {
    id: number;
    allow_multiple_selection: boolean;
    randomize: boolean;
    allow_other_choice: boolean;
    vertical_alignemnt: boolean;
    supersized: boolean;
    show_labels: boolean;
    alphabetical: boolean;
    hide_marks: boolean;
    button_text: string;
    steps: number;
    shape: number;
    start_at_one: false;
    description: null;
    choices: null;
    labels: null;

    constructor(json?: any) {
        if (!json) {
            return;
        }

        super(json);

        this.id = json['id'];
        this.allow_multiple_selection = json['id'];
        this.randomize = json['id'];
        this.allow_other_choice = json['id'];
        this.vertical_alignemnt = json['id'];
        this.supersized = json['id'];
        this.show_labels = json['id'];
        this.alphabetical = json['id'];
        this.hide_marks = json['id'];
        this.button_text = json['id'];
        this.steps = json['steps'];
        this.shape = json['shapes'];
        this.start_at_one = json['start_at_once'];
        this.description = json['description'];
        this.choices = json['choices'];
        this.labels = json['labels'];
    }
}

export class Fields extends BaseModel {
    
    properties: Properties;
    title: string;
    ref: string;
    type: number;
    layout: any;

    order: number;
    form: number;

    constructor(json?: any) {

        if (!json) {
            return;
        }

        super(json);

        this.properties = new Properties(json['properties']);
        this.title = json['title'] ? json['title'] : this.title;
        this.ref = json['ref'] ? json['ref'] : this.ref;
        this.type = json['type'] ? json['type'] : this.type;
        this.layout = json['layout'] ? json['layout'] : this.layout;

        this.order = json['order'] ? json['order'] : this.order;
        this.form = json['form'] ? json['form'] : this.form;
    }
}

export class Condition extends BaseModel {
    id: number;
    operator: string;
    order: number;
    type: string;
    value: string;
    vars: Array<Condition>;

    constructor(json?: any) {
        if (!json) {
            return;
        }

        super(json);

        this.id = json['id'];
        this.operator =json['operator'];
        this.order = json['order'];
        this.type = json['type'];
        this.value = json['value'];

        if (json['vars']) {
            json['vars'].forEach(res => {
                this.vars.push(new Condition(res));
            })
        }
    }

}

export class Actions extends BaseModel {
    id: number;
    condition: Condition;
    order: number;
    action: string;
    details: any;


    constructor(json?: any) {
        if (!json) {
            return;
        }

        super(json);

        this.id = json['id'];
        this.condition = new Condition(json['condition']);
        this.order = json['order'];
        this.action = json['action'];
        this.details = json['details'];
    }

}

export class Logic extends BaseModel {
    id: number;
    type: string;
    ref: string;
    order: number;

    actions: Array<Actions> = [];

    constructor(json?: any) {

        if (!json) {
            return;
        }

        super(json);

        this.id = json['id'];
        this.type = json['type']
        this.ref = json['ref'];
        this.order = json['order'];

        if (json['actions']) {
            json['actions'].forEach(res => {
                this.actions.push( new Actions(res));
            })
        }
    }
}

export class Form extends BaseModel {
    id: number;
    title: string;
    organization: number;
    owner: number

    fields: Array<Fields> = [];
    logic: Array<Logic>;
    thank_you_screens: Array<any> = [];

    constructor(json?: any) {
        
        super(json);

        if (!json) {
            return;
        }

        this.id = json['id'] ? json['id'] : this.id;
        this.title = json['title'] ? json['title'] : this.title;
        this.organization = json['organization'] ? json['organization'] : this.organization;
        this.owner = json['owner'] ? json['owner'] : this.owner;
        
        if (json['fields']) {
            json['fields'].forEach(res => {
                this.fields.push( new Fields(res));
            })
        }
    }
}