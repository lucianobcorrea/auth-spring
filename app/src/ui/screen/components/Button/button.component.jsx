import './style.css';

export function Button({ type, text }) {
  return (
    <button className="bg-buttonBlue py-3 px-15 rounded-xl text-white transition ease-in-out duration-300 hover:bg-buttonBlueHover" type={type}>
      {text}
    </button>
  );
}