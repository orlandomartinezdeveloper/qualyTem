import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReqCss from './Req.module.css';
import ReactPaginate from 'react-paginate';
import Control from './Control'
const Req = (props) => {
    const handleSearch = props.handleSearch;
    const busca = props.busca;
    const [info, setInfo] = useState([]);
    const url = 'http://localhost:4000/documents';
    const endPoint = `${url}?q=${busca}`
    useEffect(() => {
        axios.get(endPoint)
            .then((response) => {
                setInfo(response.data);

            })
            .catch(() => {
                console.log('Ruim');
            })
    }, [busca]);
    const [pageNumber, setPageNumber] = useState(0);
    const documentsPerPage = 5;
    const documentsVisited = pageNumber * documentsPerPage;
    const infoSlice = info.slice(documentsVisited, documentsVisited + documentsPerPage);
    const pageCount = Math.ceil(info.length / documentsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div className={ReqCss.container}>
            <Control handleSearch={handleSearch} />
            <div className={ReqCss.lista}>

                {infoSlice.map((item) =>
                    <div className={ReqCss.sublista}>
                        <div className={ReqCss.supraTitulo}>Documento</div>
                        <div className={ReqCss.bloques}>
                            <div className={ReqCss.bloq1}>
                                <div className={ReqCss.tituloLeft}>Código:</div>
                                <div className={ReqCss.descripcaoLeft}>{item.code}</div>
                                <div className={ReqCss.tituloRight}>Titulo:</div>
                                <div className={ReqCss.descripcaoRight}>{item.title}</div>
                            </div>
                            <div className={ReqCss.bloq2}>
                                <div className={ReqCss.tituloLeft}>Data:</div>
                                <div className={ReqCss.descripcaoLeft}>
                                    {(item.['release-date']) == '' ? 'Não tem' : item.['release-date']}
                                </div>
                                <div className={ReqCss.tituloRight}>Processos:</div>
                                {
                                    (typeof (item.processes) == 'object') ?
                                        <div className={ReqCss.subUltralista}>
                                            {
                                                item.processes.map((subitem) => <div className={ReqCss.descripcaoRight}>{subitem.name}</div>

                                                )}
                                        </div>
                                        : null}
                            </div>
                        </div>
                        <div className={ReqCss.bloqExterno}><a href={`/documento/${item.id}`}><button className={ReqCss.buttonConsultar}>Consultar <i class="fas fa-search"></i></button></a></div>
                    </div>
                )
                }

            </div >
            <div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={ReqCss.paginacaoButtons}
                    previousLinkClassName={ReqCss.previousNext}
                    nextLinkClassName={ReqCss.previousNext}
                    activeClassName={ReqCss.paginacaoActive}
                />
            </div>
        </div>
    )

}

export default Req;