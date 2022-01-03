import React from 'react'
import { useEffect } from 'react'
import useRequest from '../hooks/use-request'

const BuyNowButton = (props) => {
    const { doRequest, errors } = useRequest({
        url: '/api/profiles/orders',
        method: 'post',
        onSuccess: (data) => {
            console.log(data)
        }
    });

    useEffect(() => {
        let ecwidLoaded = false;

        function load_ecwid() {
        if( typeof Ecwid != 'undefined' ) {
            xProduct("display= price addtobag","link=yes","version=2","show_border=","show_price_on_button=1","center_align=1");

            Ecwid.OnAPILoaded.add(function() {
            if (!ecwidLoaded) {
                ecwidLoaded = true;
                if (props.currentUser) {
                    Ecwid.Cart.setCustomerEmail(props.currentUser.email)
                }
            }
            });
            Ecwid.OnOrderPlaced.add(async (order) => {
                let sentOrder = { orderNumber: order.orderNumber, total: order.total, items: order.items }
                sentOrder.items = sentOrder.items.map(item => {
                    return({
                        product: {
                            price: item.product.price,
                            name: item.product.name,
                            sku: item.product.sku,
                            url: item.product.url
                        },
                        quantity: item.quantity
                    })
                })

                if (props.currentUser) {
                    await doRequest({ 
                        orderNumber: sentOrder.orderNumber,
                        total: sentOrder.total,
                        items: sentOrder.items
                    })
                }
            })
        }}
        
        window.ecwid_script_defer = true;
        window.ecwid_dynamic_widgets = true;
    
        if (!document.getElementById('ecwid-script')) {
            var script = document.createElement('script');
            script.charset = 'utf-8';
            script.type = 'text/javascript';
            script.src = 'https://app.ecwid.com/script.js?' + props.storeId + '&data_platform=nextjs';
            script.id = 'ecwid-script'
            script.onload = load_ecwid
            document.body.appendChild(script);
        } else {
            load_ecwid()
        }
    },[])

    return (
		<div className={"ecsp ecsp-SingleProduct-v2 ecsp-Product ecwid-SingleProduct-v2-centered ec-Product-" + props.productId} itemType="http://schema.org/Product" data-single-product-id={props.productId}>
			<div itemType="http://schema.org/Offer" itemScope itemProp="offers">
				{ props.isShowPrice &&
				<div className="ecwid-productBrowser-price ecwid-price" itemProp="price"  data-spw-price-location="button" content="">
					<div itemProp="priceCurrency"></div>
				</div>
				}
			</div>
			<div customprop="addtobag"></div>
		</div>
	)
}

BuyNowButton.defaultProps = {storeId: 13433173, productId: 102852327, isShowPrice: true};

export default BuyNowButton