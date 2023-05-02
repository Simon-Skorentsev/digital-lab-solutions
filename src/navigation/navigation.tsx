import { useEffect, useRef, useState } from "react";
import './Navigation.scss'
import cn from "classnames";
import { menuItems } from "./menuItemsData";
import { Submenu } from "./submenu/submenu";

export function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const startPointRef = useRef<HTMLDivElement>(null!);
  const navRef = useRef<HTMLElement>(null!);

  useEffect(() => {
    const [startBot, navTop] = [startPointRef.current.getBoundingClientRect().bottom, navRef.current.getBoundingClientRect().top];
    const distance = startBot - navTop;

    const handleScroll = () => {
      const actualStartTop = startPointRef.current.getBoundingClientRect().top;

      if (actualStartTop - distance <= -200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={startPointRef} className="navigation__start-point" />
      <nav
        ref={navRef}
        className={cn("navigation", {
          "navigation--hidden": isHidden,
        })}>
        {menuItems.map((section, i) => (

          <div key={i} className="navigation__item">
            {section.href ? <a href={section.href}>{section.name}</a> : section.name}
            {section.submenu && <>
              <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1L5.5 5L9.5 1" stroke="black" strokeLinecap="square" />
              </svg>
              <Submenu items={section.submenu} />
            </>
            }
          </div>

        ))}
      </nav>
    </>
  )
}
