interface Props {
  name: string;
}

export const Author: React.FC<Props> = ({ name }) => (
  <div>
    <p>{name}</p>
  </div>
);
