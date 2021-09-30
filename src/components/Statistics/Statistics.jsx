import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

function Statistics ({ good, neutral, bad, total, positiveFeedbacks }) {
    return (
        <div className={styles.statistics}>
            <p className={styles.good}>Good: {good}</p>
            <p className={styles.neutral}>Neutral: {neutral}</p>
            <p className={styles.bad}>Bad: {bad}</p>
            <p className={styles.total}>Total: {total}</p>
            <p className={styles.positive}>Positive feedback: {positiveFeedbacks}%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbacks: PropTypes.number.isRequired,
  };

export { Statistics };