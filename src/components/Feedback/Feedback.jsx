import css from './Feedback.module.css';

export default function Feedback() {
    
    return (
        <ul className={css.list}>
            <li>
                <p>Good:</p>
            </li>
            <li>
                <p>Neutral:</p>
            </li>
            <li>
                <p>Bad:</p>
            </li>
            <li>
                <p>Total:</p>
            </li>
            <li>
                <p>Positive: </p>
            </li>
        </ul>
    )
}