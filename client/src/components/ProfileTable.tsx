import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const createProfilePage = (albums: {count: number, categories: string[]}, connections: {count: number, users: string[]}) => { 
    return {albums, connections} 
}

const row = createProfilePage(
    {count: 3, categories: ['style', 'makeup', 'nature']}, 
    {count: 2, users: ['max', 'peyton']}); 

const ProfileTable: FC = () => { 
    return( 
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Albums</TableCell>
                        <TableCell align='center'>Connections</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell align='center'>{row.albums.count}
                            {row.albums.categories.map((item) => (
                                <p>{item}</p>
                            ))}
                        </TableCell>
                        <TableCell align='center'>{row.connections.count}
                            {row.connections.users.map((item) => (
                                <p>{item}</p>
                            ))} 
                         </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
} 

export default ProfileTable; 

