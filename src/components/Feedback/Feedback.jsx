import css from './Feedback.module.css';

export default function Feedback({ Options, totalFeedback, positiveTotal }) {
    return (
        totalFeedback === 0 ? 'No feedback yet' :
            <ul className={css.list}>
                <li>
                    <p>Good:{Options.good}</p>
                </li>
                <li>
                    <p>Neutral:{Options.neutral}</p>
                </li>
                <li>
                    <p>Bad:{Options.bad}</p>
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
