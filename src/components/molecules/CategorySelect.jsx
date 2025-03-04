import React, { useCallback } from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function CategorySelect({ categories = [], onClose }) {
    const navigate = useNavigate();

    const handleNavigation = useCallback((categoryId) => {
        onClose();
        setTimeout(() => {
            navigate(`/categories/${categoryId}`);
        }, 200);
    }, [onClose, navigate]);

    return (
        <Stack spacing="1">
            {categories.length > 0 ? (
                categories.map(category => (
                    <Button
                        onClick={() => handleNavigation(category.id)}
                        key={category.id}
                        variant="ghost"
                        fontSize='sm'
                        color={"#232325"}
                        justifyContent="start"
                    >
                        {category.name}
                    </Button>
                ))
            ) : (
                <Button variant="ghost" fontSize='sm' isDisabled justifyContent="start">
                    No hay categorías disponibles
                </Button>
            )}
        </Stack>
    );
}
