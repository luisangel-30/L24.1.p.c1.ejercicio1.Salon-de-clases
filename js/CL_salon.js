export default class CL_salon{ 
    constructor(){
        this.acEdad=0;
        this.catEstudiantes=0;
        this.edadMayor=0;
        this.nombMayor=0;
        this.canChicas=0;
        this.catChicasMayor18=0;
        }
        procesarestudiante(est){
            this.catEstudiantes++;
            this.acEdad+=est.edad;
            if(est.edad>this.edadMayor){
                this.edadMayor=est.edad;
                this.nombMayor=est.nombre;
            }
            if(est.sexo=="F"){
                this.canChicas++;
                if(est.edad>=18){
                    this.catChicasMayor18++;
                }
            }

        }
        edadPromedio(){
            return this.acEdad/this.catEstudiantes;
        }
        porcchicasmayoredad(){
            return (this.catChicasMayor18/this.canChicas)*100;
        }
        nombremayoredad(){
            return this.nombMayor;
        }


}
