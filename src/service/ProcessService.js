/* eslint-disable */

export default class ProcessService {
    getProcessSmall() {
		return fetch('data/processes-small.json').then(res => res.json()).then(d => d.data);
	}
	getProcess() {
		return fetch('data/processes.json').then(res => res.json()).then(d => d.data);
    }
    getProcessWithOrdersSmall() {
		return fetch('data/processes-orders-small.json').then(res => res.json()).then(d => d.data);
	}
}