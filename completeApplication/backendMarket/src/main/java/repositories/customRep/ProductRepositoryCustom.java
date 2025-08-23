package repositories.customRep;


import java.util.List;

import repositories.customRep.ProductRepositoryImpl.CategoryCount;

public interface ProductRepositoryCustom {
    List<CategoryCount> findCategoryCounts();
}
