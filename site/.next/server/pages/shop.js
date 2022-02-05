"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 1038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8034);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["altText", "title", "width", "height", "sourceUrl", "className", "layout", "objectFit", "containerClassNames", "showDefault", "defaultImgUrl"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Image Component.
 * We don't need to add srcSet, as Next js will generate that.
 * @see https://nextjs.org/docs/api-reference/next/image#other-props
 * @see https://nextjs.org/docs/basic-features/image-optimization#device-sizes
 *
 * @param {Object} props Component props.
 *
 * @return {jsx}
 */



const Image = props => {
  const {
    altText,
    title,
    width,
    height,
    sourceUrl,
    className,
    layout,
    objectFit,
    containerClassNames,
    showDefault,
    defaultImgUrl
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  if (!sourceUrl && !showDefault) {
    return null;
  }
  /**
   * If we use layout = fill then, width and height of the image cannot be used.
   * and the image fills on the entire width and the height of its parent container.
   * That's we need to wrap our image in a container and give it a height and width.
   * Notice that in this case, the given height and width is being used for container and not img.
   */


  if ('fill' === layout) {
    const attributes = _objectSpread({
      alt: altText || title,
      src: sourceUrl || (showDefault ? defaultImgUrl || _utils_constants_urls__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_IMG_URL */ .fX : ''),
      layout: 'fill',
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('object-cover', className)
    }, rest);

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('relative', containerClassNames),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread({}, attributes))
    });
  } else {
    const attributes = _objectSpread({
      alt: altText || title,
      src: sourceUrl || (showDefault ? _utils_constants_urls__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_IMG_URL */ .fX : ''),
      width: width || 'auto',
      height: height || 'auto',
      className
    }, rest);

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_image__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread({}, attributes));
  }
};

Image.defaultProps = {
  altText: '',
  title: '',
  sourceUrl: '',
  showDefault: true,
  defaultImgUrl: '',
  containerClassNames: '',
  className: 'post__image'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ 8029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var _cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2470);
/* harmony import */ var _ProductPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9956);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1038);
/* harmony import */ var _utils_constants_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8034);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__]);
_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const Product = props => {
  var _product$image$source, _product$image, _product$image$altTex, _product$image2;

  const {
    product
  } = props;
  return (// @TODO Need to handle Group products differently.
    undefined !== product && 'GroupProduct' !== product.__typename ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "product mb-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
        href: `/product/${product === null || product === void 0 ? void 0 : product.slug}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            className: "object-cover bg-gray-100",
            width: "308",
            height: "308",
            loading: "lazy",
            sourceUrl: (_product$image$source = product === null || product === void 0 ? void 0 : (_product$image = product.image) === null || _product$image === void 0 ? void 0 : _product$image.sourceUrl) !== null && _product$image$source !== void 0 ? _product$image$source : '',
            defaultImgUrl: _utils_constants_urls__WEBPACK_IMPORTED_MODULE_5__/* .DEFAULT_PRODUCT_HOME_IMG_URL */ .zY,
            altText: (_product$image$altTex = product === null || product === void 0 ? void 0 : (_product$image2 = product.image) === null || _product$image2 === void 0 ? void 0 : _product$image2.altText) !== null && _product$image$altTex !== void 0 ? _product$image$altTex : product === null || product === void 0 ? void 0 : product.slug
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "product-info",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
          className: "product-title mt-3 font-medium text-gray-800",
          children: product.name ? product.name : ''
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "product-description text-sm text-gray-700",
          dangerouslySetInnerHTML: {
            __html: product === null || product === void 0 ? void 0 : product.description
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ProductPrice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
          salesPrice: product === null || product === void 0 ? void 0 : product.price,
          regularPrice: product === null || product === void 0 ? void 0 : product.regularPrice
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          product: product
        })]
      })]
    }) : ''
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);
});

/***/ }),

/***/ 9956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const ProductPrice = ({
  regularPrice = 0,
  salesPrice
}) => {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(salesPrice)) {
    return null;
  }
  /**
   * Get discount percent.
   *
   * @param {String} regularPrice
   * @param {String} salesPrice
   */


  const discountPercent = (regularPrice, salesPrice) => {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(regularPrice) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(salesPrice)) {
      return null;
    }

    const formattedRegularPrice = parseInt(regularPrice === null || regularPrice === void 0 ? void 0 : regularPrice.substring(1));
    const formattedSalesPrice = parseInt(salesPrice === null || salesPrice === void 0 ? void 0 : salesPrice.substring(1));
    const discountPercent = (formattedRegularPrice - formattedSalesPrice) / formattedRegularPrice * 100;
    return {
      discountPercent: formattedSalesPrice !== formattedRegularPrice ? `(${discountPercent.toFixed(2)}%) OFF` : null,
      strikeThroughClass: formattedSalesPrice < formattedRegularPrice ? 'product-regular-price mr-2 line-through text-sm text-gray-600 font-normal' : ''
    };
  };

  const productMeta = discountPercent(regularPrice, salesPrice);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h6", {
    className: "product-price text-gray-800 font-semibold mr-3 mb-5",
    children: [productMeta !== null && productMeta !== void 0 && productMeta.discountPercent ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "product-price mr-2",
      children: salesPrice
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: productMeta === null || productMeta === void 0 ? void 0 : productMeta.strikeThroughClass,
      children: regularPrice
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "product-discount text-green-600 font-bold text-sm font-normal",
      children: productMeta === null || productMeta === void 0 ? void 0 : productMeta.discountPercent
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPrice);

/***/ }),

/***/ 2470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4310);
/* harmony import */ var _utils_cart_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6392);
/* harmony import */ var _data_graphql_queries_get_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(824);
/* harmony import */ var _data_graphql_mutations_add_to_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8087);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_cart_functions__WEBPACK_IMPORTED_MODULE_6__, uuid__WEBPACK_IMPORTED_MODULE_3__]);
([_utils_cart_functions__WEBPACK_IMPORTED_MODULE_6__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












const AddToCart = props => {
  var _product$externalUrl;

  const {
    product
  } = props;
  const productQryInput = {
    clientMutationId: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),
    // Generate a unique id.
    productId: product.productId
  };
  const {
    0: cart,
    1: setCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_hooks_use_cart__WEBPACK_IMPORTED_MODULE_5__/* .CartContext */ .A);
  const {
    0: showViewCart,
    1: setShowViewCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: requestError,
    1: setRequestError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // Get Cart Data.

  const {
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_data_graphql_queries_get_cart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = (0,_utils_cart_functions__WEBPACK_IMPORTED_MODULE_6__/* .getFormattedCart */ .W3)(data);
      console.log(updatedCart);
      localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart)); // Update cart data in React Context.

      setCart(updatedCart);
    }
  }); // Add to Cart Mutation.

  const [addToCart, {
    data: addToCartRes,
    loading: addToCartLoading,
    error: addToCartError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_data_graphql_mutations_add_to_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
    variables: {
      input: productQryInput
    },
    onCompleted: () => {
      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      refetch(); // 2. Show View Cart Button

      setShowViewCart(true);
    },
    onError: error => {
      if (error) {
        var _error$graphQLErrors$, _error$graphQLErrors, _error$graphQLErrors$2;

        setRequestError((_error$graphQLErrors$ = error === null || error === void 0 ? void 0 : (_error$graphQLErrors = error.graphQLErrors) === null || _error$graphQLErrors === void 0 ? void 0 : (_error$graphQLErrors$2 = _error$graphQLErrors[0]) === null || _error$graphQLErrors$2 === void 0 ? void 0 : _error$graphQLErrors$2.message) !== null && _error$graphQLErrors$ !== void 0 ? _error$graphQLErrors$ : '');
      }
    }
  });

  const handleAddToCartClick = async () => {
    setRequestError(null);
    await addToCart();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: ["ExternalProduct" === product.__typename ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
      href: (_product$externalUrl = product === null || product === void 0 ? void 0 : product.externalUrl) !== null && _product$externalUrl !== void 0 ? _product$externalUrl : '/',
      target: "_blank",
      rel: "noreferrer",
      className: "px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600",
      children: "Buy now"
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
      disabled: addToCartLoading,
      onClick: handleAddToCartClick,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current', {
        'hover:bg-purple-600 hover:text-white hover:border-purple-600': !addToCartLoading
      }, {
        'opacity-50 cursor-not-allowed': addToCartLoading
      }),
      children: addToCartLoading ? 'Adding to cart...' : 'Add to cart'
    }), showViewCart ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/cart",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
        className: "px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600",
        children: "View Cart"
      })
    }) : '']
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCart);
});

/***/ }),

/***/ 8087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const ADD_TO_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ADD_TO_CART($input: AddToCartInput!) {
      addToCart(input: $input) {
        cartItem {
          key
          product {
            node {
              id
              productId: databaseId
              name
              description
              type
              onSale
              slug
              averageRating
              reviewCount
              image {
                id
                sourceUrl
                altText
              }
              galleryImages {
                nodes {
                  id
                  sourceUrl
                  altText
                }
              }
            }
          }
          variation {
            node {
              id
              variationId: databaseId
              name
              description
              type
              onSale
              price
              regularPrice
              salePrice
              image {
                id
                sourceUrl
                altText
              }
            }
            attributes {
              id
              attributeId
              name
              value
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ADD_TO_CART);

/***/ }),

/***/ 5121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * GraphQL categories and products query.
 */

const PRODUCTS_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`query {
  products(first: 50) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price
        regularPrice
        id
      }
      ... on VariableProduct {
        price
        id
        regularPrice
      }
      ... on ExternalProduct {
        price
        id
        externalUrl
        regularPrice
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
              regularPrice
            }
          }
        }
      }
    }
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PRODUCTS_QUERY);

/***/ }),

/***/ 3396:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_client_ApolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3149);
/* harmony import */ var _data_graphql_queries_get_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5121);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8029);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Product__WEBPACK_IMPORTED_MODULE_3__]);
_components_Product__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



 //import ProductBrowser from '../components/ProductBrowser'
//ShopPage.getInitialProps = async (ctx) => {
//    const storeId = process.env.NEXT_PUBLIC_ECWID_STOREID
//    return {
//        data: storeId 
//    }
//}



function ShopPage(props) {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  const {
    products
  } = props || {};
  return (
    /*#__PURE__*/
    //{
    //<div className='m-auto p-5 max-w-4xl'>
    //<ProductBrowser
    //    storeId={data}
    //    currentUser={currentUser}
    ///>
    //</div>
    //}          
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "products container mx-auto my-32 px-4 xl:px-0",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h2", {
        className: "products-main-title main-title mb-5 text-xl uppercase",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "main-title-inner",
          children: "Products"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4",
        children: products.length ? products.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          product: product
        }, product.id)) : ''
      })]
    })
  );
}
async function getStaticProps() {
  var _data$products;

  const {
    data
  } = await _data_client_ApolloClient__WEBPACK_IMPORTED_MODULE_1__/* ["default"].query */ .ZP.query({
    query: _data_graphql_queries_get_products__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
  });
  return {
    props: {
      products: data !== null && data !== void 0 && (_data$products = data.products) !== null && _data$products !== void 0 && _data$products.nodes ? data.products.nodes : []
    },
    revalidate: 1
  };
}
;
});

/***/ }),

/***/ 8034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fX": () => (/* binding */ DEFAULT_IMG_URL),
/* harmony export */   "zY": () => (/* binding */ DEFAULT_PRODUCT_HOME_IMG_URL)
/* harmony export */ });
/* unused harmony export DEFAULT_CATEGORY_IMG_URL */
const DEFAULT_IMG_URL = 'https://via.placeholder.com/400x225';
const DEFAULT_CATEGORY_IMG_URL = 'https://via.placeholder.com/416x224';
const DEFAULT_PRODUCT_HOME_IMG_URL = 'https://via.placeholder.com/308x308';

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,664,675,921,149], () => (__webpack_exec__(3396)));
module.exports = __webpack_exports__;

})();