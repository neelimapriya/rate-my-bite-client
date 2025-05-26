import { getAllCategory } from "@/services/category";
import FoodCategoryClient from "./FoodCategoryClient";
const FoodCategory = async() => {
   const { data } = await getAllCategory();

  return <FoodCategoryClient data={data.slice(0, 8)} />;
};

export default FoodCategory;