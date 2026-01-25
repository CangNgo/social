interface Backend {
    producer(): string;
}

class Spring implements Backend {
    producer() {
        return "Java spring";
    }
}
class NestJS implements Backend {
    producer() {
        return "NestJS";
    }
}

class Teamlead {
    private readonly backend: Backend;
    constructor(backend: Backend) {
        this.backend = backend;
    }

    producer() {
        return this.backend.producer();
    }
}

class Company {
    start() {
        const teamlead = new Teamlead(new NestJS());
        const result = teamlead.producer();
        console.log('Kết quả:', result);
    }
}

const company = new Company();
company.start();