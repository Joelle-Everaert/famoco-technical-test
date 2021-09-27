import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchList } from '../../redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const useStyles = makeStyles({
  root: {
    borderRadius: '0.5rem',
    borderCollapse: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem',
    marginTop: '8px',
  },
  table: {
    minWidth: '23.4375rem',
  },
  image: {
    height: '6.25rem',
    width: '6.25rem',
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '0.9375rem',
  },
  textHeader: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  textHeaderLocation: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  description: {
    fontStyle: 'italic',
    fontSize: '1rem',
  },
  content: {
    fontSize: '1rem',
  },
  location: {
    margin: 0,
  },
  
})

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell>
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell />
          {expandComponent}
        </TableRow>
      )}
    </>
  )
}

const Home = ({ listData, fetchList }) => {
  const [page, setPage] = useState(0)
  const [elementPerPage, setElementPerPage] = useState(4)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setElementPerPage(+event.target.value)
    setPage(0)
  }

  useEffect(() => {
    fetchList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const classes = useStyles()

  return listData.loading ? (
    <h2>Loading</h2>
  ) : listData.error ? (
    <h2>{listData.error}</h2>
  ) : (
    <>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.heardertable}>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell className={classes.textHeader}>NAME</TableCell>
              <TableCell className={classes.textHeader} align="center">
                LOCATION
              </TableCell>
              <TableCell className={classes.textHeader} align="right">
                PICTURE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData &&
              listData.data &&
              listData.data
                .slice(page * elementPerPage, page * elementPerPage + elementPerPage)
                .map((item) => {
                  return (
                    <ExpandableTableRow
                      key={item.name}
                      expandComponent={
                        <TableCell className={classes.description} colSpan="5">
                          {item.description}
                        </TableCell>
                      }
                    >
                      <TableCell
                        className={classes.title}
                        component="th"
                        scope="row"
                      >
                        {item.name}
                      </TableCell>
                      <TableCell className={classes.content} align="center">
                        {item.common_locations != null ? (
                          item.common_locations.map((anotherItem) => {
                            return (
                              <p className={classes.location}>{anotherItem}</p>
                            )
                          })
                        ) : (
                          <p className={classes.location}>Nowhere and Everywhere...</p>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <img
                          className={classes.image}
                          src={item.image}
                          alt="monster"
                        />
                      </TableCell>
                    </ExpandableTableRow>
                  )
                })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[4, 10, 15, 25, 50, 81]}
          component="div"
          count={81}
          rowsPerPage={elementPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    listData: state.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: () => dispatch(fetchList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
