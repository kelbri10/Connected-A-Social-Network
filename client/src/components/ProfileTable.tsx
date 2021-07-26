import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const createProfilePage => (albums: number, connections: number, feed: number ){ 
    return {albums, connections, feed}; 
}