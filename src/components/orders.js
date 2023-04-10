
const Orders=(props)=>{

    const tables = [...new Set(props.valu.map((val) => val.table))];

    return (
      <div>
        <h2>Orders</h2>
        {tables.map((table) => (
          <div key={table}>
            <h3>Table {table}</h3>
            <ul>
              {props.valu
                .filter((val) => val.table === table)
                .map((val) => (
                  <li key={val.idi}>
                    id={val.idi} amount={val.amount} dish={val.dish}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
      
 
  export default Orders;

