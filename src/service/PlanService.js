
export default class PlanService {

    getPlansSmall() {
		return fetch('/data/plans-small.json').then(res => res.json()).then(d => d.data);
	}

	// getLaws() {
	// 	return fetch('demo/data/laws.json').then(res => res.json()).then(d => d.data);
    // }

    // getLawWithOrderSmall() {s
	// 	return fetch('demo/data/laws-orders-small.json').then(res => res.json()).then(d => d.data);
	// }
}