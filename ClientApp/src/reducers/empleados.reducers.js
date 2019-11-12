
const Empleados = (state=[],actions) =>{
    switch (actions.type) {
        case 'agregar_empleados':
            return actions.Empleados;
    
        default:
            return state;
    }
}

export default Empleados;