
export const usuario_seleccion =(state=null,actions)=>{
    switch (actions.type) {
        case 'SELECCIONAR_USUARIO':
            return actions.usuario;    
        default:
            return state;
    }
}