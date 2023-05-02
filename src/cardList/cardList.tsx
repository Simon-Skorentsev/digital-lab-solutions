import './CardList.scss'
import { CardItem } from "./cardItem/CardItem"
import { cardsData } from "./cardsData"

export function CardList() {
  return (
    <div className="card-list">
      {cardsData.map((card, i) => (
        <CardItem key={i} {...card} />
      ))}
    </div>
  )
}
