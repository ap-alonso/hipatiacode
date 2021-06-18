import Link from 'next/link';

function Tutorial(props){
    return (
        <div className="tutorial">
            <h2>
                <Link href={props.url}>
                    <a>{props.title}</a>
                </Link>
            </h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Tutorial;