import './Logotype.scss';

export function Logotype() {

  return (
    <picture className="logotype">
      <source type="image/webp" srcSet="images/Logotype.webp 1x, images/Logotype@2x.webp 2x, images/Logotype@3x.webp 3x" />
      <img src="images/Logotype.png" alt="logotype" />
    </picture>
  )
}
