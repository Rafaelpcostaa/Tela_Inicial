import style from './Css/pesquisa.module.css'
import { FaSearch } from 'react-icons/fa';

function Pesquisa(){
    return(
        <div class={style.container}>
        <div class={style.overlay}>
            <h1>Saiba o que está em suas mãos e como isso impacta o mundo ao seu redor.</h1>
            <div class={style.search_bar}>
                <input type="text" placeholder="Está preparado?"/>
                <button type="submit">
                    <FaSearch size={30} color="gray"/>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Pesquisa;