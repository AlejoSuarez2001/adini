import React, { useEffect, useState } from 'react';
import { Box, Button, HStack, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, VStack, Icon } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useCatalog } from '../../contexts/CatalogContext';
import { useCategory } from '../../contexts/CategoryContext';

export default function CatalogNav() {
  const { getCatalogs, catalogs } = useCatalog();
  const { getCategories } = useCategory();
  const navigate = useNavigate();
  const [dataFetched, setDataFetched] = useState(false);
  const [categoriesByCatalog, setCategoriesByCatalog] = useState({});

  const fetchCatalogoYCategorias = async () => {
    await getCatalogs();
    const categories = await getCategories();
    if (categories) {
      const categoriesMap = categories.reduce((acc, category) => {
        if (!acc[category.catalog_id]) {
          acc[category.catalog_id] = [];
        }
        acc[category.catalog_id].push(category);
        return acc;
      }, {});
      setCategoriesByCatalog(categoriesMap);
    }

    setDataFetched(true);
  };

  useEffect(() => {
    if (!dataFetched) {
      fetchCatalogoYCategorias();
    }
  }, [dataFetched]);

  return (
    <Box>
      {!catalogs ? (null) : (
        <HStack justifyContent="center">
          {catalogs.map(catalog => (
            <Popover key={catalog.id} trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Button
                  variant="ghost"
                  fontSize="xs"
                  color="primary.500"
                  h={50}
                  rightIcon={<ChevronDownIcon />}
                  sx={{
                    borderRadius: "0",
                    _hover: {
                      bg: "#e7e9ff",
                    },
                  }}
                >
                  {catalog.name}
                </Button>
              </PopoverTrigger>
              <PopoverContent minWidth={"200px"} width="auto">
                <PopoverArrow />
                <PopoverBody p={0}>
                  <VStack >
                    {categoriesByCatalog[catalog.id]?.length > 0 ? (
                      categoriesByCatalog[catalog.id].map(category => (
                        <Button
                          width="100%"
                          justifyContent={"start"}
                          key={category.id}
                          variant="ghost"
                          color={"#232325"}
                          fontSize="xs"
                          onClick={() => navigate(`/categories/${category.id}`)}
                        >
                          {category.name}
                        </Button>
                      ))
                    ) : (
                      <Box p={3} fontSize="xs">No hay categorías disponibles.</Box>
                    )}
                  </VStack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </HStack>
      )}
    </Box>
  );
}
