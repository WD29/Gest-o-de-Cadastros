import React, {useState, useEffect} from 'react';

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const[data, setDate] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
response => {
setDate (response.data)
}
)
    }, [])

    const handleCart = (index: number) => {

        const productStore = JSON.stringify(data[index]);

localStorage.setItem(`@Produto-${index}`, productStore)

       
    }

return (

    <Container>
        <section className="background-section-one">            
        <h1>Venha aproveitar as melhores ofertas de jogos!!!</h1>
        </section>

        <section className="background-section-two">            
        <h1>Jogos PS5 e PS4, corra e aproveite!</h1>
        </section>
            
     
             <section>
                 
                  
            {data.map( (prod, index) => (
                
                <div className="product-content" key={prod.id}>
                <img src={prod.photo} alt="Jogo" width="200" height="auto" />
                <h4>{prod.name}</h4>
                <span>{prod.description}</span>
                <h6>{prod.price}</h6>
                <button onClick={()=>handleCart(index) }> Adicionar ao carrinho</button>
                
                </div>
                
            ))}

            </section>

            <footer>
                <p>© 2021 – Todos os Direitos Reservados – Desenvolvido por Wanbasten</p>
            </footer>

        </Container>       

)

}

export default Home;