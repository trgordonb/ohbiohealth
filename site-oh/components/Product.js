import Link from 'next/link';
import AddToCartButton from './cart/AddToCartButton'
import PreOrderButton from './cart/PreOrderButton';
import ProductPrice from "./ProductPrice"
import Image from "./Image"
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../utils/constants/urls"

const Product = ( props ) => {
	const { product, isPreOrder } = props;

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="product mb-5">


				<Link href={ `/product/${ product?.slug }`} >
					<a>
						<Image
							className="object-cover bg-gray-100"
							width="308"
							height="308"
							loading="lazy"
							sourceUrl={ product?.image?.sourceUrl ?? '' }
							defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
							altText={product?.image?.altText ?? product?.slug}
						/>
					</a>
				</Link>
				<div className={`product-info`}>
					<h3 className="product-title mt-3 font-medium text-gray-800">
						{ product.name ? product.name : '' }
					</h3>
					<div className="product-description text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
					<ProductPrice salesPrice={product?.price} regularPrice={product?.regularPrice}/>
					{
						isPreOrder ? <PreOrderButton product={ product }/> :
						<AddToCartButton product={ product }/>
					}
				</div>

			</div>
		) : (
			''
		)
	);
};

export default Product;
