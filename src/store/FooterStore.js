/**
 * Created by jphet on 30/04/2017.
 */
import EventEmitter from "events";

class FooterStore extends EventEmitter {
    constructor() {
        super();
        this.mail     = "jphetr@gmail.com";
        this.linkedin = "https://www.linkedin.com/in/jean-philippe-etrillard-684545a3/";
    }

    getMail() {
        return this.mail;
    }

    getLinkedIn() {
        return this.linkedin;
    }
}
const footerStore = new FooterStore();

export default footerStore;