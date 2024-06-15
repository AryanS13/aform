
export class ListResult<T> {
    count: number;
    next: string;
    previous: string;

    results: Array<T>;

    constructor(json: any) {
        this.count = json['count'];
        this.count = json['count'];
        this.next = json['next'];
        this.previous = json['previous'];

        this.results = json['results'];
    }
}
