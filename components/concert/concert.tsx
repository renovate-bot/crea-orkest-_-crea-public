interface Image {
  url: string;
  alt: string;
  title?: string;
}

interface Props {
  name: string;
  image?: Image;
}
const Author: React.FC<Props> = ({ name, image }) => (
  <div>
    <p>{name}</p>
    <picture>
      <img src={image.url} alt={image.alt} title={image.title} />
    </picture>
  </div>
);
