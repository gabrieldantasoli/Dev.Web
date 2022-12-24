// start objetos literais
const Carro = {
    marca: "VW",
    modelo: "gol",
    ano: 2002,
    cor: "vermelho",

    info: function() {
        console.log("------------------");
        console.log(`MARCA ${this.marca}`);
        console.log(`MODELO : ${this.modelo}`);
        console.log(`COR: ${this.cor} , ANO: ${this.ano}`);
        console.log("------------------");
    },

    getMarca: function() {
        return this.marca;
    },

    setMarca: function(marca = "none") {
        this.marca = marca;
    }

}

const carac = {
    ma: 12,
    ca: 13,
}


/*delete carac.ca
let caminhao = Object.assign(Carro,carac);
let caminhao2 = Object.assign(Carro,carac);
caminhao.setMarca("gdo")
caminhao2.setMarca("Oi")

console.log(caminhao)
console.log(caminhao2)*/

// end objetos literais

// oo starts

class Industry {
    static alert = false
    constructor(name = "None",capacity = 100,power = 0,engine = 50) {
        this.name = name;
        this.capacity = capacity;
        this.power = power;
        this.engine = engine;
        this.working = false;
        console.log(`Initializing ==> ${name}`);
    }

    info() {
        console.log("----------------");
        console.log(`Industry : ${this.name}`)
        console.log("----------------");
        console.log(`CAPACITY: ${this.capacity} <--> POWER : ${this.power} <--> ENGINE : ${this.engine}`)
        console.log(`WORKING : ${this.working}`)
        console.log(`ALERT : ${Industry.alert}`);
        console.log("----------------");
        console.log()
    }

    setCapacity(capacity) {
        this.capacity = capacity;
    }

    changeWorking() {
        this.working == true ? this.working = false : this.working = true;
    }
}



/*let id1 = new Industry("A1",100,50,40);
id1.setCapacity(0);
id1.changeWorking();
id1.info();
Industry.alert = true;

let id2 = new Industry("A2",90,35,20);
id2.info();

let id3 = new Industry("A3",10,10,10);
id3.info();

let id4 = new Industry("A4",0,0,0);
id4.info();*/

// heranca

class Car {
    constructor(tpm) { 
        this.type = "generic";
        this.blind = 0;
        this.tpm = tpm
    }

    info() {
        console.log(`Type: ${this.type}`);
        console.log(`Blind: ${this.blind}`);
    }

    get x() {
        return 1
    }

    set x(i) {
        this.tpm = i
    }
}

class CombatCar extends Car {
    constructor() {
        super(2);
    }

    info(){
        super.info()
        console.log(`TMP: ${this.tpm}`);
    }
}

let c1 = new Car(1);
c1.info()

let cc1 = new CombatCar();
cc1.x
cc1.x = 1
cc1.info();