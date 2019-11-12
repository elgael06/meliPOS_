
/**
 * USER
 */
export const ADD_USER = Usuario =>({
    type:'add_user',
    Usuario
});

export const REMOVE_USER =()=>({
    type:'remove_user',
})

export const GET_USER =()=>({
    type:'get_user'
});

/**
 * RouterApp
 */
export const ADD_ROUTE =route=>({
    route,
    type:'add_route'

});
export const LOGIN_ROUTER =()=>({
    type:'login_route'
});

/**
 * Empleados
 */
export const AGREGAR_EMPLEADOS = Empleados =>({
    type:'agregar_empleados',
    Empleados
});