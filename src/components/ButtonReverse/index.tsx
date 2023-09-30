import './styles.css'

type Props = {
  buttonText: string;
}

export default function ButtonReverse({ buttonText }: Props) {
  return <div className="dsc-btn dsc-btn-white">{buttonText}</div>;
}
