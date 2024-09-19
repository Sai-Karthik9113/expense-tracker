import './Button.css';

const Button = ({ text, style, onClick }) => {
    return (
        <button onClick={onClick} style={style}>{text}</button>
    )
};

export default Button;