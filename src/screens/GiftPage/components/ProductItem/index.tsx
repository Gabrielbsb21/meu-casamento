import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css';

interface ProductItemProps {
  title: string;
  price: string;
  imageUrl: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, price, imageUrl }) => {
  return (
    <article className={styles.card}>
      <div className={styles.productImg}>
        <Image
          src={imageUrl}
          alt={title}
          width={370}
          height={250}
        />
      </div>
      <div className={styles.headerCard}>
        <Link href="/product">
          <h3 className={styles.productTitle}>{title}</h3>
        </Link>
        <p className={`text-sm ${styles.price} `}>{price}</p>
      </div>
    </article>
  );
};

export default ProductItem;

