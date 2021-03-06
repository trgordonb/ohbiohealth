import { useTranslation } from 'react-i18next'

OrdersPage.getInitialProps = async (context, client, currentUser) => {
  const res = await client.get(`/api/profiles/${currentUser.id}`)
  return {
      data: res.data.orders
  }
}

export default function OrdersPage({ data }) {
  const { t, i18n } = useTranslation()

  const lists = data.map((order) => { return (
    <li key={order._id}>
        <p>{new Date(order.orderDate).toISOString().slice(0,10)} &nbsp;&nbsp; {t('total')}: ${order.total}</p>
        {
          order.items.map((item) => { return (
            <p key={item.product.name}>{item.product.name}(SKU:{item.product.sku}) &nbsp;&nbsp; ${item.product.price} X {item.quantity}</p>
          )})
        }
    </li>
  )})

  return (
    <div className='py-16'>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <h1 className='mt-10 mb-10 px-4 font-bold text-3xl'>
          {t('order')}
        </h1>
        <ul>
            {lists}
        </ul>
      </div>
    </div>
  )
}