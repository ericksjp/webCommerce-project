import './styles.css'

type Props = {
    buttonText: string;
}

export default function ButtonNextPage({ buttonText }: Props){
    return (
        <div className="dsc-btn-next-page">{buttonText}</div>
    )
}