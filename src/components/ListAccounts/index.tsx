import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import * as S from './styles'
import Button from '@/components/Button'
import Input from '@/components/Input' 

export type ListDefaultProps = {
  openModal: (value: boolean) => void
}

function createData(
  title: string,
  description: number,
  category: number,
  value: number,
  date: number,
) {
  return { title, description, category, value, date }
}

const titles = ['Title', 'Description', 'Category', 'Value', 'Date', 'Delete']

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
]

export default function ListAccunts({ openModal }: ListDefaultProps) {
  return (
    <S.Wrapper>
      <S.Button>
        <Button isFilter onClick={() => openModal(true)}>
          Adicionar
        </Button>
      </S.Button>
      <S.FiltersAndDataTable>
        <S.Filters>
          <Input label="Data Inicial" type="date" name="initialDate" isFilter />    
          <S.Filter>
            <Input label="Data Final" type="date" name="finalDate" isFilter />
          </S.Filter>
          <S.Filter>
            <Input label="Title" type="text" placeholder="Titulo" name="title" isFilter />
          </S.Filter>
          <S.Filter>
            <Input label="Description" type="text" placeholder="Description" name="description" isFilter />
          </S.Filter>
          <S.Filter>
            <Input label="Category" type="text" placeholder="Category" name="category" isFilter />
          </S.Filter>
        </S.Filters>
        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table sx={{ minWidth: 650 }} aria-label="list accounts">
            <TableHead>
              <TableRow>
              {titles.map((title) => (
                <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }}>{title}</TableCell>
              ))}
              </TableRow> 
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ fontSize: 15 }}>
                    {row.title}
                  </TableCell>
                  <TableCell align="right" sx={{ fontSize: 15 }}>{row.description}</TableCell>
                  <TableCell align="right" sx={{ fontSize: 15 }}>{row.category}</TableCell>
                  <TableCell align="right" sx={{ fontSize: 15 }}>{row.value}</TableCell>
                  <TableCell align="right" sx={{ fontSize: 15 }}>{row.date}</TableCell>
                  <TableCell align="left">
                    <S.IconDelete size={30} onClick={() => console.log('delete')}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </S.FiltersAndDataTable>
    </S.Wrapper>
  )
}