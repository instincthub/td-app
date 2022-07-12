import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    sticky: 'left'
  },
  {
    Header: 'Details',
    Footer: 'Details',
    accessor: 'details',
    sticky: 'left'
  },
  {
    Header: 'Quiz',
    Footer: 'Quiz',
    accessor: 'quiz'
  }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name'
      },
    ]
  },
  {
    Header: 'Details',
    Footer: 'Details',
    columns: [
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      },
      {
        Header: 'Details',
        Footer: 'Details',
        accessor: 'details'
      },
      {
        Header: 'Quiz',
        Footer: 'Quiz',
        accessor: 'quiz'
      }
    ]
  }
]
