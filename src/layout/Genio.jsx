import { useState } from 'react';
import styles from './Genio.module.css';

export function Genio() {
    const [showGenio, setShowGenio] = useState(false);

    const handleClick = () => {
        setShowGenio(!showGenio);
    };

    return (
        <section className={styles.container}>
          <div className={styles.img_content}>
            <img
                src={showGenio ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true" : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"}
                alt={showGenio ? "imagem do gênio" : "imagem da lâmpada do gênio"}
                className={styles.image}
            />
          </div>
            <button id={styles.btn} onClick={handleClick}>Clique Aqui</button>
        </section>
    );
}
