import style from './Css/menu.module.css'

function Menu(){
    return(
        <div class={style.Menu}>
            <h1>EcoFinder</h1>
            <div class="pesquisa">
            </div>
            <nav class={style.navigation}>
                <a href="../Sobre/Sobre.Html">Sobre</a>
                <a href="#">Serviço</a>
                <a href="../Contato/Contato.Html">Contato</a>
                <a href="../Login/Pagina-1.html">Login</a>
            </nav>
        </div>
    )
}

export default Menu;