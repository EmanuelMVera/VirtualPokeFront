import React from "react";
import { useDispatch } from "react-redux";
import { filteredByCreated } from "../../../redux/actions";
// import styles from "../styles/controllers.module.css";

export default function FilteredByCreated() {
  let dispatch = useDispatch();
  function onSelectChange(e) {
    dispatch(filteredByCreated(e.target.value));
  }
  //className={styles.controllers}
  return (
    <div>
      <label>Source: </label>
      <select name="select" onChange={onSelectChange}>
        <option value="default">api/db</option>
        <option value="api">api</option>
        <option value="db">db</option>
      </select>
    </div>
  );
}

//Version alternativa abierta:
// let dispatch = useDispatch();
// function onSelectChange(e) {
//   dispatch(filteredByCreated(e.target.value));
// }

// return (
//   <div className={styles.controllers}>
//     <label>Origen: </label>

//     <div className={styles.controllersCreated}>
//       <div>
//         <input
//           type="radio"
//           name="selectCreated"
//           value="default"
//           onChange={onSelectChange}
//         />
//         <span>api/db</span>
//       </div>

//       <div>
//         <input
//           type="radio"
//           name="selectCreated"
//           value="api"
//           onChange={onSelectChange}
//         />
//         <span>api</span>
//       </div>

//       <div>
//         <input
//           type="radio"
//           name="selectCreated"
//           value="db"
//           onChange={onSelectChange}
//         />
//         <span>db</span>
//       </div>
//     </div>
//   </div>
// );
