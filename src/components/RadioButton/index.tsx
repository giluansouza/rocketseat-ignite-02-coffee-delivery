import { RadioButtonIcon, RadioButtonInput, RadioButtonLabel } from "./styles";

interface RadioButtonProps {
  id: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  icon?: React.ReactNode;
}

const RadioButton = ({ id, value, name, checked, onChange, label, icon }: RadioButtonProps) => {
  return (
    <RadioButtonLabel htmlFor={id} checked={checked}>
      {icon && <RadioButtonIcon>{icon}</RadioButtonIcon>}
      {label}
      <RadioButtonInput
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </RadioButtonLabel>
  );
};

export default RadioButton;
