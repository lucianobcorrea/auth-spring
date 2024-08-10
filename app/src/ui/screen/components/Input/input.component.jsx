export function Input({ type, name, value, onChange, placeholder }) {
    return (
      <input className="p-3 rounded lg:w-96 w-80"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
  