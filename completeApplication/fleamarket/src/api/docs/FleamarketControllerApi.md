# FleamarketControllerApi

All URIs are relative to *http://ec2-13-60-83-82.eu-north-1.compute.amazonaws.com:8080*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createUser**](#createuser) | **GET** /usersRegistry | Registrierung: Benutzerobjekt wird neu angelegt|
|[**findUser**](#finduser) | **GET** /userLogin | Login: Benutzerobjekt anhand der E-Mail suchen|
|[**searchCategories**](#searchcategories) | **GET** /categories | Alle Kategorien abrufen|
|[**searchProducts**](#searchproducts) | **GET** /products | Produkte abrufen|

# **createUser**
> User createUser()

Prüft ob man auf Grundlage der angegebenen Daten ein neuen Nutzer anlegen kann

### Example

```typescript
import {
    FleamarketControllerApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new FleamarketControllerApi(configuration);

let user: User; // (default to undefined)

const { status, data } = await apiInstance.createUser(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User** |  | defaults to undefined|


### Return type

**User**

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

# **findUser**
> User findUser()

Prüft ob die eingegebenen Daten zu einemBenutzer gehören

### Example

```typescript
import {
    FleamarketControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FleamarketControllerApi(configuration);

let email: string; // (default to undefined)

const { status, data } = await apiInstance.findUser(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] |  | defaults to undefined|


### Return type

**User**

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

