import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <div>
        <div>
                <p>good:  { good}</p>
                <p>neutral:  { neutral}</p>
                <p>bad:  { bad}</p>
            </div>
            <p>total:  { total}</p>
            <p>Positive feedback: { percentage}%</p>
        </div>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};