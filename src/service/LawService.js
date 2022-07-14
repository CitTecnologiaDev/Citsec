
export default class LawService {

    getLawsSmall() {
		return fetch('/data/laws-small.json').then(res => res.json()).then(d => d.data);
	}

	// getLaws() {
	// 	return fetch('demo/data/laws.json').then(res => res.json()).then(d => d.data);
    // }

    // getLawWithOrderSmall() {
	// 	return fetch('demo/data/laws-orders-small.json').then(res => res.json()).then(d => d.data);
	// }
}