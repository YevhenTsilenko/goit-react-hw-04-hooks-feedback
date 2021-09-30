import PropTypes from 'prop-types';
import shortid from 'short-id';
import styles from './FeedbackButtons.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <>
            {options.map((btnName) => (
                <button key={shortid.generate()} name={btnName} onClick={onLeaveFeedback} className={styles.btn}>{btnName}</button>
            ))}
        </>
        
        
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export { FeedbackOptions };