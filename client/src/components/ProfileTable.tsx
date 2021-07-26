import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const createProfilePage = (albums: {count: number, categories: string[]}, connections: {count: number, users: string[]}, feed: {count: number, posts: string[]} ) => { 
    return {albums, connections, feed}; 
}

const row = createProfilePage(
    {count: 3, categories: ['style', 'makeup', 'nature']}, 
    {count: 2, users: ['max', 'peyton']}, 
    {count: 2, posts: ['text', 'picture']}); 

const ProfileTable: FC = () => { 
    return( 
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Albums</TableCell>
                        <TableCell>Connections</TableCell>
                        <TableCell>Feed</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
} 


