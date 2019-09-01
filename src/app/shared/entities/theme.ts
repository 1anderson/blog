import { Category } from "./category";

export class Theme {
    id: Number;
    name: String;
    Categories: Array<Category>

    constructor(id: Number, name:String) {
        this.id = id;
        this.name = name;
    }
}
