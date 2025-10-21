import reactLogo from '/src/assets/logos/react.svg';
import viteLogo from '/src/assets/logos/vite.svg';
import bootstrapLogo from '/src/assets/logos/bootstrap.svg';

export default function Header() {
    return (
        <header> 
            <h1> Front-End con React JS
                <a href="https://react.dev" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo" />
                </a>, Vite
                <a href="https://vite.dev" target="_blank">
                      <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>y Bootstrap
                <a href="https://bootstrap.dev" target="_blank">
                      <img src={bootstrapLogo} className="logo" alt="Bootstrap logo" />
                </a>
            </h1>
        </header> ); 
    };