import React, { useState, useEffect } from 'react';
import ControlCSS from './Control.module.css';
const Control = (props) => {
    const handleSearch = props.handleSearch;
    const [busca, setBusca] = useState('');
    console.log(busca);
    const passText = () => {
        handleSearch(busca);
    };
    useEffect(passText, [busca, handleSearch])
    return (
        <div className={ControlCSS.module}>
            <div className={ControlCSS.cBotoes}>
                <div className={ControlCSS.busqueda}>
                    <input type="text" className={ControlCSS.inputGrand} placeholder="Qual documento você está procurando?"
                        value={busca}
                        onChange={
                            (event) => {
                                setBusca(event.target.value);
                            }
                        }
                        aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className={ControlCSS.lupa}><i className={"fa fa-search " + ControlCSS.lupaP}></i></span>
                </div>
            </div>
        </div>
    )
}
export default Control;