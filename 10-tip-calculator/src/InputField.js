export default function InputField({ text, children }) {
    return (
        <div>
            <label>{text}&nbsp;</label>
            {children}
        </div>
    );

}