export interface Tab {
	id: number;
	name: string;
	type: string;
}

export interface Component extends Tab {
	source: string;
}

export interface CacheSaver {
	(key: string, value: string): void;
}
