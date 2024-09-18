import styles from './Css/info.module.css'

function Info_2({imagen}){
    return(
        <div class={styles.container}>
            <div class="image">
            <img src={imagen} alt="Desenho de plantas e natureza" height={200} width={200}/>
            </div>
            <div class="info2">
                <h1>Consciência</h1>
                <p>
                    A conscientização é essencial para promover mudanças positivas no mundo. 
                    Quando as pessoas compreendem o impacto de suas escolhas diárias, passam 
                    a agir com maior responsabilidade, adotando práticas que preservam o meio 
                    ambiente. O EcoFinder tem como objetivo educar os usuários sobre os produtos 
                    que utilizam, destacando o quanto cada item pode ser benéfico ou prejudicial ao planeta. 
                    Ao oferecer informações claras e acessíveis, buscamos incentivar escolhas mais conscientes, 
                    contribuindo para um futuro mais sustentável.
                </p>
            </div>
        </div>
    )
}

export default Info_2;