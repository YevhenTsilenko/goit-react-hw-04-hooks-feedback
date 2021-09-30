import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section ({ title, children }) {
    return (
        <div>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export { Section };