import './primaryButton.css';

type PrimaryButtonProps = {
  variant: 'default' | 'white';
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactElement;
};

const PrimaryButton = ({
  variant,
  link,
  onClick,
  text,
  type,
  icon,
}: PrimaryButtonProps) => {
  const buttonStyle = `primary-btn ${variant === 'white' ? 'color-white' : ''}`;
  return (
    <>
      {link ? (
        <a href={link} className={buttonStyle}>
          {text} {icon && icon}
          <span></span>
        </a>
      ) : (
        <button className={buttonStyle} onClick={onClick} type={type}>
          {text}
          {icon && icon}
          <span></span>
        </button>
      )}
    </>
  );
};

export default PrimaryButton;