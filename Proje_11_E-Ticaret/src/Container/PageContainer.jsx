import * as React from 'react';

import Container from '@mui/material/Container';

function PageContainer({ children }) {
    return (
        <div style={{ marginLeft: "12%", marginRight: "12%" }}>
            <Container maxWidth="sm"></Container>
            {children}
        </div>
    )
}

export default PageContainer    