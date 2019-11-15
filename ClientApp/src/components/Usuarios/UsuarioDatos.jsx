import React, { useState, useEffect } from 'react'


const UsuarioDatos =({datos})=>{
    const [ine,setIne] = useState(datos['ine_ife']||'')
    const [curp,setCurp] = useState(datos['curp']||'')
    const [nss,setNss] = useState(datos['nss']||'')
    const [info,setinfo] = useState(datos['infonavit']||'')
    const [fecha,setFecha] = useState(datos['fechaNacimiento']||'')
    const [rfc,setRfc] = useState(datos['rfc']||'')
    const [desc,setDesc] = useState(datos['direccion']||'')

    const evSubmit = e =>{
        e.preventDefault();
        console.log({
            ine_ife:ine,
            curp:curp,
            nss:nss,
            infonavit:info,
            fechaNacimiento:fecha,
            rfc,
            direccion:desc
        })
    }

    return(<form className="col-6 bg-white" onSubmit={evSubmit}>
        <div className="row card-body ">
            <div className="form-group col-7">
                <label>IFE/INE</label>
                <input className="form-control" minLength="13" maxLength="13" required value={ine} onChange={e=>setIne(e.target.value)} />
            </div>
            <div className="form-group col-5">
                <label>FECHA</label>
                <input type="date" className="form-control" required value={fecha} onChange={e=>setFecha(e.target.value)} />
            </div>
            <div className="form-group col-6">
                <label>CURP</label>
                <input className="form-control" height="18" maxLength="18" required value={curp} onChange={e=>setCurp(e.target.value)} />
            </div>
            <div className="form-group col-6">
                <label>RFC</label>
                <input className="form-control" minLength="12" maxLength="13" required value={rfc} onChange={e=>setRfc(e.target.value)} />
            </div>
            <div className="form-group col-6">
                <label>NSS</label>
                <input className="form-control" maxLength="11" minLength="11" required value={nss} onChange={e=>setNss(e.target.value)} />
            </div>
            <div className="form-group col-6">
                <label>INFONAVIT</label>
                <input className="form-control" maxLength="15" minLength="15" value={info} onChange={e=>setinfo(e.target.value)} />
            </div>
            <div className="form-group col-12">
                <label className="label">DIRECCION</label>
                <textarea className=" form-control" value={desc} maxLength="100" onChange={e=>setDesc(e.target.value)}>

                </textarea>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-secondary  btn-block">
                    ENVIAR DATOS
                </button>
            </div>
        </div>
    </form>);
}

export default UsuarioDatos;