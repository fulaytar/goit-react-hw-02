import css from './Feedback.module.css';

export default function Feedback({ options, totalFeedback, positiveTotal }) {
    return (
            <ul className={css.list}>
                <li>
                    <p>Good:{options.good}</p>
                </li>
                <li>
                    <p>Neutral:{options.neutral}</p>
                </li>
                <li>
                    <p>Bad:{options.bad}</p>
                </li>
                <li>
                    <p>Total:{totalFeedback}</p>
                </li>
                <li>
                    <p>Positive:{positiveTotal}%</p>
                </li>
            </ul>
    );
}
