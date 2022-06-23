export default class DpoService {

    // getDpoSmall() {
    //     return fetch('demo/data/customers-small.json').then(res => res.json())
    //             .then(d => d.data);
    // }

    getDpoMedium() {
        return fetch('data/dpo-medium.json').then(res => res.json())
                .then(d => d.data);
    }

    // getDpoLarge() {
    //     return fetch('demo/data/customers-large.json').then(res => res.json())
    //             .then(d => d.data);
    // }

    // getDpoXLarge() {
    //     return fetch('demo/data/customers-xlarge.json').then(res => res.json())
    //             .then(d => d.data);
    // }

    // getDpo(params) {
    //     const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
    //     return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    // }
}