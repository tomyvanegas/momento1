const ModuloControllers = {};




ModuloControllers.create = (req, res) => {
    //logica 

    let pesoActual = {}
    let pierdenPeso=0
    let gananPeso=0
    let pierdenPesoIeI=0
    let lograronObj=0
    let compPeso = {}
    let pesoDef


    let pacientes = req.body;
    for (let i=0; i < pacientes.length; i++ ) {
            
        let dato = pacientes[i]

        let objpac = {}

        if(dato.peso_final > dato.peso_inicial){
            objpac.nombre=dato.nombre
            objpac
            gananPeso ++
        }
        else{
            pierdenPeso ++
        }
            
            
    }
    
    res.json({pierdenPeso,gananPeso,pesoDef})   
   
    
}
 
  let calculaDEF = (peso_inicial , peso_intermedio , peso_final) =>{
       let pesoFinal = peso_inicial + peso_intermedio  + peso_final ;
    
    return pesoFinal

}


module.exports = ModuloControllers;