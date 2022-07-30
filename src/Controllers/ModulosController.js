const ModuloControllers = {};




ModuloControllers.create = (req, res) => {
    //logica 

    let pesoActual = []
    let pierdenPeso=0
    let gananPeso=0
    let lograronObj=0
    let resp = {}
   


    let pacientes = req.body;

    for (let i=0; i < pacientes.length; i++ ) {
            
        let dato = pacientes[i];

        let objEstadoPeso = {}

        if(dato.peso_final > dato.peso_inicial){
            objEstadoPeso["nombre"]=dato.nombre
            objEstadoPeso["peso_q_subio"]= dato.peso_final - dato.peso_inicial
            objEstadoPeso["estado"]="gano peso"
            pesoActual.push(objEstadoPeso)
        }
        if(dato.peso_final < dato.peso_inicial){
            objEstadoPeso["nombre"]=dato.nombre
            objEstadoPeso["peso_q_subio"]= dato.peso_final - dato.peso_inicial
            objEstadoPeso["estado"]="perdio peso"
            pesoActual.push(objEstadoPeso)

        }if(dato.peso_inicial > dato.peso_final && dato.objetivo == "bajar"){

            lograronObj ++

        }
        if(dato.peso_inicial < dato.peso_final && dato.objetivo == "subir"){

            lograronObj ++

        }
        if(dato.peso_inicial < dato.peso_intermedio){
            
            gananPeso ++

        }
        if(dato.peso_inicial > dato.peso_intermedio){
            
            pierdenPeso ++

        }
       
            
            
    }
    
    resp["pesoActual"]=pesoActual
    resp["Subiero_peso"]= gananPeso
    resp["bajaron_peso"]= pierdenPeso
    resp["cumpieron_objetivo"]=lograronObj
    res.json(resp);   

}




module.exports = ModuloControllers;