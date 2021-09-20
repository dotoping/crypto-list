import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutput(props) {
    return (
        <Stack spacing={2}>
            <Pagination count={props.totalPages} variant="outlined" color="primary" />
        </Stack>
    );
}