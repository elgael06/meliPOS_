
const RouteApp =(state="/home",actions)=>{
    switch(actions.type){
        case "add_route":
            return actions.route;
        case 'login_route':
            return '/login';
        default:
            return state;
    }
}

export default RouteApp;