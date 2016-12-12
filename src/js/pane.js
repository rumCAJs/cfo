import LocalPath from "path/local.js";
import List from "list.js";
import Tabs from "tabs.js";
import * as pubsub from "util/pubsub.js";

const PARENT = document.querySelector("section");

export default class Pane {
	constructor() {
		this._lists = [];
		this._tabs = new Tabs();

		PARENT.appendChild(this._tabs.getList());
		PARENT.appendChild(this._tabs.getNode());

		pubsub.subscribe("tab-change", this);

		let p = new LocalPath("/home/ondras/");
		this._addList(p);

		this._addList(p);

	}

	handleMessage(message, publisher, data) {
		switch (message) {
			case "tab-change":
				if (publisher != this._tabs) { return; }
				if (data.oldIndex > -1) { this._lists[data.oldIndex].blur(); }
				if (data.newIndex > -1) { this._lists[data.newIndex].focus(); }
			break;
		}
	}

	_addList(path) {
		let list = new List();
		this._lists.push(list);
		this._tabs.add(list.getNode());

		this._tabs.selectedIndex = this._lists.length-1;

		list.setPath(path); 
	}
}
