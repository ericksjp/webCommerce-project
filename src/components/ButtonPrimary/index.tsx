import './styles.css'

type Props = {
  buttonText: string;
}

export default function ButtonPrimary({ buttonText }: Props) {
  return <div className="dsc-btn dsc-btn-blue">{buttonText}</div>;
}
