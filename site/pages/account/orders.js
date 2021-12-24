import buildClient from '../../api/build-client'
import styles from '@/styles/AuthForm.module.css'
import { useTranslation } from 'react-i18next'

export async function getServerSideProps(ctx) {
  const client = buildClient(ctx);
  const { data } = await client.get('/api/users/currentuser');
  const userId = data.currentUser.id
  const res = await client.get(`/api/profiles/${userId}`)

  return { props: { data: res.data.orders } }
}

export default function OrdersPage({ data }) {
  const { t, i18n } = useTranslation()

  const lists = data.map((order) => { return (
    <li key={order._id}>
        <p>{new Date(order.orderDate).toISOString().slice(0,10)} &nbsp;&nbsp; {t('total')}: ${order.total}</p>
        {
          order.items.map((item) => { return (
            <p><a href={item.product.url}>{item.product.name}(SKU:{item.product.sku})</a> &nbsp;&nbsp; ${item.product.price} X {item.quantity}</p>
          )})
        }
    </li>
  )})

  return (
    <div>
      <div className={styles.auth}>
        <h1>
          {t('order')}
        </h1>
        <ul>
            {lists}
        </ul>
      </div>
    </div>
  )
}