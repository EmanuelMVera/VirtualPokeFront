import React from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../../../redux/actions";
// import styles from "../styles/controllers.module.css";

export default function OrderBy() {
  let dispatch = useDispatch();

  function onSelectChange(e) {
    dispatch(sortBy(e.target.value));
  }

  // className={styles.controllersOrder}
  // className={styles.controllers}
  return (
    <div>
      <label>Sort by:</label>
      <select name="select" onChange={onSelectChange}>
        <option value="default">default</option>
        <option value="ascendingAlphabet">abc...</option>
        <option value="descendingAlphabet">zxy...</option>
        <option value="ascendingAtack">Greater Power</option>
        <option value="descendingAtack">Lower Power</option>
      </select>
    </div>
  );
}

//Version 2 abierta:
// return (
//   <div className={styles.controllers}>
//     <label>Sort by: </label>
//     <div className={styles.controllersOrder}>
//       <div>
//         <input
//           type="radio"
//           name="selectOrder"
//           value="default"
//           onChange={onSelectChange}
//         />
//         <span>Por defecto</span>
//       </div>

//       <div>
//         <input
//           type="radio"
//           name="selectOrder"
//           value="ascendingAlphabet"
//           onChange={onSelectChange}
//         />
//         <span>a..z</span>
//       </div>

//       <div>
//         <input
//           type="radio"
//           name="selectOrder"
//           value="descendingAlphabet"
//           onChange={onSelectChange}
//         />
//         <span>z..a</span>
//       </div>

//       <div>
//         <input
//           type="radio"
//           name="selectOrder"
//           value="ascendingAtack"
//           onChange={onSelectChange}
//         />
//         <span>mas poderoso</span>
//       </div>

//       <div>
//         <input
//           type="radio"
//           name="selectOrder"
//           value="descendingAtack"
//           onChange={onSelectChange}
//         />
//         <span>mas debil</span>
//       </div>
//     </div>
//   </div>
// );
