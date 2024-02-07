function ArrayIndex() {
    const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
    const filterArr = [];
  
    arr.forEach(num => {
      if (!filterArr.includes(num)) {
        filterArr.push(num);
      }
    });
  
    return (
<>

<div className="flex">
    
<div>Duplicate Values Are : {filterArr}</div>

</div>

</>
    )
  }
  
  export default ArrayIndex;
  