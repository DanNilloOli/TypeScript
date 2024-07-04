export class transporte{


    private _capacidade: number;

    constructor(capacidade: number) {
        this._capacidade = capacidade;
    }

	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}
    
    public visualizar(){
    console.log("----------------------------------------");
    console.log("Meios de transporte");
    console.log("----------------------------------------");
    console.log('capacidade: ${}');
    console.log("----------------------------------------");
    }

}