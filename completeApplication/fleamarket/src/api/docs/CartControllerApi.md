# CartControllerApi

All URIs are relative to *http://ec2-13-60-83-82.eu-north-1.compute.amazonaws.com:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addItem**](#additem) | **POST** /cart/items | |
|[**getCart**](#getcart) | **GET** /cart | |
|[**removeItem**](#removeitem) | **DELETE** /cart/items/{productId} | |
|[**setQuantity**](#setquantity) | **PATCH** /cart/items | |

# **addItem**
> Array<CartItem> addItem(cartItemDto)


### Example

```typescript
import {
    CartControllerApi,
    Configuration,
    CartItemDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CartControllerApi(configuration);

let email: string; // (default to undefined)
let cartItemDto: CartItemDto; //

const { status, data } = await apiInstance.addItem(
    email,
    cartItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartItemDto** | **CartItemDto**|  | |
| **email** | [**string**] |  | defaults to undefined|


### Return type

**Array<CartItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCart**
> Array<CartItem> getCart()


### Example

```typescript
import {
    CartControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartControllerApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.getCart(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**Array<CartItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeItem**
> removeItem()


### Example

```typescript
import {
    CartControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CartControllerApi(configuration);

let email: string; // (default to undefined)
let productId: string; // (default to undefined)

const { status, data } = await apiInstance.removeItem(
    email,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setQuantity**
> Array<CartItem> setQuantity(cartItemDto)


### Example

```typescript
import {
    CartControllerApi,
    Configuration,
    CartItemDto
} from './api';

const configuration = new Configuration();
const apiInstance = new CartControllerApi(configuration);

let email: string; // (default to undefined)
let cartItemDto: CartItemDto; //

const { status, data } = await apiInstance.setQuantity(
    email,
    cartItemDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cartItemDto** | **CartItemDto**|  | |
| **email** | [**string**] |  | defaults to undefined|


### Return type

**Array<CartItem>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

