export const filterData = (searchInput, restaurants) => {
    const filteredData = restaurants.filter((res) => res.data.name.toLowerCase().includes(searchInput.toLowerCase()))
    return filteredData;
}