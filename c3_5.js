class ElectroDevice {
	constructor(name, power){
		this.name = name;
		this.power = power;
		this.isPlugged = false;
	}

	// Включить устройство
	plugIn() {
		console.log("Attention! " + this.name + " is plugged!");
		this.isPlugged = true;
	}

	// Выключить устройство
	unplug() {
		console.log(this.name + " is unplugged");
		this.isPlugged = false;
	}
}

// Дрель
class Drill extends ElectroDevice {	
	constructor(name, power, brand, turn){
		super(name, power);
		this.brand = brand;
		this.turn = turn;	// обороты шпинделя дрели в минуту
		this.onRotationCW = false;	// вращение по часовой стрелке вкл
		this.onRotationCCW = false;	// вращение против часовой стрелки вкл
	}

	// Вкл вращение по часовой стрелке
	rotationCW() {
		console.log(this.name + " " + this.brand + " rotates clockwise "
		 + this.turn + " rpm");
		this.onRotationCW = true;
	}

	// Вкл вращение против часовой стрелки
	rotationCCW() {
		console.log(this.name + " " + this.brand  + " rotates counterclockwise "
		 + this.turn + " rpm");
		this.onRotationCCW = true;
	}

	// Стоп вращения
	offRotation() {
		console.log(this.name + " " + this.brand + " rotation stopped!");
		this.onRotationCW = false;
		this.onRotationCCW = false;
	}	
}

// Вентилятор
class Fan extends ElectroDevice {
	constructor(name, power, brand, type, level){
		super(name, power);
		this.brand = brand;
		this.type = type;
		this.level = level;
	}
	// переопределение родительского метода
	plugIn() {
		console.log("Attention! " + this.name + " " + this.brand + ", " 
			+ this.type +", is plugged! " + " speed fun = " + this.level);
		this.isPlugged = true;
	}
}

// экземпляр дрели
const handDrill = new Drill("drill d1", 1000, "makita", 200);

handDrill.plugIn();		// подключение дрели в розетку
handDrill.rotationCW();		// вращение по часовой трелке
handDrill.offRotation();	// стоп вращения
handDrill.rotationCCW();	// вращение против часовой стрелки
handDrill.offRotation();	// стоп вращения
handDrill.unplug();		// отключение дрели из розетки

// экземпляр вентилятора
const tableFun = new Fan("fun f1", 200, "weterok", "table", 3);

tableFun.plugIn();	// включение вентилятора
tableFun.unplug();	// отключение вентилятора