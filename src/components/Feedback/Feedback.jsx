
import  Button from './Feedback.styled'
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div>
          
        {options.map((label) => (
          <Button
            type="button"
            name={label}
            key={label}
            
            onClick={onLeaveFeedback}
          >
            {label}
          </Button>
        ))}
      </div>
    );
  };

  FeedbackOptions.propTypes={
    options: PropTypes.arrayOf(PropTypes.string).isRequired, 
    onLeaveFeedback: PropTypes.func.isRequired

}

export default FeedbackOptions