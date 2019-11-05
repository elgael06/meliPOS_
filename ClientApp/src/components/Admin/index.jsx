//librerias
import React from 'react';
import { connect } from 'react-redux';

const Admin =()=>{

    return (<div>
        <label>Este es el Admin...</label>
    </div>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateProps,mapDispatchToProps)(Admin);
