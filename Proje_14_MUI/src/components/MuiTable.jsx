import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function MuiTable() {

    const rows = [
        { id: 1, firstName: "Hasan", lastName: "Korutürk", age: 25 },
        { id: 2, firstName: "Memo", lastName: "Boztepe", age: 25 },
        { id: 3, firstName: "Oğuz", lastName: "Avci", age: 26 },
        { id: 4, firstName: "Furki", lastName: "Sağır", age: 25 },
    ]

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>ISIM</TableCell>
                    <TableCell>SOYISIM</TableCell>
                    <TableCell>YAS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, i) => (
                    <TableRow>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default MuiTable