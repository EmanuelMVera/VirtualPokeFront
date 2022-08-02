import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredByTypes } from "../../../redux/actions";
// import styles from "../styles/controllers.module.css";

export default function FilteredByTypes() {
  const types = useSelector((state) => state.types);

  let dispatch = useDispatch();
  function onSelectChange(e) {
    dispatch(filteredByTypes(e.target.value));
  }
  // className={styles.controllers}
  // className={styles.controllersType}
  return (
    <div>
      <label>Type: </label>
      <select name="select" onChange={onSelectChange}>
        <option value="default">all</option>
        {types.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}

//Version 2 abierta:
//   return (
//     <div className={styles.controllers}>
//       <label>Tipos: </label>
//       <div className={styles.controllersType}>
//         <input
//           type="radio"
//           name="selectType"
//           value="default"
//           onChange={onSelectChange}
//         />
//         <span>all</span>
//         {types?.map((type) => (
//           <>
//             <input
//               type="radio"
//               name="selectType"
//               value={type.name}
//               onChange={onSelectChange}
//             />
//             <span>{type.name}</span>
//           </>
//         ))}
//       </div>
//     </div>
//   );
