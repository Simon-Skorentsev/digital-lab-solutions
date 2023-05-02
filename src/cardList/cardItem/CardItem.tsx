import { splitFileName } from "../../utils/splitFileName";
import './CardItem.scss'

export function CardItem({ text, title, autor, tags, img, date, views }: CardData) {
  const { name, code, ext } = splitFileName(img);


  return (
    <div className="card-item">
      <picture>
        <source type="image/webp" srcSet={`images/${name}${code}.webp 1x, images/${name}@2x${code}.webp 2x, images/${name}@3x${code}.webp 3x`} />
        <img className="card-item__photo" src={`images/${name}${ext}`} alt="card image" />
      </picture>
      <ul className="card-item__tag-list">
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
      <h2 className="card-item__title">{title}</h2>
      <ul className="card-item__data">
        <li>{autor}</li>
        <li>{date}</li>
        <li>{views} Views</li>
      </ul>
      <p className="card-item__text">
        {text}
      </p>
    </div>
  )
}

export interface CardData {
  title: string,
  text: string,
  autor: string,
  tags: string[],
  img: string,
  date: string,
  views: string
}