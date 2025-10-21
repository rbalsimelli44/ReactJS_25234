import '/src/styles/index.css';

export function Titulo({texto}) {
 return (
   <h1 style={{ 
                display: 'flex', 
                textAlign: 'center', 
                color: 'red' 
    }}>{texto}</h1>
 );
};

export function Subtitulo({texto}) {
 return (
   <h2 style={{ 
                display: 'flex', 
                textAlign: 'center', 
                color: 'blue' 
    }}>{texto}</h2>
 );
};
