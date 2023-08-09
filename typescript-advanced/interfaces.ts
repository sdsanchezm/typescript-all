// is a kind of a contract, and each class should match the interface, properties and methods
// all of them (classes) should match the pre-defined interface
export interface Driver {
    database: string;
    password: string;
    port: number;

    // these methods are declared, but not implemented yetm they should be implemented in the classes
    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}

// in this case the methods are not defined, so it will trigger errorin the transpilation process
// const driver: Driver = {
//     database: "",
//     password: "",
//     port: 23,
// };
// driver.connect();


// implements is the keyword, is not inheritance
class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
        private host: number
    ) {}

    disconnect(): void {
        console.log('disconnected');
    }
    
    isConnected(name: string): boolean {
        console.log('connected');
        return true;
    }

    connect(): void {
        console.log('connecting...');
        
    }
}

// implements is the keyword, is not inheritance
class OracleDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number
    ) {}

    connect(): void {
        console.log('connecting...');
    }

    disconnect(): void {
        console.log('disconnected');
    }

    isConnected(name: string): boolean {
        console.log('connected');
        return true;
    }
}
