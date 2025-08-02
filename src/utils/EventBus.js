export default class EventBus {
	static eventList = [];
	static $on(eventName, callback) {
		if (typeof callback !== "function") return;
		this.eventList.push({ eventName, callback });
	}
	static $once(eventName, callback) {
		if (typeof callback !== "function") return;
		const onceCallback = (...args) => {
			callback(...args);
			this.$off(eventName, callback);
		};
		this.eventList.push({ eventName, callback: onceCallback });
	}
	static $off(eventName, callback) {
		if (typeof callback !== "function") return;
		this.eventList = this.eventList.filter(
			(event) =>
				event.eventName !== eventName || event.callback !== callback
		);
	}
	static $emit(eventName, ...args) {
		this.eventList.forEach((event) => {
			if (event.eventName === eventName) {
				event.callback(...args);
			}
		});
	}
}

