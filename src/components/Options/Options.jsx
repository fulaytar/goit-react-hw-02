
import css from './Options.module.css';

export default function Options({ Options, totalFeedback }) {
    return (
        <ul className={css.list}>
            <li><button onClick={Options} className={css.button}>Good</button></li>
            <li><button onClick={Options} className={css.button}>Neutral</button></li>
            <li><button onClick={Options} className={css.button}>Bad</button></li>

            {totalFeedback === 0 ? null :
            <li><button onClick={Options} className={css.button}>Reset</button></li>}
        </ul>
    )
}