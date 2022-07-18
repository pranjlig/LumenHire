import Card from '../Card/Card'
import skills from "../../assets/skills.jpg"

const cardList = [
    {
        key: 1,
        title: "Skills",
        description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
        img: "skills.jpg",
        isLeft: true
    },
    {
        key: 2,
        title: "Projects",
        description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
        img: "projects.jpg",
        isLeft: false
    },
    {
        key: 3,
        title: "Experience",
        description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
        img: "experience.jpg",
        isLeft: true
    },
    {
        key: 4,
        title: "Photographs",
        description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
        img: "photographs.jpg",
        isLeft: false
    }
]

const CardSet = () => {
    return (
        <>
            {cardList.map((card) => {
                return (
                    <Card key={card.key} card={card} />
                )
            })}
        </>
    )
    
}

export default CardSet