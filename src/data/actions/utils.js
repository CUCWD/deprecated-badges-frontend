/*
const sortAlphaAsc = (gradeRowA, gradeRowB) => {
  const a = gradeRowA.username.toUpperCase();
  const b = gradeRowB.username.toUpperCase();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
*/
/*
const sort = function sort(firstElement, secondElement, key, direction) {
  const directionIsAsc = direction === 'asc';

  if (firstElement[key] > secondElement[key]) {
    return directionIsAsc ? 1 : -1;
  } else if (firstElement[key] < secondElement[key]) {
    return directionIsAsc ? -1 : 1;
  }
  return 0;
};

onSort(direction) {
  dataSortable.sort((firstElement, secondElement) =>
    sort(firstElement, secondElement, 'username', direction));
},
*/
const headingMapper = (filterKey, data) => {

  const dataSortable = data.slice();

  function all(entry) {
    // debugger;
    // columnSortable: true,
    if (entry) {

      // columnSortable: true,
      // onSort: () => {},
      const results = [{
        label: 'Username',
        key: 'username',
        width: 'col-2',
      }];

      // columnSortable: false,
      // onSort: () => {},
      const progressHeadings = entry.progress
        .filter(blocks => blocks.block_display_name)
        .map(b => ({
          label: b.block_display_name.replace(/[0-9]+\./g, ''),
          key: b.block_id,
          width: 'col-1',
        }));

      return results.concat(progressHeadings);

      /*
      const assignmentHeadings = entry.section_breakdown
        .filter(section => section.label)
        .map(s => ({
          label: s.label,
          key: s.label,
        }));

      const totals = [{
        label: 'Total',
        key: 'total',
      }];

      return results.concat(assignmentHeadings).concat(totals);
      */
    }
    return [];
  }
/*
  function some(entry) {
    if (!entry) return [];

    const results = [{
      label: 'Username',
      key: 'username',
    }];

    const assignmentHeadings = entry.section_breakdown
      .filter(section => section.label && section.category === filterKey)
      .map(s => ({
        label: s.label,
        key: s.label,
      }));

    const totals = [{
      label: 'Total',
      key: 'total',
    }];

    return results.concat(assignmentHeadings).concat(totals);
  }
*/
  return filterKey === 'All' ? all : some;
};

//sortAlphaAsc
export { headingMapper };

