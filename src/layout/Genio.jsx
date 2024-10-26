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
                src={showGenio ? "/src/assets/lampada-com-mago.png" : "/src/assets/lampada.png"}
                alt={showGenio ? "imagem do gênio" : "imagem da lâmpada do gênio"}
                className={styles.image}
            />
          </div>
            <button id={styles.btn} onClick={handleClick}>Clique Aqui</button>
        </section>
    );
}
