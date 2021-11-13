import {DomListener} from "./DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options={}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    // Повертає шаблон компонента
    toHTML() {
        return ''
    }
    init() {
        this.initDOMListerners()
    }
    destroy() {
        this.removeDOMListerners()
    }

}