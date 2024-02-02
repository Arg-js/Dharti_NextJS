import { getCategories, getTags } from '../blogs-service-api';
import FilterPanelBody from './FilterPanelBody';

const FilterPanel = async () => {
  // QUERIES
  const categories = await getCategories();
  const tags = await getTags();
  // QUERIES ENDS

  return <FilterPanelBody tags={tags} categories={categories} />;
};

export default FilterPanel;
