# FleamarketControllerApi

All URIs are relative to *http://ec2-13-60-83-82.eu-north-1.compute.amazonaws.com:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**searchCategories**](#searchcategories) | **GET** /categories | Alle Kategorien abrufen|
|[**searchProducts**](#searchproducts) | **GET** /products | Produkte abrufen|

# **searchCategories**
> Array<CategoryCount> searchCategories()

Gibt eine Liste von Kategorien-Objekten(Name und Produktanzahl) zurück.

### Example

```typescript
import {
    FleamarketControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FleamarketControllerApi(configuration);

const { status, data } = await apiInstance.searchCategories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CategoryCount>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Erfolgreich |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchProducts**
> Array<Product> searchProducts()

Gibt eine Liste von Produkten zurück

### Example

```typescript
import {
    FleamarketControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FleamarketControllerApi(configuration);

let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchProducts(
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<Product>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Erfolgreich |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

