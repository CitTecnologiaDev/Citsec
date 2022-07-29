
export default class RiskService {

    getRisksSmall() {
		return fetch('/data/risks-small.json').then(res => res.json()).then(d => d.data);
	}

	// getLaws() {
	// 	return fetch('demo/data/laws.json').then(res => res.json()).then(d => d.data);
    // }

    // getLawWithOrderSmall() {s
	// 	return fetch('demo/data/laws-orders-small.json').then(res => res.json()).then(d => d.data);
	// }
}