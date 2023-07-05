import CheckBox from "../signup/CheckBox";
import classes from "../../../styles/quiz/Answer.module.css";

export default function Answer() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="test answer" />
    </div>
  );
}
