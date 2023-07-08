import CheckBox from "../signup/CheckBox";
import classes from "../../../styles/quiz/Answer.module.css";

export default function Answer({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          key={index}
          className={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
