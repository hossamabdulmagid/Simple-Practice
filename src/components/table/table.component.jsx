import React from 'react'
import { Th, Span, Tr, Thead, Tablle } from './table.styles'
const Table = () => {
    return (
        <>
            <div className="container">
                <Tablle>
                    <Thead>
                        <Tr>
                            <Th> <Span>Mon</Span></Th>
                            <Th> <Span>Tue</Span></Th>
                            <Th> <Span>Wed</Span></Th>
                            <Th> <Span>Thu</Span></Th>
                            <Th> <Span>Fri</Span></Th>
                            <Th> <Span>Sat</Span></Th>


                        </Tr>
                    </Thead>
                    <tbody>

                    </tbody>
                </Tablle>
            </div>
        </>
    );
}

export default Table;