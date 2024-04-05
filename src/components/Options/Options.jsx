
import css from './Options.module.css';

export default function Options({ Options } ) {
    console.log(Options)
    return (
        <ul className={css.list}>
            <li><button className={css.button}>Good</button></li>
            <li><button className={css.button}>Neutral</button></li>
            <li><button className={css.button}>Bad</button></li>
            <li><button className={css.button}>Reset</button></li>
        </ul>
    )
}