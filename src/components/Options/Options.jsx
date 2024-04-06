
import css from './Options.module.css';

export default function Options({ options, totalFeedback,resetFeedback}) {
    return (
        <ul className={css.list}>
            <li><button onClick={()=>options('good')} className={css.button}>Good</button></li>
            <li><button onClick={()=>options('neutral')} className={css.button}>Neutral</button></li>
            <li><button onClick={()=>options('bad')} className={css.button}>Bad</button></li>
            {totalFeedback === 0 ? null :
            <li><button onClick={resetFeedback} className={css.button}>Reset</button></li>}
        </ul>
    )
}