import LocalPath from "path/local.js";
import List from "list.js";
import Tabs from "tabs.js";

import * as panes from "panes.js";
import * as pubsub from "util/pubsub.js";
import * as html from "util/html.js";

export default class Pane {
	constructor() {
		this._active = false;
		this._lists = [];
		this._tabs = new Tabs();
		this._node = html.node("div", {className:"pane"});

		this._node.addEventListener("click", this);

		this._node.appendChild(this._tabs.getList());
		this._node.appendChild(this._tabs.getNode());

		pubsub.subscribe("tab-change", this);

		let p = new LocalPath("/home/ondras/");
		this._addList(p);

		this._addList(p);

	}

	getNode() { return this._node; }

	activate() {
		if (this._active) { return; }
		this._active = true;
		let index = this._tabs.selectedIndex;
		if (index > -1) { this._lists[index].activate(); }
	}

	deactivate() {
		if (!this._active) { return; }
		this._active = false;
		let index = this._tabs.selectedIndex;
		if (index > -1) { this._lists[index].deactivate(); }
	}

	adjustTab(diff) {
		let index = this._tabs.selectedIndex;
		if (index > -1) { this._tabs.selectedIndex += diff; }
	}

	handleEvent(e) {
		panes.activate(this);
	}

	handleMessage(message, publisher, data) {
		switch (message) {
			case "tab-change":
				if (publisher != this._tabs) { return; }
				if (!this._active) { return; }
				if (data.oldIndex > -1) { this._lists[data.oldIndex].deactivate(); }
				if (data.newIndex > -1) { this._lists[data.newIndex].activate(); }
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

