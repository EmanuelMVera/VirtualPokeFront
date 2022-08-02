import React from "react";
import FilteredByCreated from "./FilteredByCreated";
import FilteredByTypes from "./FilteredByTypes";
import OrderBy from "./OrderBy";

import styles from "../styles/asideSection.module.css";

export default function AsideSection() {
  return (
    <div className={styles.aside}>
      <FilteredByCreated />
      <OrderBy />
      <FilteredByTypes />
    </div>
  );
}
