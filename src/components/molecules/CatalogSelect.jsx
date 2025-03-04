import React, { useState } from 'react';
import {
    Collapse,
    Button,
    Stack,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import CategorySelect from './CategorySelect';

export default function CatalogSelect({ setIsNavOpen, categoriesByCatalog, catalogs }) {
    const [isCatalogsOpen, setIsCatalogsOpen] = useState(false);
    const [openCatalog, setOpenCatalog] = useState({});

    const handleToggleCatalog = (catalogId) => {
        setOpenCatalog(prevState => ({
            ...prevState,
            [catalogId]: !prevState[catalogId],
        }));
    };

    const handleToggleCatalogs = () => {
        setIsCatalogsOpen(prevState => !prevState);
    };
    return (
        <>
            <Button
                fontSize='sm'
                h={"45px"}
                w={"100%"}
                my={1}
                rightIcon={isCatalogsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                variant="ghost"
                color="primary.500"
                onClick={handleToggleCatalogs}
            >
                Catálogos
            </Button>

            <Collapse style={{ width: "100%", overflowY: "auto" }} in={isCatalogsOpen}>
                <Stack spacing="1" mt={2}>
                    {catalogs.map(catalog => (
                        <React.Fragment key={catalog.id}>
                            <Button
                                variant="ghost"
                                color="primary.500"
                                fontSize='sm'
                                justifyContent="start"
                                onClick={() => handleToggleCatalog(catalog.id)}
                                rightIcon={openCatalog[catalog.id] ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            >
                                {catalog.name}
                            </Button>

                            <Collapse in={openCatalog[catalog.id]}>
                                {Array.isArray(categoriesByCatalog[catalog.id]) && (
                                    <Stack spacing="1" mt={2}>
                                        <CategorySelect
                                            categories={categoriesByCatalog[catalog.id]}
                                            onClose={() => {
                                                setOpenCatalog({});
                                                setIsNavOpen();
                                            }}
                                        />
                                    </Stack>
                                )}
                            </Collapse>
                        </React.Fragment>
                    ))}
                </Stack>
            </Collapse>
        </>
    );
}
