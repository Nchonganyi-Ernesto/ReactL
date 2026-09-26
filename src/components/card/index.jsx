import Card from "../cardcomponent";
import image1 from "../../assets/efoillovers.jpg"
import image2 from '../../assets/efoillessons.jpg'
import './styles.css'

export default function CardList(){
    const cardsData=[
        {
            id:1,
            image:image1,
            title:"e-foil Lessons",
            description:"learn to fly a boat",
            buttonText:"Book Now",
        },
        {
            id:2,
            image:image2,
            title:"you gotta keep going",
            description:"no matter what we keep going",
            buttonText:"for ourselves",
        }
    ]
    return(
        <div className="card-list">
            {cardsData.map((card)=>(
                <Card
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                />
            ))}
        </div>
    )
}