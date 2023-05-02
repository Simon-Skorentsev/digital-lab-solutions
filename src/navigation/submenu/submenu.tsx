import './Submenu.scss'
import { SubMenuItem } from "../menuItemsData";

export function Submenu({ items }: Props) {

  return (
    <ul className="submenu">
      {items.map((item, i) => (
        <li key={i} className="submenu__item">
          {item.href ? <a href={item.href} className="submenu__name">
            {item.name}
          </a> :
            <span className="submenu__name">{item.name}</span>}
          <svg className="submenu__arrow" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L5.5 5L9.5 1" stroke="black" strokeLinecap="square" />
          </svg>
        </li>
      ))}
    </ul>
  )
}

interface Props {
  items: SubMenuItem[],
}