import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DocumentoCss from './Documento.module.css';
const Documento = () => {
    const { id } = useParams();
    const [doc, setDoc] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/documents/${id}`)
            .then((response) => {
                setDoc(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log('Ruim');
            })
    }, []);
    return (
        <div className={DocumentoCss.container}>
            <div className={DocumentoCss.lista}>
                <div className={DocumentoCss.sublista}>
                    <div className={DocumentoCss.supraTitulo}>{doc.title}</div>
                    <div className={DocumentoCss.bloques}>
                        <div className={DocumentoCss.bloq1}>
                            <div className={DocumentoCss.tituloLeft}>Código:</div>
                            <div className={DocumentoCss.descripcaoLeft}>{doc.code}</div>
                            <div className={DocumentoCss.tituloRight}>Status:</div>
                            <div className={DocumentoCss.descripcaoRight}>{
                                doc.active == true ? 'Ativo' : 'Não Ativo'}
                            </div>
                            <div className={DocumentoCss.tituloRight}>Publicado:</div>
                            <div className={DocumentoCss.descripcaoRight}>
                                {doc.published == true ? 'Sim' : 'Não'}
                            </div>
                        </div>
                        <div className={DocumentoCss.bloq2}>
                            <div className={DocumentoCss.tituloLeft}>Data:</div>
                            <div className={DocumentoCss.descripcaoLeft}>
                                {(doc.['release-date']) == '' ? 'Não tem' : doc.['release-date']}
                            </div>


                            <div className={DocumentoCss.tituloRight}>Processos:</div>
                            {
                                (typeof (doc.processes) == 'object') ?
                                    <div className={DocumentoCss.subUltralista}>
                                        {
                                            doc.processes.map((subitem) => <div className={DocumentoCss.descripcaoRight}>{subitem.name}</div>

                                            )}
                                    </div>
                                    : null}
                        </div>
                    </div>
                </div>
            </div >
            <div className={DocumentoCss.bloqExterno}><a href='/list'><button className={DocumentoCss.buttonVoltar}>Voltar</button></a></div>
        </div>
    )
}
export default Documento;
