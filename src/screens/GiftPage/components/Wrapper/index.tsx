import styles from './style.module.css';
import ProductItem from '../ProductItem';
import giftData from '@/data/giftData';

const Wrapper = () => {
  return (
    <section className={styles.section_padding}>
      <div className="container mx-auto px-4">
        <div
          className={`${styles.grid} ${styles['grid-cols-1']} ${styles['sm-grid-cols-2']} ${styles['md-grid-cols-3']} ${styles['lg-grid-cols-4']}`}
        >
          {giftData.map((gift) => (
            <ProductItem
              key={gift.id}
              title={gift.title}
              price={gift.price}
              imageUrl={gift.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
