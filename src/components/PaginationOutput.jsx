import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutput(props) {
    console.log(props)
    return (
        <Stack spacing={2}>
            <Pagination
                onChange={props.page}
                count={props.totalPages}
                variant="outlined"
                color="primary"/>
        </Stack>
    );
}