//librerias
import React from 'react';
import { connect } from 'react-redux';

const Home =()=>{

    return (<div>
        <label>Este es el home...</label>
    </div>);
}

const mapStateProps=()=>({

});

const mapDispatchToProps = dispatch =>({

});

export default connect(mapStateProps,mapDispatchToProps)(Home);
