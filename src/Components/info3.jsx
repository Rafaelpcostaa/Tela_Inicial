function Info_3(){
    return(
        <div class="container">
            <div class="header">
                <h1>Níveis de Poluição</h1>
                <p>
                    Classificamos os produtos em quatro níveis de poluição, ajudando os usuários a entender o impacto ambiental de cada item. 
                    Essa classificação visa ajudar os usuários a fazer escolhas informadas, permitindo que eles identifiquem e evitem produtos 
                    que causam danos ao meio ambiente, ao mesmo tempo que promovem práticas de consumo mais responsáveis.
                </p>
            </div>

            <div class="grid-container">
                <div class="box ausente">
                    <h2>Ausente</h2>
                    <p>Produtos que não causam impactos significativos ao meio ambiente. Eles são seguros para o uso e não contribuem para a degradação ambiental. Esses produtos são ideais para quem busca um consumo sustentável e consciente.</p>
                </div>
                <div class="box leve">
                    <h2>Leve</h2>
                    <p>Produtos que possuem um impacto ambiental baixo. Eles causam algum nível de poluição, mas em menor escala. Esses produtos são uma escolha razoável para melhorar as práticas de sustentabilidade.</p>
                </div>
                <div class="box medio">
                    <h2>Médio</h2>
                    <p>Produtos com um impacto ambiental mais significativo. Eles podem contribuir para a poluição do ar, água e solo, além de estarem associados a alguns problemas ambientais. Para o consumidor consciente, esses produtos devem ser evitados ou usados com moderação.</p>
                </div>
                <div class="box critico">
                    <h2>Crítico</h2>
                    <p>Produtos altamente prejudiciais ao meio ambiente, causando grandes danos aos ecossistemas. Evitar o uso desses produtos é essencial para promover um consumo mais responsável.</p>
                </div>
            </div>
        </div>
    )
}

export default Info_3