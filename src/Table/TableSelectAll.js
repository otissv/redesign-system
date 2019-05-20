import React from 'react'

export useTableSelectAll (selected) {
  useEffect(() => {
    const newState = selected.length === Object.keys(items).length
    if (selected.length === 0) {
      setAllSelected(false)
    } else if (allSelected !== newState) {
      setAllSelected(newState)
    }
  }, [selected])
}

export function TableSelectAll () {

  const [allSelected, setAllSelected] = useState(false)

    useEffect(() => {
      const newState = selected.length === Object.keys(items).length
      if (selected.length === 0) {
        setAllSelected(false)
      } else if (allSelected !== newState) {
        setAllSelected(newState)
      }
    }, [selected])

    function handleSelectHeadingChange(e) {
      setAllSelected(e.currentTarget.checked)
      dispatch({
        type: 'SET_SELECTED',
        selected: !allSelected ? Object.keys(items) : [],
      })
    }

    const AllSelectedHeading = () => (
      <input
        name="allSelected"
        type="checkbox"
        checked={allSelected}
        onChange={handleSelectHeadingChange}
        style={{ cursor: 'pointer' }}
      />
    )
  return 
}

export default TableSelectAll